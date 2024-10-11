// menu
const btnMenu = document.getElementById('menu');
const nav = document.querySelector('.ul-n');


btnMenu.addEventListener(('click'), ()=>{
  nav.classList.toggle('menu-link')
})



// sliders images
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function nextSlide() {
    showSlides(slideIndex += 1);
}

// Previous button
function prevSlide() {
    showSlides(slideIndex -= 1);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    slides.forEach((slide, index) => {
        slide.style.display = index + 1 === slideIndex ? 'block' : 'none';
    });

    dots.forEach((dot, index) => {
        dot.className = dot.className.replace(' active', '');
        if (index + 1 === slideIndex) {
            dot.className += ' active';
        }
    });
}

// Automatic slideshow
setInterval(() => {
    nextSlide();
}, 3000);
