FROM python:3.11-slim

# Install system dependencies
RUN apt-get update && apt-get install -y libgl1 libglib2.0-0 && rm -rf /var/lib/apt/lists/*

# Create a writable directory for YOLO settings
RUN mkdir -p /tmp/ultralytics && chmod -R 777 /tmp/ultralytics
ENV YOLO_CONFIG_DIR=/tmp/ultralytics

WORKDIR /app

# Upgrade pip and install dependencies
COPY requirements.txt .
RUN pip install --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# Copy the rest of your app (utilizing .dockerignore)
COPY . .

EXPOSE 5000

CMD ["python", "app.py"]