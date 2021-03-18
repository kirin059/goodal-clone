'use strict';

// main > image slide
let slideIndex = 1;
let slides = document.querySelectorAll('.slide_li');
let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');


showSlides();

function showSlides(n) {

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 4000); // Change image every 2 seconds
}

nextBtn.addEventListener('click', e => {
    console.log(e)
    showSlides(slideIndex + 1);
    clearInterval(showSlides);
    setTimeout(showSlides, 4000);
})

prevBtn.addEventListener('click', e => {
    console.log(e)
    showSlides(slideIndex - 1);
    clearInterval(showSlides);
    setTimeout(showSlides, 4000);
})
