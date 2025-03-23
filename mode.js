var time = document.querySelector("#clock");

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    time.innerHTML = timeString;
}

setInterval(updateClock, 1000);
updateClock();

