function startClock() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  let display_date = document.getElementById("currentTime");

  minutes = ( minutes < 10 ? "0" : "") + minutes;
  seconds = ( seconds < 10 ? "0" : "") + seconds;

  let ampm = ( hours < 12 ? "AM" : "PM");
  hours = (hours > 12) ? hours - 12 : hours;
  hours = (hours == 0) ? 12 : hours;
  display_date.innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`;
  
}