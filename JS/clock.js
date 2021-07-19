const clock = document.querySelector(".clock");

function handleClock() {
    const date = new Date();
    const hours =String( date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

handleClock();
setInterval(handleClock, 1000);

