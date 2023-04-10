window.addEventListener('load', init);


let apiUrl = 'http://localhost/CLE3-Accessibility/webservice/sem-webservice.php';
let apiData = {};
let gallery;
let detailDialog;
let detailContent;

//initialize after the DOM is ready
function init() {
    gallery = document.getElementById('info-gallery');
    gallery.addEventListener('click', infoCardClickHandler);

    detailDialog = document.getElementById('info-detail');
    detailContent = detailDialog.querySelector('.modal-content');
    detailDialog.addEventListener('click', detailModalClickHandler);
    detailDialog.addEventListener('close', dialogCloseHandler);

    ajaxRequest(apiUrl, createInfoCards);
}

/**
 * AJAX-call to retrieve data from a webservice
 *
 * @param url
 * @param successHandler
 */
//AJAX-call to retrieve data from a webservice
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
function createInfoCards(data) {
    for (let info of data) {
        let infoCard = document.createElement('div');
        infoCard.classList.add('info-card', 'tile', 'is-vertical', 'has-text-centered', 'is-centered', 'is-1', 'box');
        infoCard.dataset.title = info.title;
        gallery.appendChild(infoCard);


        // ajax request based on current id
        ajaxRequest(apiUrl + '?id=' + info.id, fillInfoCard);

    }
}

//Fill the info card with the retrieved data
function fillInfoCard(info) {

    let infoCard = document.querySelector(`.info-card[data-title='${info.title}']`);

    let title = document.createElement('h3');
    title.classList.add('title');
    title.innerHTML = info.title;
    infoCard.appendChild(title);

    let subtitle = document.createElement('p');
    subtitle.classList.add('is-text');
    subtitle.innerHTML = info.subtitle;
    infoCard.appendChild(subtitle);

    apiData[info.id] = info;
    console.log(apiData);
}

//ajax error handler
function ajaxErrorHandler(data) {
    let error = document.createElement('div');
    error.classList.add('error');
    error.innerHTML = '<p>Something went wrong with the API call</p>';
    gallery.before(error);
}

//click handler for the info cards
function infoCardClickHandler(event) {
    let clickedItem = event.target;

    if (clickedItem.nodeName !== 'BUTTON') {
        return;
    }

    // retrieve information from the global apiData object
    let info = apiData[clickedItem.dataset.id];

    // reset the content of the modal
    detailContent.innerHTML = '';

    // show the name we used on the main grid
    let title = document.createElement('h3');
    title.innerHTML = '<h3>' + info.title + '</h3>';
    detailContent.appendChild(title);

    // show the description
    let description = document.createElement('p');
    detailContent.innerHTML += '<p>' + i.nfo.description + '</p>';
    detailContent.appendChild(description);

    // open modal
    detailDialog.showModal();
    gallery.classList.add('dialog-open');
}

//click handler for the modal
function detailModalClickHandler(event) {

    if (event.target.nodeName === 'DIALOG' || event.target.nodeName === 'BUTTON') {
        detailDialog.close();
    }
}

//close handler for the modal
function dialogCloseHandler() {
    gallery.classList.remove('dialog-open');
}
