window.addEventListener("load", init); // wait for the page to load

let apiUrl = 'http://localhost/CLE3-Accessibility/webservice/viggo-webservice.php'

/**
 * AJAX-call to retrieve data from a webservice
 *
 * @param url
 * @param successHandler
 */

// variables
let slider = document.getElementById("slider");
let divisor = document.getElementById("divisor");
let apiData = {};

let image1;
let image2;
let image3;
let button1;
let button2;
let button3;

const opacity = 1;
const noOpacity = 0;

let resetButton;
let storedValue;
let comp1;

// event listeners
function init() {
    comp1 = document.getElementById("comp-1");
    image1 = document.getElementById("img-1");
    image2 = document.getElementById("img-2");
    image3 = document.getElementById("img-3");
    button1 = document.getElementById('dot-1');
    button2 = document.getElementById('dot-2');
    button3 = document.getElementById('dot-3');
    resetButton = document.getElementById("resetButton");
    resetButton.addEventListener('click', reset);
    imageSlider();
    ajaxRequest(apiUrl, createInfoDiv);
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

function ajaxRequest(url, succesHandler) {
    fetch(url)
        .then((resp) => {
            if (!resp.ok) {
                throw new Error(resp.statusText);
            }
            return resp.json();
        })
        .then(succesHandler)
        .catch(ajaxErrorHandler);
}

function createInfoDiv(data) {
    for (let info of data) {
        let infoDiv = document.createElement('div');
        infoDiv.classList.add();
        infoDiv.dataset.name = info.name;
        comp1.appendChild(infoDiv);


        // ajax request based on current id
        ajaxRequest(apiUrl + '?id=' + info.id, fillInfoDiv);

    }
}

function fillInfoDiv(data) {

  let infoTitle = document.querySelectorAll(`.info-div[data-title='${data.name}']`);

    let title = document.createElement("h2");
    title.classList.add("title is-5 m-2");
    title.innerHTML = data.title;
    infoTitle.appendChild(title);

    let infoText = document.createElement("h3");
    infoText.classList.add("subtitle is-6 m-2");
    infoText.innerHTML = data.description;
    infoTitle.appendChild(infoText);

    apiData[data.id] = data;

}

function ajaxErrorHandler(data) {
    let error = document.createElement('div');
    error.classList.add('error');
    error.innerHTML = '<p>Something went wrong with the API call</p>';
    comp1.before(error);
}

///////////////////////////
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
    storedValue = localStorage.getItem('sliderValue');
    slider.value = storedValue;
});

window.addEventListener("load", function() {
    const storedValue = localStorage.getItem('sliderValue');
    if (storedValue) {
        divisor.style.width = storedValue + "%";
        slider.value = storedValue;
    }
});

