import os
import uuid
from flask import Flask, render_template, request, jsonify, send_from_directory, url_for
from werkzeug.utils import secure_filename
import cv2
import numpy as np
from PIL import Image
from image_to_sketch import ImageToSketch

app = Flask(__name__)

# Configuration
app.config['MAX_CONTENT_LENGTH'] = 10 * 1024 * 1024  # 10MB max file size
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['RESULT_FOLDER'] = 'results'

# Allowed file extensions
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif', 'bmp', 'tiff', 'webp'}

def allowed_file(filename):
    """Check if file extension is allowed."""
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def ensure_directories():
    """Ensure upload and result directories exist."""
    for directory in [app.config['UPLOAD_FOLDER'], app.config['RESULT_FOLDER']]:
        if not os.path.exists(directory):
            os.makedirs(directory)

@app.route('/')
def index():
    """Serve the main page."""
    return render_template('index.html')

@app.route('/convert', methods=['POST'])
def convert_image():
    """Handle image conversion to sketch."""
    try:
        # Check if image was uploaded
        if 'image' not in request.files:
            return jsonify({'error': 'No image file provided'}), 400
        
        file = request.files['image']
        if file.filename == '':
            return jsonify({'error': 'No file selected'}), 400
        
        if not allowed_file(file.filename):
            return jsonify({'error': 'Invalid file type. Please upload an image file.'}), 400
        
        # Get processing options
        blur_value = int(request.form.get('blur', 21))
        enhance = request.form.get('enhance', 'false').lower() == 'true'
        
        # Validate blur value
        if blur_value < 1:
            return jsonify({'error': 'Blur value must be positive'}), 400
        
        # Make blur value odd
        if blur_value % 2 == 0:
            blur_value += 1
        
        # Generate unique filename
        file_id = str(uuid.uuid4())
        if file.filename and '.' in file.filename:
            original_ext = file.filename.rsplit('.', 1)[1].lower()
        else:
            original_ext = 'jpg'  # Default extension
        input_filename = f"{file_id}_original.{original_ext}"
        output_filename = f"{file_id}_sketch.jpg"
        
        # Save uploaded file
        input_path = os.path.join(app.config['UPLOAD_FOLDER'], input_filename)
        output_path = os.path.join(app.config['RESULT_FOLDER'], output_filename)
        
        file.save(input_path)
        
        # Convert image to sketch
        converter = ImageToSketch()
        sketch = converter.convert_to_sketch(
            input_path, 
            output_path, 
            blur_value=blur_value,
            enhance=enhance
        )
        
        # Generate URL for the result
        sketch_url = url_for('get_result', filename=output_filename)
        
        # Clean up input file after successful processing
        try:
            os.remove(input_path)
        except Exception:
            pass  # Don't fail if cleanup fails
        
        return jsonify({
            'success': True,
            'sketch_url': sketch_url,
            'blur_value': blur_value,
            'enhanced': enhance
        })
        
    except cv2.error as e:
        print(f"OpenCV error processing image: {str(e)}")
        return jsonify({'error': 'Invalid or corrupted image file'}), 400
    except Exception as e:
        print(f"Error processing image: {str(e)}")
        return jsonify({'error': 'Failed to process image. Please try again.'}), 500

@app.route('/results/<filename>')
def get_result(filename):
    """Serve result images."""
    return send_from_directory(app.config['RESULT_FOLDER'], filename)

# Removed /uploads route for security - originals should not be publicly accessible

@app.errorhandler(413)
def too_large(e):
    """Handle file too large error."""
    return jsonify({'error': 'File size exceeds 10MB limit'}), 413

@app.errorhandler(500)
def internal_error(e):
    """Handle internal server errors."""
    return jsonify({'error': 'Internal server error'}), 500

def cleanup_old_files():
    """Clean up old uploaded and result files."""
    import time
    current_time = time.time()
    max_age = 24 * 60 * 60  # 24 hours
    
    for folder in [app.config['UPLOAD_FOLDER'], app.config['RESULT_FOLDER']]:
        if os.path.exists(folder):
            for filename in os.listdir(folder):
                file_path = os.path.join(folder, filename)
                if os.path.isfile(file_path):
                    file_age = current_time - os.path.getctime(file_path)
                    if file_age > max_age:
                        try:
                            os.remove(file_path)
                            print(f"Cleaned up old file: {file_path}")
                        except Exception as e:
                            print(f"Error cleaning up {file_path}: {e}")

if __name__ == '__main__':
    ensure_directories()
    
    # Clean up old files on startup
    try:
        cleanup_old_files()
    except Exception as e:
        print(f"Error during cleanup: {e}")
    
    # Auto-detect port: prefer PORT env var, else 7860 for HF, else 5000 for local
    port = int(os.environ.get('PORT') or (7860 if 'SPACE_ID' in os.environ else 5000))
    
    # Start the Flask development server
    print("Starting SketchAI Web Application...")
    print(f"Open your browser and navigate to: http://localhost:{port}")
    
    app.run(host='0.0.0.0', port=port, debug=False)