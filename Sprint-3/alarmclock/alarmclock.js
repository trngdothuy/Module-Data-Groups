let flag = false;
let interval = 0;

function timeFormated(seconds) {
  function pad(num) {
  return num.toString().padStart(2, "0");
  }

  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

function setAlarm() {
  if (flag === true) {
    clearInterval(interval);
    flag = false
  }

  const input = document.getElementById("alarmSet").value
  let timeRemaining = input 

  document.getElementById("timeRemaining").innerText = `Time Remaining: ${timeFormated(input)}`
  
  flag = true
  interval = setInterval(() => {
    console.log(timeFormated(timeRemaining - 1))

    // Time = 00:00, alarm sound play continuously and change background color
    if (timeRemaining === 0) {
    playAlarm();
    document.body.style.backgroundColor = "red";
    // clearInterval(interval)
  } else {
    // 1 second passes, "Time Remaining" decrement by 1
    document.getElementById("timeRemaining").innerText = `Time Remaining: ${timeFormated(timeRemaining -= 1)}`
  }
  }, 1000)
}
  
  

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
      setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();    
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
  document.getElementById("timeRemaining").innerText = `Time Remaining: ${timeFormated(0)}`
  flag = false;
  clearInterval(interval)
}

window.onload = setup;
