const slider = document.getElementById("slider");
const divisor = document.getElementById("divisor");
const image1 = document.getElementById("img-1");
const image2 = document.getElementById("img-2");
const image3 = document.getElementById("img-3");
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const opacity = "1";
const noOpacity = "0";
const resetButton = document.getElementById("resetButton");



window.addEventListener('load', init);

// this function will be called when the page is loaded
function init () {
    imageSlider();
    resetButton.addEventListener('click', reset);
}

// reset button
function reset() {
    localStorage.clear();
    divisor.style.width = "50%";
    slider.value = "50";
}

// move the divisor when the slider is moved

function moveDivisor() {
    localStorage.setItem('sliderValue', slider.value);
    divisor.style.width = slider.value + "%";
    console.log("Slider value after setting local storage:", slider.value);
}

window.addEventListener("load", function() {
    const storedValue = localStorage.getItem('sliderValue');
    if (storedValue) {
        divisor.style.width = storedValue + "%";
        slider.value = storedValue;
        console.log("Slider value after setting width and value:", slider.value);
    }
});

// Set the slider value to the stored value when the slider is moved
slider.addEventListener("input", function() {
    moveDivisor();
   let storedValue = localStorage.getItem('sliderValue');
    slider.value = storedValue;
});

// 3 dotted image slider , dots change on click
function imageSlider() {

// add event listeners to the buttons
button1.addEventListener('click', () => {
   image1.style.opacity = opacity;
   image2.style.opacity = noOpacity;
   image3.style.opacity = noOpacity;
   button1.classList.add("active");
   button2.classList.remove("active");
    button3.classList.remove("active");

});

button2.addEventListener('click', () => {
    image1.style.opacity = noOpacity;
    image2.style.opacity = opacity;
    image3.style.opacity = noOpacity;
    button1.classList.remove("active");
    button2.classList.add("active");
    button3.classList.remove("active");
});

button3.addEventListener('click', () => {
    image1.style.opacity = noOpacity;
    image2.style.opacity = noOpacity;
    image3.style.opacity = opacity;
     button1.classList.remove("active");
    button2.classList.remove("active");
    button3.classList.add("active");
});
}



