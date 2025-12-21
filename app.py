import io
import os
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from PIL import Image
from ultralytics import YOLO

# 1. Initialize the app FIRST
app = Flask(__name__)
CORS(app)

# 2. Initialize the model
model = YOLO('yolov8n.pt')


# 3. Define your routes SECOND
@app.route('/')
def index():
    return render_template('index.html')


@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({"error": "No image provided"}), 400

    file = request.files['image']

    try:
        img_bytes = file.read()
        img = Image.open(io.BytesIO(img_bytes))
        results = model(img)

        # Initialize the list before using it
        detections = []
        for r in results:
            for box in r.boxes:
                detections.append({
                    "class": model.names[int(box.cls)],
                    "confidence": float(box.conf),
                    "bbox": [float(x) for x in box.xyxy[0].tolist()]
                })

        return jsonify({
            "status": "success",
            "count": len(detections),
            "detections": detections
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# 4. Run the app LAST
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)