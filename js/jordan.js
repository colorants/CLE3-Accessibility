window.addEventListener("load", init); // wait for the page to load


const buttonOne = document.querySelector('.btn-1');
const buttonTwo = document.querySelector('.btn-2')
const buttonThree = document.querySelector('.btn-3')




function init() {
    resetButton = document.getElementById("resetButton");
    resetButton.addEventListener('click', reset);
}

function alertBtn () {
    alert('Klik OK om door te gaan naar de navigatie');
}

// click event for the buttons under the three images
buttonOne.addEventListener("click", alertBtn);
buttonTwo.addEventListener("click", alertBtn);
buttonThree.addEventListener("click", alertBtn);

// stores the amount of click by number
function clickCounter(){
    if (localStorage.clickcount){
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
        localStorage.clickcount = 1;
    }
    document.getElementById("num_count").innerHTML = localStorage.clickcount;
}

// reset button for localstorage
function reset() {
    localStorage.clear();
}
