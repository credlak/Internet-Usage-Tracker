var endTime;
function pauseTracking() {
    endTime = new Date();
    recordTime()
    stopClock()
    setButton("Resume Tracking", startTracking)
}

function recordTime() {
    console.log("start", startTime)
    console.log("end", endTime)
    var timeDiv = document.createElement("DIV")
    var times = document.createTextNode(startTime.toTimeString() + "  -  " + endTime.toTimeString())
    timeDiv.append(times)
    document.getElementById("logging").append(timeDiv)
}

function setButton(label, onclickHandler) {
    document.getElementById("timer").value = label
    document.getElementById("timer").onclick = onclickHandler
}

var startTime = new Date()
function startTracking() {
    document.getElementById("clock").hidden = false
    startTime = new Date()
    timerClock = setInterval(startClock, 1000)
    document.getElementById("message").innerHTML = "Running Time:"
    setButton("Pause", pauseTracking)
    startClock()
}