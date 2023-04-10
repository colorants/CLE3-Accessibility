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
let detailButton;
let detailContent;
let detailDialog;

// event listeners
function init() {

    comp1 = document.getElementById("comp-1");

    detailDialog = document.getElementById('info-detail');
    detailContent = detailDialog.querySelector('.modal-content');
    detailDialog.addEventListener('click', detailModalClickHandler);
    detailDialog.addEventListener('close', dialogCloseHandler);

    image1 = document.getElementById("img-1");
    image2 = document.getElementById("img-2");
    image3 = document.getElementById("img-3");
    button1 = document.getElementById('dot-1');
    button2 = document.getElementById('dot-2');
    button3 = document.getElementById('dot-3');
    resetButton = document.getElementById("resetButton");
    detailButton = document.getElementById("detailButton");
    resetButton.addEventListener('click', reset);
    imageSlider();


    detailButton.addEventListener('click', infoCardClickHandler);
    ajaxRequest(apiUrl, createInfoCards())
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
function ajaxRequest(url, successHandler) {
    console.log(url)
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(successHandler)
        .catch(ajaxErrorHandler);
}

//Create initial info cards based on initial API data

function createInfoCards(info) {
    ajaxRequest(apiUrl, function(info) {
        for (let data of info) {
            let infoCard = document.createElement('div');
            infoCard.dataset.title = data.title;
            comp1.appendChild(infoCard);

            // ajax request based on current id
            ajaxRequest(apiUrl + '?id=' + data.id, function(data) {
                fillInfoCard(data, infoCard);
            });
        }
    });
}

//Fill the info card with the retrieved data
function fillInfoCard(data, infoCard) {
    let title = document.createElement('h2');
    title.classList.add('title', 'is-5', 'm-2');
    title.innerHTML = data.title;
    infoCard.appendChild(title);

    let subtitle = document.createElement('h3');
    subtitle.classList.add('subtitle', 'is-6', 'm-2');
    subtitle.innerHTML = data.description;
    infoCard.appendChild(subtitle);

    apiData[data.id] = data;
    console.log(apiData);
}


//ajax error handler
function ajaxErrorHandler(data) {
    let error = document.createElement('div');
    error.classList.add('error');
    comp1.before(error);
}

function infoCardClickHandler(event) {
    let clickedItem = event.target;

    if (clickedItem.nodeName !== 'BUTTON') {
        return;
    }

    // retrieve information from the global apiData object
    let data = apiData[clickedItem.dataset.id];

    // reset the content of the modal
    detailContent.innerHTML = '';

    // show the name we used on the main grid
    let title = document.createElement('h3');
    title.innerHTML = '<h3>' + data.title + '</h3>';
    detailContent.appendChild(title);

    // show the description
    let description = document.createElement('p');
    detailContent.innerHTML += '<p>' + data.description + '</p>';
    detailContent.appendChild(description);

    // open modal
    detailDialog.showModal();
    gallery.classList.add('dialog-open');
}

function detailModalClickHandler(event) {

    if (event.target.nodeName === 'DIALOG' || event.target.nodeName === 'BUTTON') {
        detailDialog.close();
    }
}

//close handler for the modal
function dialogCloseHandler() {
    gallery.classList.remove('dialog-open');
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

