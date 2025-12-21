from ultralytics import YOLO

# Load a pre-trained small model (perfect for low-latency cloud deployment)
model = YOLO('yolov8n.pt')

# Run inference on a sample image (YOLO will download a sample if you don't provide one)
results = model('https://ultralytics.com/images/bus.jpg')

# Print results to console
for result in results:
    print(result.probs)  # Class probabilities
    result.show()        # Display the image with boxes