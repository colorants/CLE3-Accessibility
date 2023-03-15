let divisor = document.getElementById("divisor"); // the element that will be resized
let slider = document.getElementById("slider"); // the slider
let nav = document.getElementById("navigation-button"); // the navigation
let imgs = document.querySelectorAll('.img-slider img'); // the images
let dots = document.querySelectorAll('.dot'); // the dots
let currentImg = 0; // index of the first image

//event listeners//
slider.addEventListener('input', moveDivisor); // when the slider is moved, call the function moveDivisor
nav.addEventListener('click', changeSlide(n)); // when the image is clicked, call the function changeSlide

//functions//
function moveDivisor() {
    divisor.style.width = slider.value+"%"; // set the width of the element to the value of the slider
}

function changeSlide(n) {
    for (let i = 0; i < imgs.length; i++) { // reset
        imgs[i].style.opacity = 0;
        dots[i].className = dots[i].className.replace(' active', '');
    }
    currentImg = n;

    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += ' active';
    currentImg = (currentImg ++) % imgs.length; // update the index number
}
















