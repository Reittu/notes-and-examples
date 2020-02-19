const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const margin = 100;

window.addEventListener("load", () => {

    initCanvas();
    let painting = false;

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);

    function startPosition(e) { painting = true; draw(e) }
    function finishedPosition() { painting = false; ctx.beginPath() }
    function draw(e) {
        if (!painting) return;
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
        
    }
});

window.addEventListener("resize", () => {
    initCanvas();
});

function initCanvas() {
    canvas.height = window.innerHeight - margin;
    canvas.width = window.innerWidth - margin;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
}
