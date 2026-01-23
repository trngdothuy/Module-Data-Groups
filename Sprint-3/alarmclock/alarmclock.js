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
  
  let input = document.getElementById("alarmSet").value
  const time = timeFormated(input)

  document.getElementById("timeRemaining").innerText = `Time Remaining: ${time}`

  // When one second passes, Then the "Time Remaining" title should decrement by 1 second
  setInterval(() => {
    console.log(timeFormated(input - 1))
    document.getElementById("timeRemaining").innerText = `Time Remaining: ${timeFormated(input -= 1)}`
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
}

window.onload = setup;
