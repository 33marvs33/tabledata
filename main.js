setInterval(() => {
  const date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  const dateYear = document.getElementById("dateTime");
  const time = document.getElementById("time");
  const greeting = document.getElementById("greeting");

  //   if(hour<10) {
  //     hour = '0'+hour
  //   }
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;

  dateYear.innerHTML = `
        ${month}:${day}:${year}
    `;
  time.innerHTML = `
        ${hour}:${min}:${sec}
    `;
  if (hour >= 0 && hour <= 11) {
    greeting.innerHTML = "GoodMorning";
  } else if (hour >= 12 && hour <= 17) {
    greeting.innerHTML = "GoodAfternoon";
  } else {
    greeting.innerHTML = "GoodEvening";
  }
}),
  1000;
