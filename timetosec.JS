let rowContainerEl = document.getElementById("rowContainer");
let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let convertBtnEl = document.getElementById("convertBtn");
let errorMsgEl = document.getElementById("errorMsg");
let timeInSeconds = document.getElementById("timeInSeconds");

timeInSeconds.classList.add("d-none");


convertBtnEl.addEventListener("click", function() {
    if (hoursInputEl.value === "") {
        errorMsgEl.textContent = "Please enter a valid number of hours.";
    } else if (minutesInputEl.value === "") {
        errorMsgEl.textContent = "Please enter a valid number of minutes.";
    } else {
        errorMsgEl.textContent = "";
        let totalHourSeconds = parseInt(hoursInputEl.value) * 3600;
        let totalMinuteSeconds = parseInt(minutesInputEl.value) * 60;
        let total = totalHourSeconds + totalMinuteSeconds;
        timeInSeconds.classList.remove("d-none");
        timeInSeconds.textContent = total + "s";
    }
});