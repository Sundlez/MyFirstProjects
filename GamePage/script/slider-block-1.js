var slides = document.querySelectorAll('.block-1__slider .block-1__slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
	slides[currentSlide].className = 'block-1__slide';
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = 'block-1__slide block-1__showing';
}