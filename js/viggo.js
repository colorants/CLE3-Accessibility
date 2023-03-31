// window.addEventListener('load', init);
// //global variables//
// let homeButton = document.getElementById("brandTitle");
//
// let divisor = document.getElementById("divisor"); // the element that will be resized
// let slider = document.getElementById("slider"); // the slider
//
// let nav = document.getElementById("nav-dots"); // the navigation
// let imgs = document.querySelectorAll('.img-slider img'); // the images
// let dots = document.querySelectorAll('.dot'); // the dots
// let img1 = document.getElementById("img-1");
// let img2 = document.getElementById("img-2");
// let img3 = document.getElementById("img-3");
// img1.setAttribute("data-img", "0");
// img2.setAttribute("data-img", "1");
// img3.setAttribute("data-img", "2");
//
// let currentImg = 0; // index of the first image
// let n = 0; // index of the first dot
//
//
// function init() {
//     //event listeners//
//     homeButton.addEventListener('click', pageSwitcher);
//
//     //give data attributes to pictures//
//     let dot1 = nav.getElementById("dot-1");
//     let dot2 = nav.getElementById("dot-2");
//     let dot3 = nav.getElementById("dot-3");
//     dot1.addEventListener('click', () => changeSlide(0));
//     dot2.addEventListener('click', () => changeSlide(1));
//     dot3.addEventListener('click', () => changeSlide(2));
//     //event listeners//
//     document.getElementById("img-1").addEventListener('click', () => changeSlide(0));
//     document.getElementById("img-2").addEventListener('click', () => changeSlide(1));
//     document.getElementById("img-3").addEventListener('click', () => changeSlide(2));
// }
//
//     //functions
//     function changeSlide(n) {
//         console.log(n);
//         for (let i = 0; i < imgs.length; i++) { // reset
//             imgs[i].style.opacity = 0;
//             dots[i].classList.remove('active');
//         }
//         currentImg = n;
//         imgs[currentImg].style.opacity = 1;
//         dots[currentImg].classList.add('active');
//     }
//
//
//     function moveDivisor() {
//         divisor.style.width = slider.value + "%"; // set the width of the element to the value of the slider
//     }
//
//     slider.addEventListener('input', moveDivisor); // when the slider is moved, call the function moveDivisor
//
//     function pageSwitcher() {
//         window.location.href = "index.html";
//     }

let divisor = document.getElementById("divisor"); // the element that will be resized
let slider = document.getElementById("slider"); // the slider

function moveDivisor() {
    divisor.style.width = slider.value + "%"; // set the width of the element to the value of the slider
}
slider.addEventListener('input', moveDivisor); // when the slider is moved, call the function moveDivisor
