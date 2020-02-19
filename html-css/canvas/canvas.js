const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const margin = 100;

const circles = [
    [100, 300],
    [200, 300],
    [300, 300],
    [400, 300],
    [500, 300],
    [600, 300],
    [700, 300],
    [800, 300],
    [900, 300],
    [1000, 300],
    [1100, 300]
];

// Defines the iteration count (smoothness and speed) of the wave
const stepCountMultiplier = 8;
const stepCount = 2 * circles.length * stepCountMultiplier;
const stepAmount = Math.PI / circles.length / stepCountMultiplier;
const amplitudeMultiplier = 0.5;
// Defines the vertical distance between drawn circles
const circleDistanceMultiplier = 16;

let iteration = 0;

window.addEventListener("load", () => {
    initCanvas();

    setInterval(() => {
        clear();
        drawCircles();
        iteration++;
    }, 16.67);
});

window.addEventListener("resize", () => {
    //initCanvas();
});

function initCanvas() {
    canvas.height = window.innerHeight - margin;
    canvas.width = window.innerWidth - margin;
    ctx.lineWidth = 2;
}

function drawCircles() {
    circles.forEach((posArr, i) => {
        ctx.beginPath();
        ctx.arc(
            posArr[0],
            posArr[1] + posArr[1] * amplitudeMultiplier
            * Math.sin(((iteration + i * circleDistanceMultiplier) % stepCount * stepAmount)),
            25, 0, 2 * Math.PI
        );
        ctx.stroke();
    });
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}