const newYears = "1 Jun 2022";

function countDown() {
  const newYearDate = new Date(newYears);
  const currentDate = new Date();

  const seconds = (newYearDate - currentDate) / 1000;

  const days = Math.floor(seconds / 3600 / 24);
  //   const hours;
  console.log(days);
}

countDown();

// setInterval(countDown, 1000);
