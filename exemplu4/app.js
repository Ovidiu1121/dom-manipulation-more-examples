
const timer = document.querySelector("p");
const btnStartTimer = document.getElementById("startTimer");
const btnStopTimer = document.getElementById("stopTimer");
const btnResetTimer = document.getElementById("resetTimer");
const stele = document.querySelectorAll(".star");
const selectedRating = document.getElementById("selectedRating");
let interval;
let secunde = 0;

btnStartTimer.addEventListener("click", () => {

    interval = setInterval(function () {
        secunde++;
        updateTimer();
    }, 1000);

});

btnStopTimer.addEventListener("click", () => {
    clearInterval(interval);
});

btnResetTimer.addEventListener("click", () => {
    secunde = 0;
    updateTimer();
    stopTimer();
});


function updateTimer() {
    const min = Math.floor(secunde / 60);
    const sec = secunde % 60;
    timer.textContent = `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

stele.forEach(function (star) {
    star.addEventListener("click", function () {
        const rating = this.dataset.rating;
        selectedRating.textContent = `Your rating: ${rating}`;
    });
});