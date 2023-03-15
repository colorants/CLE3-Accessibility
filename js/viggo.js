window.addEventListener('load', init);
//global variables//
let divisor = document.getElementById("divisor"); // the element that will be resized
let slider = document.getElementById("slider"); // the slider

let nav = document.getElementById("nav-dots"); // the navigation
let imgs = document.querySelectorAll('.img-slider img'); // the images
let dots = document.querySelectorAll('.dot'); // the dots
let currentImg = 0; // index of the first image
let n = 0; // index of the first dot

function init() {
    let dot1 = document.getElementById("dot-1");
    let dot2 = document.getElementById("dot-2");
    let dot3 = document.getElementById("dot-3");
    dot1.addEventListener('click', () => changeSlide(0));
    dot2.addEventListener('click', () => changeSlide(1));
    dot3.addEventListener('click', () => changeSlide(2));
    //event listeners//
    slider.addEventListener('input', moveDivisor); // when the slider is moved, call the function moveDivisor

    //functions//
    function moveDivisor() {
        divisor.style.width = slider.value+"%"; // set the width of the element to the value of the slider
    }

    function changeSlide(n) {
        for (let i = 0; i < imgs.length; i++) { // reset
            imgs[i].style.opacity = 0;
            dots[i].classList.remove('active');
        }
        currentImg = n;
        imgs[currentImg].style.opacity = 1;
        dots[currentImg].classList.add('active');
    }
}


