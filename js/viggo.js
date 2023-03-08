document.addEventListener("load", init);

let divisor = document.getElementById("divisor"),
    slider = document.getElementById("slider");

function moveDivisor() {
    divisor.style.width = slider.value+"%";
}

function init() {
    document.divisor.style.backgroundImage("url('/images/viggo/no_blur_1.jpg')");
    document.divisor.style.backgroundImage("url('/images/viggo/no_blur_1.jpg')");
    slider.oninput(moveDivisor);
}


