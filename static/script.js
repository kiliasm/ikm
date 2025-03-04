// script.js
document.addEventListener("DOMContentLoaded", () => {
    const circle = document.getElementById("circle");
    const scoreElement = document.getElementById("score");
    let score = 0;

    function moveCircle() {
        const maxX = window.innerWidth - 50;
        const maxY = window.innerHeight - 50;
        const x = Math.random() * maxX;
        const y = Math.random() * maxY;
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
    }

    circle.addEventListener("click", () => {
        score++;
        scoreElement.textContent = `Очки: ${score}`;
        moveCircle();
    });

    moveCircle();
});

