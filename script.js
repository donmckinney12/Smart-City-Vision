function simulateInference() {
    const fileInput = document.getElementById('imageUpload');
    const status = document.getElementById('status');
    const count = document.getElementById('count');
    const output = document.getElementById('jsonOutput');

    if (fileInput.files && fileInput.files[0]) {
        status.innerText = "Analyzing...";

        // This part shows the image on the screen
        const reader = new FileReader();
        reader.onload = function(e) {
            // Create or update an image element to show what was uploaded
            let imgPreview = document.getElementById('preview');
            if (!imgPreview) {
                imgPreview = document.createElement('img');
                imgPreview.id = 'preview';
                imgPreview.style.width = '100%';
                imgPreview.style.marginTop = '10px';
                imgPreview.style.borderRadius = '8px';
                document.querySelector('.results-box').prepend(imgPreview);
            }
            imgPreview.src = e.target.result;
        };
        reader.readAsDataURL(fileInput.files[0]);

        // Simulate the AI processing delay
        setTimeout(() => {
            const mockData = [
    {
        "bbox": [62.42, 33.71, 860.83, 675.47],
        "class": "person",
        "confidence": 0.8407
    }
];

            status.innerText = "Analysis Complete";
            count.innerText = "1";
            output.innerText = JSON.stringify(mockData, null, 4);
        }, 1000);
    } else {
        alert("Please select an image first!");
    }
}