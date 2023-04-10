let apiUrl = 'http://localhost/CLE3-Accessibility/webservice/ceren-webservice.php';
let headers = document.querySelectorAll('.headers');
let details = document.querySelectorAll('.details');
let favButts = document.querySelectorAll('.favButt');
let favo = localStorage.getItem('allFavo') ? JSON.parse(localStorage.getItem('allFavo')) : [];



//data via ajax
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

//change color fav butt
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

//pictures in array
var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'images/ceren/texts.png';

imgArray[1] = new Image();
imgArray[1].src = 'images/ceren/letters.png';

imgArray[2] = new Image();
imgArray[2].src = 'images/ceren/contrast.png';

imgArray[3] = new Image();
imgArray[3].src = 'images/ceren/style.png';

imgArray[4] = new Image();
imgArray[4].src = 'images/ceren/zwartwit.png';

imgArray[5] = new Image();
imgArray[5].src = 'images/ceren/geluid.png';

/*------------------------------------*/

function nextImage(element)
{
    var img = document.getElementById(element);

    for(var i = 0;i<imgArray.length;i++)
    {
        if(imgArray[i] == img)
        {
            if(i == imgArray.length)
            {
                var j = 0;
                document.getElementById(element).src = imgArray[j].src;
                break;
            }
            else
                var j = i + 1;
            document.getElementById(element).src = imgArray[j].src;
            break;
        }
    }
}





ajaxRequest(apiUrl);