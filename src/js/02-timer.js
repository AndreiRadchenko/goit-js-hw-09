import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const TIMER_INTERVAL = 1000; //ms
let timer = null;

const startBtnRef = document.querySelector('button[data-start]');
const timerRefs = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

startBtnRef.disabled = true;
startBtnRef.addEventListener('click', onStartBtnClick);

const calendars = flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  minDate: 'today',
  // minTime: Date.now();
  onClose: onDataSlect,
});

function onDataSlect(selectedDates) {
  console.log(selectedDates[0]);
  if (selectedDates[0] < Date.now()) {
    startBtnRef.disabled = true;
    alert('Please choose a date in the future');
    return;
  }
  if (!timer) {
    startBtnRef.disabled = false;
  }
}

function onStartBtnClick() {
  if (timer) {
    return;
  }
  timer = setInterval(updateTimer, TIMER_INTERVAL);
  console.log('timer started');
  startBtnRef.disabled = true;
}

function updateTimer() {
  const timeLeftMiliseconds = calendars.selectedDates[0] - Date.now();
  if (timeLeftMiliseconds < 0) {
    clearInterval(timer);
    console.log('timer stoped');
    timer = null;
    return;
  }
  const timeLeft = convertMs(timeLeftMiliseconds);
  timerRefs.days.textContent = addLeadingZero(timeLeft.days);
  timerRefs.hours.textContent = addLeadingZero(timeLeft.hours);
  timerRefs.minutes.textContent = addLeadingZero(timeLeft.minutes);
  timerRefs.seconds.textContent = addLeadingZero(timeLeft.seconds);
}

function updateTimerUI() {}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
