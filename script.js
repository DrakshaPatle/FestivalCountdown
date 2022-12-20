const headName = document.getElementById("headName");
const countdown = document.getElementById("countdown");

function updateTimer() {
  const currentTime = new Date();

  if (headName.textContent === "Countdown for Christmas") {
    var targetTime = new Date("December 24, 2022 23:59:59");
  } else if (headName.textContent === "Countdown for New Year Eve") {
    var targetTime = new Date("December 31, 2022 23:59:59");
  } else if (headName.textContent === "Countdown for Makar Sankranti") {
    var targetTime = new Date("January 13, 2023 23:59:59");
  } else if (headName.textContent === "Countdown for Republic Day") {
    var targetTime = new Date("January 25, 2023 23:59:59");
  }

  const timeRemaining = targetTime - currentTime;

  let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  countdown.innerHTML =
    days +
    " days " +
    hours +
    " hours " +
    minutes +
    " minutes " +
    seconds +
    " seconds left";
}
updateTimer();
setInterval(updateTimer, 1000);
