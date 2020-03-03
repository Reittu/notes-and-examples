function genericAnimation(properties) {
    const { start, finish, duration, animationValueAssigner, easing, fps = 60 } = properties;
    const distance = finish - start;
    const frameDuration = 1 / fps;
    let position = start;
    let time = 0;
    currentInterval = setInterval(progressAnimation, frameDuration * 1000);

    function progressAnimation() {
        time += frameDuration;
        position = easing(time, start, distance, duration);
        distanceLeft = finish - position;
        if (time >= duration) {
            clearInterval(currentInterval);
            return animationValueAssigner(finish);
        }
        animationValueAssigner(position);
    }
}

// If current scroll is interrupted by a new one, add remaining distance to new scroll finish.
let distanceLeft = 0;
let currentInterval;
const body = document.body;
function smoothScroll(e) {
    const scrollAmount = e.deltaY > 0 ? 150 : -150;
    clearInterval(currentInterval);
    e.preventDefault();
    const finish = window.scrollY + scrollAmount + distanceLeft;
    genericAnimation({
        start: window.scrollY,
        finish,
        duration: 0.5,
        animationValueAssigner: val => body.scrollTop = val,
        easing: easeOut
    });
}
document.addEventListener('wheel', e => smoothScroll(e), {passive: false});


function linearEase(t, b, c, d) { return c*t/d + b }

function easeOut(t, b, c, d) {
	t /= d;
	t--;
	return c*(t*t*t + 1) + b;
};