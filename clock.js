function getTime(hours, minutes, seconds) {
  return formatDigits(hours) + ":" + formatDigits(minutes) + ":" + formatDigits(seconds);
}

function formatDigits(time) {
    return (time < 10 ? "0" : "") + time;
}

var timerClock;
var seconds = 0, minutes = 0, hours = 0;
function startClock() {
    if(seconds == 60) {
        minutes++;
        seconds = 0;
    } else {
        seconds++;
    }
    if(minutes == 60) {
        hours++;
        minutes = 0;
    }
    document.getElementById("clock").innerHTML = getTime(hours, minutes, seconds);;
}

function stopClock() {
    clearInterval(timerClock);
}