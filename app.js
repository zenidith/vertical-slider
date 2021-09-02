const sliderContainer = document.querySelector('.slider-container');

const slideRight = document.querySelector('.slide-right');
const slideLeft = document.querySelector('.slide-left');

const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');

const slidesLength = slideLeft.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

// Eventlistener for buttons
upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

