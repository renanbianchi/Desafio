import {screenMinutes, 
  screenSeconds, 
  playbtn, 
  pausebtn,
} from "./elements.js"
import sounds from "./sounds.js"
const sound = sounds();
let itstime;

export function timers() {
function giveMeANumber(minutes, seconds) {
  screenMinutes.textContent = String(minutes).padStart(2, '0');
  screenSeconds.textContent = String(seconds).padStart(2, '0');
}

 function TimeIsRunning() {
  itstime = setTimeout(function () {
    let seconds = Number(screenSeconds.textContent);
    let minutes = Number(screenMinutes.textContent);
    
    if (seconds <= 0) {
      seconds = 60;
      --minutes;
    }
    
    giveMeANumber(minutes, --seconds);
    TimeIsRunning();
    checkTimer(minutes);
  }, 1000);
}

function checkTimer(minutes) {
if (minutes > 90) {
  stopTimer();
  giveMeANumber(25, 0);
  pausebtn.classList.add('hide');
  playbtn.classList.remove('hide');
  alert("Whoa, take it easy! You got plenty of time, don't you?");
}

if (minutes <= 0) {
  stopTimer();
  giveMeANumber(25, 0);
  pausebtn.classList.add('hide');
  playbtn.classList.remove('hide');
  alert("Time is up!");
}
}

function stopTimer() {
  clearTimeout(itstime);
}



return {
  giveMeANumber,
  TimeIsRunning,
  stopTimer,
  checkTimer,
  };
};