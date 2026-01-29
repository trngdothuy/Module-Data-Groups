const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
    "https://plus.unsplash.com/premium_photo-1677545182425-4fb12bdb9faf?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];


// Write your code here
// TODO: Add UI for delay time

const backwardButton = document.getElementById("backward-btn");
const forwardButton = document.getElementById("forward-btn");
const autoBackwardButton = document.getElementById("auto-backward-btn");
const autoForwardButton = document.getElementById("auto-forward-btn");
const stopButton = document.getElementById("stop-btn");
const countdownCard = document.getElementById("countdown-card")


const carouselImg = document.getElementById("carousel-img")
let currentPhotoIndex = 0;

function backward() {
    if (currentPhotoIndex === 0) {
        currentPhotoIndex = images.length - 1;
    } else {
        currentPhotoIndex = currentPhotoIndex - 1;
    }
    carouselImg.src = images[currentPhotoIndex]
}

function forward() {
    let secondLeft = 3;
    if (currentPhotoIndex === images.length - 1) {
        currentPhotoIndex = 0;
    } else {
        currentPhotoIndex++;
    }
    carouselImg.src = images[currentPhotoIndex]
}

console.log(countdownCard.innerText)

let secondLeft = 5
let interval = setInterval(() => {
    if (!countdownCard.hidden && secondLeft >= 1) {
        if (secondLeft === 1) {
            countdownCard.innerText = "Next photo showing now"
            secondLeft = 5
        } else {
            secondLeft = secondLeft - 1;
            countdownCard.innerText = `Next photo in 00:0${secondLeft}`
    }}}, 1000)

backwardButton.addEventListener("click", backward)

forwardButton.addEventListener("click", forward)

autoBackwardButton.addEventListener("click", () => {
    countdownCard.hidden = false;
    interval = setInterval(backward, 5000)
})

autoForwardButton.addEventListener("click", () => {
    countdownCard.hidden = false;
    interval = setInterval(forward, 5000)
})

stopButton.addEventListener("click", () => {
    clearInterval(interval)
    countdownCard.hidden = true;
})