---
title: SketchAI - Image to Sketch Converter
emoji: 🎨
colorFrom: purple
colorTo: pink
sdk: docker
app_file: app.py
pinned: false
license: mit
---

# SketchAI - Image to Sketch Converter

Transform your photos into beautiful pencil sketch drawings with AI! SketchAI uses advanced computer vision techniques to convert regular photographs into artistic sketch representations.

## Features

✨ **Beautiful Web Interface** - Stunning dark theme with animated gradient borders  
🖼️ **Drag & Drop Upload** - Easy image uploading with support for multiple formats  
⚙️ **Customizable Settings** - Adjust blur intensity and enable enhanced line definition  
👁️ **Real-time Preview** - See your original and sketch side-by-side  
💾 **Instant Download** - Get your sketch with one click  
📱 **Mobile Friendly** - Works perfectly on all devices  

## How It Works

1. **Upload** your image by dragging and dropping or browsing files
2. **Customize** the sketch settings (blur intensity, enhanced lines)
3. **Process** - Watch as AI transforms your photo into a sketch
4. **Download** your beautiful pencil sketch drawing

## Supported Formats

- JPG/JPEG
- PNG
- BMP
- TIFF
- WebP

## Technical Details

The application uses a multi-step image processing pipeline:
- **Grayscale Conversion** - Converts color images to grayscale
- **Image Inversion** - Creates negative for sketch effect
- **Gaussian Blur** - Applies customizable blur for artistic effect
- **Color Dodge Blending** - Combines images for realistic pencil sketch appearance
- **Optional Enhancement** - Adaptive thresholding for sharper lines

Built with Flask, OpenCV, and modern web technologies.

## Usage

Simply visit the app, upload any photo, adjust settings to your liking, and download your personalized sketch artwork!

---

*Created with ❤️ using OpenCV and Flask*