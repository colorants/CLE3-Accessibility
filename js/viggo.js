let apiUrl = "http://localhost/CLE3-Accessibility/webservice/viggo-webservice.php"

window.addEventListener("load", init); // wait for the page to load

// variables
let slider = document.getElementById("slider");
let divisor = document.getElementById("divisor");

let image1;
let image2;
let image3;
let button1;
let button2;
let button3;
const opacity = 1;
const noOpacity = 0;
let resetButton;
let modal;
let modalBtn;
let closeBtn;

// event listeners
function init() {


    image1 = document.getElementById("img-1");
    image2 = document.getElementById("img-2");
    image3 = document.getElementById("img-3");
    button1 = document.getElementById('dot-1');
    button2 = document.getElementById('dot-2');
    button3 = document.getElementById('dot-3');
    resetButton = document.getElementById("resetButton");

    // get modal
     modal = document.getElementById('info-details');
//get open modal button
    modalBtn = document.getElementById('infoButton');
//get close button
    closeBtn = document.getElementById('closeModal');

    resetButton.addEventListener('click', reset);
    moveDivisor();
    imageSlider();
    openModal();
    closeModal();
    clickOutside();
}


// function to change the opacity of the images
    // add event listeners to the buttons
function imageSlider(){
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
        console.log("button 3 clicked");
        image1.style.opacity = noOpacity;
        image2.style.opacity = noOpacity;
        image3.style.opacity = opacity;
        button1.classList.remove("active");
        button2.classList.remove("active");
        button3.classList.add("active");
    });
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
}

// Set the slider value to the stored value when the slider is moved
slider.addEventListener("input", function() {
    moveDivisor();
    let storedValue = localStorage.getItem('sliderValue');
    slider.value = storedValue;
});

window.addEventListener("load", function() {
    const storedValue = localStorage.getItem('sliderValue');
    if (storedValue) {
        divisor.style.width = storedValue + "%";
        slider.value = storedValue;
    }
});

// modal opener

// listen for open click
modalBtn.addEventListener('click', openModal);
//listen for close click
closeBtn.addEventListener('click', closeModal);
//listen for outside click
window.addEventListener('click', clickOutside);

//function to open modal
function openModal(){
    modal.style.display = 'block';
}

//function to close modal
function closeModal(){
    modal.style.display = 'none';
}

//function to close modal if outside click
function clickOutside(e){
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}


