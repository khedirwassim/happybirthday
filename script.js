document.addEventListener("DOMContentLoaded", function () {
    const resolutionSelect = document.getElementById("resolutionSelect");
    const backgroundMusic = document.getElementById("backgroundMusic");
    const screenImage = document.getElementById("screenImage");

    // Jouer la musique quand l'utilisateur clique sur le champ select
    resolutionSelect.addEventListener("focus", function () {
        backgroundMusic.play();
    });

    // Fonctionnalité existante pour changer l'image selon la résolution sélectionnée
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
                imagePath = "default-image.jpg";
        }

        screenImage.src = imagePath;
    });
});
