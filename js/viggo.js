const sliderContainer = document.querySelector('.slider-container');
const beforeImage = document.querySelector('.before-image');
const afterImage = document.querySelector('.after-image');
const sliderHandle = document.querySelector('.slider-handle');

function moveHandle(e) {
    const x = e.pageX - sliderContainer.offsetLeft;
    if (x > 0 && x < sliderContainer.offsetWidth) {
        sliderHandle.style.left = x + 'px';
        beforeImage.style.width = x + 'px';
        afterImage.style.width = sliderContainer.offsetWidth - x + 'px';
    }
}

sliderHandle.addEventListener('mousedown', function() {
    document.addEventListener('mousemove', moveHandle);
});

document.addEventListener('mouseup', function() {
    document.removeEventListener('mousemove', moveHandle);
});
