document.addEventListener("DOMContentLoaded", function () {
    const resolutionSelect = document.getElementById("resolutionSelect");
    const screenImage = document.getElementById("screenImage");
    const backgroundMusic = document.getElementById("backgroundMusic");

    // Lecture automatique de la musique
    backgroundMusic.play().catch(() => {
        console.log("Lecture automatique bloquée, en attente d'une interaction utilisateur...");
    });

    // Ajouter un événement au cas où la lecture de la musique serait bloquée
    document.body.addEventListener("click", function () {
        backgroundMusic.play();
    });

    // Gestion du changement de résolution
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

        // Ajout de la classe "hidden" pour l'animation de disparition
        screenImage.classList.add("hidden");

        // Attendre la fin de l'animation avant de changer l'image
        setTimeout(() => {
            screenImage.src = imagePath;

            // Retirer la classe "hidden" pour l'animation d'apparition
            screenImage.classList.remove("hidden");
        }, 500); // Correspond au temps défini dans `transition` en CSS
    });
});
