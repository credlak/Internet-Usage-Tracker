function setButton(label, onclickHandler) {
    document.getElementById("timer").value = label;
    document.getElementById("timer").onclick = onclickHandler;
}

function startTracking() {
    document.getElementById("clock").hidden = false;
    timerClock = setInterval(startClock, 1000);
    document.getElementById("message").innerHTML = "Running Time:";
    setButton("Pause", pauseTracking);
    startClock();
}

function pauseTracking() {
    stopClock();
    setButton("Resume Tracking", startTracking);
}