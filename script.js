document.addEventListener("DOMContentLoaded", function() {
    const imageBgs = document.querySelectorAll(".image-bg");

    imageBgs.forEach(imageBg => {
        imageBg.addEventListener("mouseover", () => {
            const button = imageBg.querySelector(".know-more-button");
            button.style.display = "block";
        });

        imageBg.addEventListener("mouseout", () => {
            const button = imageBg.querySelector(".know-more-button");
            button.style.display = "none";
        });
    });
});
