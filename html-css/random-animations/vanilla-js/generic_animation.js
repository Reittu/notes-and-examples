function genericAnimation(properties) {
    const { start, finish, duration, animationValueAssigner, easing, fps = 60 } = properties;
    let time = 0;
    let position = start;
    const distances = finish.map((finish, i) => finish - start[i]);
    const handler = setInterval(progressAnimation, 1000 / fps);

    function progressAnimation() {
        time += 1 / fps;
        position = position.map((pos, i) => easing(time, start[i], distances[i], duration));

        if (time >= duration) {
            clearInterval(handler);
            return animationValueAssigner(finish);
        }
        animationValueAssigner(position);
    }
}


var box = document.getElementById("box"),
    start = [0, 0],
    finish = [window.innerWidth - box.clientWidth, 200],
    duration = 2;
genericAnimation({
    start, finish, duration,
    animationValueAssigner: val => {
        box.style.left = val[0] + "px";
        box.style.top = val[1] + "px";
    },
    easing: (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
});

// ## Easing ##
// visual examples:     http://easings.net/
// or:                  https://cubic-bezier.com/
// javascript:          http://gizma.com/easing/
// Can also use library to make the syntax simpler: https://stackoverflow.com/questions/29556772/convert-css-cubic-bezier-easing-to-javascript
// e.g. BezierEasing(0.25, 0.1, 0.0, 1.0)

// t: current time,
// b: beginning value,
// c: change in value,
// d: duration