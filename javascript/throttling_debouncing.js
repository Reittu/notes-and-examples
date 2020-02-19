// Allow only one concurrent delayed operation.
function throttle(callback, delay) {
    let timer;
    return function() {
        if(timer) return;
        timer = setTimeout(() => {
            callback();
            timer = undefined;
        }, delay);
    }
};

// Reset the timer of existing operations on call.
// Specified time must have passed since the most recent call.
function debounce(callback, delay) {
    let timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(callback, delay);
    }
}

function throttledScroll() { console.log("Throttle") }
function debouncedScroll() { console.log("Debounce") }

document.addEventListener('scroll', throttle(throttledScroll, 500));
document.addEventListener('scroll', debounce(debouncedScroll, 500));
