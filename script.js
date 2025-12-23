function simulateInference() {
    const status = document.getElementById('status');
    const count = document.getElementById('count');
    const output = document.getElementById('jsonOutput');

    // 1. Show the "Analyzing" status from your video
    status.innerText = "Analysis Complete";

    // 2. Use the exact data we saw in your demo video
    const mockData = [
        {
            "bbox": [62.42, 33.71, 860.83, 675.47],
            "class": "person",
            "confidence": 0.8407
        }
    ];

    // 3. Update the UI to match your video's results
    count.innerText = "1";
    output.innerText = JSON.stringify(mockData, null, 4);
}