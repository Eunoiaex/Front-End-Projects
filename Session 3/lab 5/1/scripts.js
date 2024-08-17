let currentSlide = 1;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('previous', 'active', 'next');

        if (index === (currentSlide - 1 + totalSlides) % totalSlides) {
            slide.classList.add('previous');
        } else if (index === currentSlide % totalSlides) {
            slide.classList.add('active');
        } else if (index === (currentSlide + 1) % totalSlides) {
            slide.classList.add('next');
        }
    });

    document.querySelector('.slider').style.transform = `translateX(-${(currentSlide * 100 / 3) - 100 / 3}%)`;
}

function moveSlide(step) {
    currentSlide = (currentSlide + step + totalSlides) % totalSlides;
    updateSlides();
}

setInterval(() => {
    moveSlide(1);
}, 3000);

updateSlides();