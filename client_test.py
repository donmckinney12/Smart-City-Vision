import requests

url = "http://127.0.0.1:5000/predict"
# Use a public image URL to test the logic
test_image_url = "https://raw.githubusercontent.com/ultralytics/ultralytics/main/ultralytics/assets/bus.jpg"

# Download the image bytes
img_data = requests.get(test_image_url).content

# Send to your Flask API
r = requests.post(url, files={'image': ('bus.jpg', img_data, 'image/jpeg')})

print(f"Status Code: {r.status_code}")
print("Detections Found:")
print(r.json())