function getTime() {
  const time = document.querySelector(".time");

  const newDate = new Date();

  //   const hours = newDate.getHours();
  //   const minutes = newDate.getMinutes();
  //   let seconds = newDate.getSeconds();

  const hours = String(newDate.getHours()).padStart(2, "0");
  const minutes = String(newDate.getMinutes()).padStart(2, "0");
  const seconds = String(newDate.getSeconds()).padStart(2, "0");

  time.innerText = `${hours}:${minutes}:${seconds}`;

  //   if (seconds.toString().length === 1) {
  // //     seconds = "0" + seconds;
  //   }

  //   time.innerText = hours + ":" + minutes + ":" + seconds;

  //   console.log(newDate);
}

getTime();
setInterval(getTime, 1000);

// setInterval(() => {
//   console.log("setInterval");
// }, 1000);

// time.innerText = `${hours}:${minutes}:${seconds}`;
