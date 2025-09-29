import os
import sys
import tempfile
import cv2
import torch
import gradio as gr
from torchvision.transforms import functional

# --- PATCH FOR COMPATIBILITY ---
sys.modules["torchvision.transforms.functional_tensor"] = functional

# --- EMBEDDED CSS FOR STYLING ---
CSS_STYLING = """
:root {
    --primary: #6a35ee; --primary-dark: #4a1dcc; --secondary: #00c9ff;
    --accent: #ff6b6b; --light: #f8f9ff; --dark: #1a1f36; --text: #4a5568;
    --input-background-fill: var(--light) !important;
    --input-border-color: #e0e0e0 !important;
    --input-label-color: var(--text) !important;
}
.gradio-container { background: var(--light); font-family: 'Inter', sans-serif; }
#main-title { color: var(--dark); text-align: center; font-size: 2.5rem !important; font-weight: 900; }
#main-subtitle { color: var(--text); text-align: center; font-size: 1rem !important; margin-top: -15px; margin-bottom: 20px; }
#submit-button { background: var(--primary); color: white; font-weight: bold; border-radius: 8px !important; transition: all 0.3s ease; }
#submit-button:hover { background: var(--primary-dark); box-shadow: 0px 4px 15px rgba(106, 53, 238, 0.4); transform: translateY(-2px); }
.gr-image { border: 1px dashed var(--input-border-color) !important; border-radius: 12px !important; min-height: 300px; }
input[type="range"]::-webkit-slider-thumb { background: var(--primary) !important; }
input[type="range"]::-moz-range-thumb { background: var(--primary) !important; }
"""

# --- DOWNLOAD HELPER FUNCTIONS ---
def download_file(url, dir_path, file_name):
    """Downloads a file if it doesn't exist."""
    os.makedirs(dir_path, exist_ok=True)
    file_path = os.path.join(dir_path, file_name)
    if not os.path.exists(file_path):
        print(f"Downloading {file_name}...")
        try:
            os.system(f"wget {url} -O {file_path}")
            print("Download complete.")
        except Exception as e:
            print(f"Error downloading {file_name}: {e}")
    return file_path

# --- DOWNLOAD MODELS AND EXAMPLES ---
print("Checking for required files...")
models_dir = 'models'
download_file('https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.5.0/realesr-general-x4v3.pth', models_dir, 'realesr-general-x4v3.pth')
download_file('https://github.com/TencentARC/GFPGAN/releases/download/v1.3.0/GFPGANv1.4.pth', models_dir, 'GFPGANv1.4.pth')
download_file('https://github.com/TencentARC/GFPGAN/releases/download/v1.3.4/RestoreFormer.pth', models_dir, 'RestoreFormer.pth')

examples_dir = 'examples'
example1_path = download_file('https://raw.githubusercontent.com/TencentARC/GFPGAN/master/inputs/whole_imgs/10045.png', examples_dir, 'example1.png')
example2_path = download_file('https://raw.githubusercontent.com/TencentARC/GFPGAN/master/inputs/whole_imgs/Blake_Lively.jpg', examples_dir, 'example2.jpg')

# --- LOAD MODELS INTO MEMORY ---
from basicsr.archs.srvgg_arch import SRVGGNetCompact
from gfpgan.utils import GFPGANer
from realesrgan.utils import RealESRGANer

bg_upsampler = None
try:
    model_path = os.path.join(models_dir, 'realesr-general-x4v3.pth')
    model = SRVGGNetCompact(num_in_ch=3, num_out_ch=3, num_feat=64, num_conv=32, upscale=4, act_type='prelu')
    half = torch.cuda.is_available()
    bg_upsampler = RealESRGANer(scale=4, model_path=model_path, model=model, tile=0, tile_pad=10, pre_pad=0, half=half)
    print("Background Upsampler (Real-ESRGAN) loaded for 4x enhancement.")
except Exception as e:
    print(f"Error loading background upsampler: {e}. The app may not work correctly.")

# --- CORE IMAGE PROCESSING FUNCTION ---
def upscale_image(img_path, version):
    """Enhance an image using GFPGAN and Real-ESRGAN with a fixed 4x upscale."""
    if not img_path:
        raise gr.Error("Please upload an image.")
    if not bg_upsampler:
        raise gr.Error("Background upsampler not loaded. Cannot proceed.")

    try:
        img = cv2.imread(img_path, cv2.IMREAD_UNCHANGED)
        if img is None: raise RuntimeError("Failed to read image.")
        
        has_alpha = img.shape[2] == 4

        face_enhancer = GFPGANer(
            model_path=os.path.join(models_dir, f'{version}.pth'),
            upscale=2, # Native GFPGAN upscale factor
            arch='RestoreFormer' if version == 'RestoreFormer' else 'clean',
            channel_multiplier=2,
            bg_upsampler=bg_upsampler # Real-ESRGAN used for 4x background
        )
        
        # This will produce a 4x enhanced image because the bg_upsampler is 4x
        _, _, output = face_enhancer.enhance(img, has_aligned=False, only_center_face=False, paste_back=True)

        output_rgb = cv2.cvtColor(output, cv2.COLOR_BGR2RGB)
        ext = 'png' if has_alpha else 'jpg'
        
        # Save to a temporary file for download
        with tempfile.NamedTemporaryFile(delete=False, suffix=f'.{ext}') as temp_file:
            cv2.imwrite(temp_file.name, cv2.cvtColor(output_rgb, cv2.COLOR_RGB2BGR))
            return output_rgb, temp_file.name

    except Exception as error:
        print(f"Error processing image: {error}")
        raise gr.Error(f"An error occurred: {error}")

# --- GRADIO UI LAYOUT ---
with gr.Blocks(css=CSS_STYLING, theme=gr.themes.Base()) as demo:
    gr.Markdown("<h1 id='main-title'>NeuraVision AI Image Upscaler</h1>", elem_id="main-title")
    gr.Markdown("<p id='main-subtitle'>Enhance old, blurry, and low-resolution photos with AI (Fixed 4x Upscale).</p>", elem_id="main-subtitle")

    with gr.Row(variant="panel"):
        # LEFT COLUMN (INPUT & CONTROLS)
        with gr.Column(scale=1):
            input_image = gr.Image(type="filepath", label="Upload Image")
            
            version = gr.Radio(
                ['GFPGANv1.4', 'RestoreFormer'], value='GFPGANv1.4', 
                label='AI Model', info="v1.4 for general use. RestoreFormer for old photos."
            )
            
            submit_btn = gr.Button("Enhance Image", variant="primary", elem_id="submit-button")
            
            gr.Examples(
                examples=[[example1_path, "RestoreFormer"], [example2_path, "GFPGANv1.4"]],
                inputs=[input_image, version],
                label="Click an example to start"
            )
        
        # RIGHT COLUMN (OUTPUT)
        with gr.Column(scale=1):
            output_image = gr.Image(type="numpy", label="Enhanced Result", interactive=False)
            download_button = gr.File(label="Download Image", interactive=False)

    # --- BUTTON & EVENT HANDLING ---
    submit_btn.click(
        fn=upscale_image, 
        inputs=[input_image, version], 
        outputs=[output_image, download_button]
    )
    input_image.clear(lambda: (None, None), None, [output_image, download_button])

if __name__ == "__main__":
    demo.queue()
    demo.launch(share=True) # Set share=False if you don't need a public link