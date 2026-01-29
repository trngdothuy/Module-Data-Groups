const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


// Write your code here
// TODO: Make auto-forward and auto-back buttons

const backwardButton = document.getElementById("backward-btn");
const forwardButton = document.getElementById("forward-btn");
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
    console.log(currentPhotoIndex)
    if (currentPhotoIndex === images.length - 1) {
        currentPhotoIndex = 0;
    } else {
        currentPhotoIndex++;
    }
    carouselImg.src = images[currentPhotoIndex]
}

backwardButton.addEventListener("click", backward)

forwardButton.addEventListener("click", forward)