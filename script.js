function simulateInference() {
    const status = document.getElementById('status');
    const count = document.getElementById('count');
    const output = document.getElementById('jsonOutput');

    status.innerText = "Analyzing...";

    setTimeout(() => {
        // This is the data I saw in your video!
        const mockData = {
            "bbox": [62.42, 33.71, 860.83, 675.47],
            "class": "person",
            "confidence": 0.8407
        };

        status.innerText = "Analysis Complete";
        count.innerText = "1";
        output.innerText = JSON.stringify(mockData, null, 4);
    }, 1200);
}