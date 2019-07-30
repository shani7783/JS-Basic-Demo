let i = 0;
let timerId;
let timerOn = false;

function reset() {
    i = 0;
}

function start() {
    if (timerOn === true) {
        return;
    }

    timerOn = true;
    timerId = setInterval(
        writeIteration, 1000);
}

function writeIteration() {
    console.log(i++);
}

function pause() {
    timerOn = false;
    clearInterval(timerId);
}