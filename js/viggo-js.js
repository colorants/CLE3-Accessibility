const slider = document.querySelector('.slider');
const range = slider.querySelector('.slider__range');
const beforeImage = slider.querySelector('.slider__image--before');
const overlay = slider.querySelector('.slider__overlay');

range.addEventListener('input', function() {
    beforeImage.style.width = this.value + '%';
    overlay.style.left = this.value + '%';
});
