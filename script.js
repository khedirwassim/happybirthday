document.addEventListener("DOMContentLoaded", function () {
    const resolutionSelect = document.getElementById("resolutionSelect");
    const screenImage = document.getElementById("screenImage");

    resolutionSelect.addEventListener("change", function () {
        const selectedResolution = resolutionSelect.value;
        let imagePath;

        switch (selectedResolution) {
            case "144":
                imagePath = "144p-image.jpg";
                break;
            case "240":
                imagePath = "240p-image.jpg";
                break;
            case "480":
                imagePath = "480p-image.jpg";
                break;
            case "1080":
                imagePath = "1080p-image.jpg";
                break;
            case "2160":
                imagePath = "2160p-image.jpg";
                break;
             case "4K":
                imagePath = "4K-image.jpg";
                break;
            default:
                imagePath = "144p-image.jpg";
        }

        screenImage.src = imagePath;
    });
});

