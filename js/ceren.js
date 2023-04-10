let apiUrl = 'http://localhost/CLE3-Accessibility/webservice/ceren-webservice.php';
let headers = document.querySelectorAll('.headers');
let details = document.querySelectorAll('.details');
let favButts = document.querySelectorAll('.favButt');
let favo = localStorage.getItem('allFavo') ? JSON.parse(localStorage.getItem('allFavo')) : [];



//AJAX-call to retrieve data from a webservice thx sem de pem
async function ajaxRequest(url) {
    const response = await fetch(url);
    const jsonData = await response.json();

    for (let i = 0; i <= headers.length; i++) {
        headers[i].innerHTML = jsonData[i].name;
        let awu = await getDetails(jsonData[i].id);
        details[i].innerHTML = awu.uitleg;
    }
}

async function getDetails(id) {
    const response = await fetch(apiUrl+'?id='+id);
    const jsonData = await response.json();
    return jsonData
}

function setFavo() {
    if (!favo.includes(this.id)) {
        favo.push(this.id);
        localStorage.setItem('allFavo', JSON.stringify(favo));
        document.getElementById(this.id).style.backgroundColor = 'pink';

        return;
    }

    let favoIndex = favo.indexOf(this.id);
    favo.splice(favoIndex, 1);

    localStorage.setItem('allFavo', JSON.stringify(favo));
    document.getElementById(this.id).style.backgroundColor = 'white';
}

for (let i = 0; i < favButts.length; i++) {
    favButts[i].addEventListener('click', setFavo);
}


for (let i = 0; i < favo.length; i++) {
    document.getElementById(favo[i]).style.backgroundColor = 'pink';
}

ajaxRequest(apiUrl);