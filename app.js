let timer = false;
let milli = 0;
let sec = 0;
let min = 0;
let hr = 0;
let interval;

function start() {
    if (!timer) { // Prevent multiple intervals
        timer = true;
        interval = setInterval(myFun, 10); // Update every 10ms
    }
}

function stop() {
    timer = false;
    clearInterval(interval); // Stop the interval
}

function restart() {
    timer = false;
    clearInterval(interval); // Clear any running intervals
    milli = 0;
    sec = 0;
    min = 0;
    hr = 0;
    updateDisplay(); // Reset the display
}

function myFun() {
    if (timer) {
       milli= milli+1;
        if (milli === 100) {
            sec=sec+1
            milli = 0;
        }
        if (sec === 60) {
            min=min+1
            sec = 0;
        }
        if (min === 60) {
            hr=hr+1
            min = 0;
        }
        updateDisplay();
    }
}

function updateDisplay() {
    const getSec = sec < 10 ? '0' + sec : sec;
    const getMin = min < 10 ? '0' + min : min;
    const getHR = hr < 10 ? '0' + hr : hr;

    document.getElementById('hours').innerHTML = getHR;
    document.getElementById('minutes').innerHTML = getMin;
    document.getElementById('second').innerHTML = getSec;
    document.getElementById('milli').innerHTML = milli < 10 ? '0' + milli : milli;
}
