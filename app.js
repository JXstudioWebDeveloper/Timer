let count = 0;
let minut = 0;
let hour = 0;
let interval;
const hourText = document.getElementById('hour');
const minutText = document.getElementById('minut');
const countText = document.getElementById('count');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const clearBtn = document.getElementById('clear');
startBtn.addEventListener('click', () => {
  interval = setInterval(() => {
    count++;
    if (count >= 59) {
      minut++;
      count = 0;
      minutText.innerHTML = minut;
    } else if (minut >= 59) {
      hour++;
      minut = 0;
      hourText.innerHTML = hour;
    }
    countText.innerHTML = count;
  }, 1000);
});
stopBtn.addEventListener('click', () => {
  clearInterval(interval);
});
clearBtn.addEventListener('click', () => {
  count = 0;
  minut = 0;
  minutText.innerHTML = minut;
  countText.innerHTML = count;
  clearInterval(interval);
});
const hour2Text = document.getElementById('hour2');
const minut2Text = document.getElementById('minut2');
const second2Text = document.getElementById('second2');
const daysText = document.getElementById('day');
const monthText = document.getElementById('month');
const yearText = document.getElementById('year');
function showClock() {
  let now = new Date();
  hour2 = now.getHours();
  minut2 = now.getMinutes();
  second2 = now.getSeconds();
  setInterval(showClock, 1000);
  day = now.getDay();
  month = now.getMonth() + 1;
  year = now.getFullYear();
  hour2Text.innerHTML = hour2;
  minut2Text.innerHTML = minut2;
  second2Text.innerHTML = second2;
  daysText.innerHTML = day;
  monthText.innerHTML = month;
  yearText.innerHTML = year;
}
showClock();
