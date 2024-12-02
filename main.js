const hamburger = document.querySelector('.hamburger');
const Sticky = document.querySelector('.navbar');
const mobileLinks = document.querySelectorAll('.navbar-links-mobile a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navbar.classList.remove('active');
    });
});



let lastScrollTop = 0;
const navbarSticky = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        navbarSticky.style.top = "-9vh";
    } else {
        navbarSticky.style.top = "0";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});



const slides = document.querySelector('.slides');
const slideCount = 2; 
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
let currentIndex = 0;

let slideInterval = setInterval(() => {
    nextSlide();
}, 5000); 

function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlidePosition();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlidePosition();
}

function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

arrowLeft.addEventListener('click', () => {
    clearInterval(slideInterval);
    prevSlide();
});

arrowRight.addEventListener('click', () => {
    clearInterval(slideInterval);
    nextSlide();
});