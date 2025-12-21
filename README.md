# 🏙️ Smart City Vision: AI-Powered Object Tracker

An end-to-end computer vision application that detects urban objects (people, vehicles) using **YOLOv8**, served via a **Flask** API, and fully containerized with **Docker**.

## 🚀 Technical Overview
- **Core Model:** YOLOv8 (Ultralytics) for real-time object detection.
- **Backend:** Flask (Python 3.11) with Dockerized networking.
- **Frontend:** Modern CSS Dashboard with AJAX for seamless AI inference.
- **Deployment:** Containerized to ensure "it works on my machine" translates to the cloud.

## 🛠️ Setup & Usage
1. **Build:** `docker build -t smart-city-vision .`
2. **Run:** `docker run --rm -p 5000:5000 --name smart-city-container smart-city-vision`.
3. **Access:** Open `http://127.0.0.1:5000`.

## 👨‍💻 AI/ML Engineer Profile
**Donald McKinney** - Oak Park, IL
*Certifications: Python for Data Science, Cloud Computing, Software Engineering, Linux Commands & Shell Scripting.*
