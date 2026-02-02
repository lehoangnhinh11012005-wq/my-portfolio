const carousel = document.getElementById("carousel");
const speed = document.getElementById("speed");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const images = document.querySelectorAll(".carousel img");

// Hover dừng quay
carousel.addEventListener("mouseenter", () => {
    carousel.style.animationPlayState = "paused";
});

carousel.addEventListener("mouseleave", () => {
    carousel.style.animationPlayState = "running";
});

// Điều chỉnh tốc độ
speed.addEventListener("input", () => {
    carousel.style.animationDuration = speed.value + "s";
});

// Click phóng to ảnh
images.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

// Click đóng modal
modal.addEventListener("click", () => {
    modal.style.display = "none";
});
