#!/usr/bin/env python3
"""
Image to Sketch Converter
A Python program that converts images to pencil sketch style drawings.
"""

import cv2
import numpy as np
from PIL import Image
import argparse
import os
import sys


class ImageToSketch:
    """Class to handle image to sketch conversion operations."""
    
    def __init__(self):
        # Note: OpenCV supports many formats, so we mainly rely on cv2.imread success
        self.supported_formats = ['.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.tif', '.webp']
    
    def validate_image_file(self, filepath):
        """Validate if the file exists and has a supported format."""
        if not os.path.exists(filepath):
            raise FileNotFoundError(f"Image file not found: {filepath}")
        
        file_ext = os.path.splitext(filepath)[1].lower()
        if file_ext not in self.supported_formats:
            raise ValueError(f"Unsupported image format: {file_ext}. Supported formats: {', '.join(self.supported_formats)}")
        
        return True
    
    def load_image(self, filepath):
        """Load image from file path."""
        self.validate_image_file(filepath)
        
        # Load image using OpenCV
        image = cv2.imread(filepath)
        if image is None:
            raise ValueError(f"Could not load image: {filepath}")
        
        return image
    
    def convert_to_grayscale(self, image):
        """Convert color image to grayscale."""
        return cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    
    def invert_image(self, image):
        """Invert the grayscale image (create negative)."""
        return 255 - image
    
    def apply_gaussian_blur(self, image, blur_value=21):
        """Apply Gaussian blur to the image."""
        # Validate blur value
        if blur_value < 1:
            raise ValueError(f"Blur value must be positive (>= 1), got: {blur_value}")
        if blur_value % 2 == 0:
            blur_value += 1
        return cv2.GaussianBlur(image, (blur_value, blur_value), 0)
    
    def create_sketch_blend(self, grayscale_img, blurred_img):
        """Create sketch effect by blending grayscale and blurred images."""
        # Use color dodge blend mode to create sketch effect
        sketch = cv2.divide(grayscale_img, 255 - blurred_img, scale=256)
        return sketch
    
    def enhance_sketch(self, sketch):
        """Enhance the sketch with additional processing."""
        # Apply adaptive threshold for better line definition
        enhanced = cv2.adaptiveThreshold(
            sketch, 255, cv2.ADAPTIVE_THRESH_MEAN_C, cv2.THRESH_BINARY, 9, 9
        )
        return enhanced
    
    def convert_to_sketch(self, input_path, output_path=None, blur_value=21, enhance=False):
        """
        Main method to convert image to sketch.
        
        Args:
            input_path (str): Path to input image
            output_path (str): Path to save sketch (optional)
            blur_value (int): Gaussian blur intensity (default: 21)
            enhance (bool): Apply enhancement for better line definition
        
        Returns:
            numpy.ndarray: Sketch image array
        """
        print(f"Loading image: {input_path}")
        
        # Load the original image
        original_image = self.load_image(input_path)
        
        # Convert to grayscale
        print("Converting to grayscale...")
        grayscale = self.convert_to_grayscale(original_image)
        
        # Invert the grayscale image
        print("Creating inverted image...")
        inverted = self.invert_image(grayscale)
        
        # Apply Gaussian blur to inverted image
        print(f"Applying Gaussian blur (blur value: {blur_value})...")
        blurred = self.apply_gaussian_blur(inverted, blur_value)
        
        # Create sketch by blending
        print("Creating sketch blend...")
        sketch = self.create_sketch_blend(grayscale, blurred)
        
        # Apply enhancement if requested
        if enhance:
            print("Enhancing sketch...")
            sketch = self.enhance_sketch(sketch)
        
        # Save the sketch if output path is provided
        if output_path:
            self.save_sketch(sketch, output_path)
            print(f"Sketch saved to: {output_path}")
        
        return sketch
    
    def save_sketch(self, sketch, output_path):
        """Save sketch image to file."""
        # Ensure output directory exists
        output_dir = os.path.dirname(output_path)
        if output_dir and not os.path.exists(output_dir):
            os.makedirs(output_dir)
        
        # Save using OpenCV
        success = cv2.imwrite(output_path, sketch)
        if not success:
            raise ValueError(f"Failed to save sketch to: {output_path}")
    
    def display_comparison(self, original_path, sketch):
        """Display original and sketch side by side using matplotlib."""
        try:
            import matplotlib.pyplot as plt
            
            # Load original for comparison
            original = self.load_image(original_path)
            original_rgb = cv2.cvtColor(original, cv2.COLOR_BGR2RGB)
            
            # Create side-by-side comparison
            fig, axes = plt.subplots(1, 2, figsize=(12, 6))
            
            axes[0].imshow(original_rgb)
            axes[0].set_title('Original Image')
            axes[0].axis('off')
            
            axes[1].imshow(sketch, cmap='gray')
            axes[1].set_title('Sketch')
            axes[1].axis('off')
            
            plt.tight_layout()
            plt.show()
            
        except ImportError:
            print("Matplotlib not available for display. Sketch conversion completed successfully.")


def main():
    """Main function to handle command line interface."""
    parser = argparse.ArgumentParser(
        description="Convert images to pencil sketch style drawings",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python image_to_sketch.py input.jpg
  python image_to_sketch.py input.jpg -o sketch.png
  python image_to_sketch.py input.jpg -o sketch.png --blur 25 --enhance
  python image_to_sketch.py input.jpg --display
        """
    )
    
    parser.add_argument('input', help='Input image file path')
    parser.add_argument('-o', '--output', help='Output sketch file path')
    parser.add_argument('--blur', type=int, default=21, 
                       help='Gaussian blur value (default: 21, must be odd)')
    parser.add_argument('--enhance', action='store_true',
                       help='Apply enhancement for better line definition')
    parser.add_argument('--display', action='store_true',
                       help='Display original and sketch comparison')
    
    args = parser.parse_args()
    
    # Validate blur value (must be positive and odd)
    if args.blur < 1:
        print(f"Error: Blur value must be positive (>= 1), got: {args.blur}", file=sys.stderr)
        sys.exit(1)
    if args.blur % 2 == 0:
        args.blur += 1
        print(f"Blur value adjusted to {args.blur} (must be odd)")
    
    # Generate output filename if not provided
    if not args.output:
        input_name, input_ext = os.path.splitext(args.input)
        args.output = f"{input_name}_sketch{input_ext}"
    
    try:
        # Create converter instance
        converter = ImageToSketch()
        
        # Convert image to sketch
        sketch = converter.convert_to_sketch(
            args.input, 
            args.output, 
            blur_value=args.blur,
            enhance=args.enhance
        )
        
        print(f"\n✓ Successfully converted '{args.input}' to sketch!")
        print(f"✓ Sketch saved as: '{args.output}'")
        
        # Display comparison if requested
        if args.display:
            converter.display_comparison(args.input, sketch)
            
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()