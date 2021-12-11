const currentWeekday = document.getElementById('day');
const currentDate = document.getElementById('today');
const currentGreeting = document.getElementById('greeting');
const unit = document.getElementsByClassName('unit');
const prev_handler = window.onload;

/**
 * get hours and minutes from date 
 * set values into spans hour and minute 
 * units -> color-gradient differs from time values hence the separation
 */
function setTime() {
  let date = new Date();
  hour.textContent = date.getHours();
  unit[0].textContent = "h";
  minute.textContent = date.getMinutes();
  unit[1].textContent = "m";
}

/**
 * set the current weekday as word (Monday, Tuesday ...)
 */
function setDay() {
  let date = new Date();
  let weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  let day = weekday[date.getDay()];
  //separate weekday from date for readability with -
  currentWeekday.textContent = day + " - ";
}

/**
 * set current date in format dd.MM.yy 
 */
function setDate() {
  let date = new Date();
  //cut first two digits from year 
  let yearShort = date.getFullYear().toString().slice(-2);
  day = date.getDate();
  month = date.getMonth();
  month = month + 1;

  //set leading 0 to single digit days and months
  if ((String(day)).length == 1)
    day = '0' + day;
  if ((String(month)).length == 1)
    month = '0' + month;

  fullDate = day + '.' + month + '.' + yearShort;
  currentDate.textContent = fullDate;
}

/**
 * generates src for boxImg based on a predefined string concatenated with a 
 * random number between numOfImgs and 1
 */
function setImg() {
  //set number of images in folder
  let numOfImgs = 3;
  let imgNum = Math.floor(Math.random() * (numOfImgs - 1 + 1)) + 1;
  document.getElementById('boxImg').src = "img/imgBox/boxImg_" + imgNum + ".jpg";
}

/**
 * picks one random predefined greeting
 */
function setGreeting() {
  let greeting = new Array(13);
  greeting[0] = "Greeting1";
  greeting[1] = "Greeting2";
  greeting[2] = "Greeting3";
  greeting[3] = "Greeting4";
  greeting[4] = "Greeting5";
  greeting[5] = "Greeting6";
  greeting[6] = "Greeting7";
  greeting[7] = "Greeting8";
  greeting[8] = "Greeting9";
  greeting[9] = "Greeting10";
  greeting[10] = "Greeting11";
  greeting[11] = "Greeting12";
  greeting[12] = "Greeting13";

  let randGreeting = greeting[Math.floor(Math.random() * greeting.length)];
  currentGreeting.textContent = randGreeting;
}

window.onload = function () {
  if (prev_handler) {
    prev_handler();
  }
  setImg();
  setGreeting();
  setDay();
  setDate();
};

/* interval for updating time
 * 100ms because otherwise the time 
 * would load with a delay after the page loaded
 */ 
setInterval(setTime, 100);
