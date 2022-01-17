const newYears = "1 Jun 2022";
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secsEl = document.getElementById("secs");

function countDown() {
  const newYearDate = new Date(newYears);
  const currentDate = new Date();

  const total_seconds = (newYearDate - currentDate) / 1000;

  const days = Math.floor(total_seconds / 3600 / 24);
  const hours = Math.floor((total_seconds / 3600) % 24);
  const minutes = Math.floor((total_seconds / 60) % 60);
  const seconds = Math.floor(total_seconds % 60);

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countDown();

setInterval(countDown, 1000);
