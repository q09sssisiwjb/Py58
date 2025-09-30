# Image Upscaler

## Overview
This is an AI-powered image upscaling web application that allows users to upscale images by 2x, 4x, 6x, or 8x magnification. The application is a static HTML/CSS/JavaScript site based on the Qoc Upscaler.

## Project Type
- **Type**: Static Website (Frontend Only)
- **Languages**: HTML, CSS, JavaScript
- **No Backend**: This is a pure client-side application with no server-side processing

## Project Architecture
- **Server**: Python's built-in HTTP server
- **Port**: 5000 (configured to bind to 0.0.0.0)
- **Deployment**: Configured for autoscale deployment (static site)

## Key Files
- `index.html` - Main application page with modern UI design
- `new-design.css` - Custom CSS for the redesigned interface
- `jsnew_image-upscaler.js` - Core image upscaling logic
- `js_free-online-image-upscaler.js` - Upscaler functionality
- `js_quene.js` - Queue management for batch processing
- CSS files: `css.css`, `style.css`, `local.css`, `all.min.css`

## Features
- Drag and drop image upload
- Multiple magnification levels (2x, 4x, 6x, 8x)
- Image comparison (before/after)
- Queue system for batch processing
- Automatic download on render finish
- Mobile-friendly interface

## UI Design
- **Theme**: Modern dark theme with purple/pink gradient accents
- **Typography**: Space Grotesk font family
- **Styling**: Tailwind CSS with custom color palette
- **Upload Area**: Large drag-and-drop zone with cloud icon
- **Options**: Clean dropdown selectors for resolution and file format
- **No Header**: Streamlined design without navigation header
- **No Quality Option**: Simplified interface with resolution and format only

## Setup Complete (September 30, 2025)
- Python 3.11 installed for serving static files
- Workflow configured to run HTTP server on port 5000
- Deployment settings configured for autoscale
- Application tested and verified working
- UI redesigned with modern dark theme (September 30, 2025)
