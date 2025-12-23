function simulateInference() {
    const status = document.getElementById('status');
    const count = document.getElementById('count');
    const output = document.getElementById('jsonOutput');

    // 1. Simulate "Loading"
    status.innerText = "Analyzing...";
    output.innerText = "";

    setTimeout(() => {
        // 2. Data taken directly from your project video
        const mockData = {
            "bbox": [62.42, 33.71, 860.83, 675.47],
            "class": "person",
            "confidence": 0.8407
        };

        // 3. Update the UI
        status.innerText = "Analysis Complete";
        count.innerText = "1";
        output.innerText = JSON.stringify(mockData, null, 4);
    }, 1500);
}