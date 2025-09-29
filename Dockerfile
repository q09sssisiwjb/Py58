FROM python:3.11-slim

# Create user for security
RUN useradd -m -u 1000 user
USER user
ENV PATH="/home/user/.local/bin:$PATH"

# Set working directory
WORKDIR /app

# Install system dependencies
USER root
RUN apt-get update && apt-get install -y \
    libglib2.0-0 \
    libgomp1 \
    && rm -rf /var/lib/apt/lists/*

USER user

# Copy requirements and install Python dependencies
COPY --chown=user ./requirements.txt requirements.txt
RUN pip install --no-cache-dir --upgrade -r requirements.txt

# Copy application files
COPY --chown=user . /app

# Create necessary directories
RUN mkdir -p uploads results

# Expose port (will be set by Hugging Face)
EXPOSE 7860

# Start application with gunicorn (bind to PORT env var with 7860 fallback)
CMD ["bash", "-c", "exec gunicorn --workers=2 --threads=4 --timeout=60 --bind=0.0.0.0:${PORT:-7860} app:app"]