const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


// Write your code here
// TODO: Make forward, backward button active

const backwardButton = document.getElementById("backward-btn");
const carouselImg = document.getElementById("carousel-img")
let currentPhotoIndex = 0;

backwardButton.addEventListener("click", () => {
    if (currentPhotoIndex === 0) {
        currentPhotoIndex = images.length - 1;
    } else {
        currentPhotoIndex = currentPhotoIndex - 1;
    }
    carouselImg.src = images[currentPhotoIndex]
})