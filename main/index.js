'use strict';

// nav drop-down
const menu = document.querySelectorAll('.sub_li a');
const drop = document.querySelectorAll('.dropdown')
const dropdown = document.querySelectorAll('.dropdown_li');

menu.forEach(item => {
    item.addEventListener('mouseover', shwoDropLists)
    dropdown.forEach(item => {
        item.addEventListener('mouseover', shwoDropLists)
    })
})

menu.forEach(item => {
    item.addEventListener('mouseout', hideDropLists)
    dropdown.forEach(item => {
        item.addEventListener('mouseout', hideDropLists)
    })
})

function shwoDropLists(e) {
    let hoverNav;

    if (e.path[0].localName === 'a') {
        hoverNav = e.target.nextElementSibling.children
    }
    else if (e.path[0].localName === 'li') {
        hoverNav = e.target.parentElement.children
    }


    for (let i = 0; i < hoverNav.length; i++) {
        hoverNav[i].classList.add('show');
    }

    //console.log(e.path[0].localName)




    // 전체 dropdown되는 공식
    // for (let i = 0; i < dropdown.length; i++) {
    //     dropdown[i].classList.add('show');
    // }


    // console.log(e.target.nextElementSibling.children[0])

}

function hideDropLists(e) {

    let hoverNav;

    if (e.path[0].localName === 'a') {
        hoverNav = e.target.nextElementSibling.children
    }
    else if (e.path[0].localName === 'li') {
        hoverNav = e.target.parentElement.children
    }


    for (let i = 0; i < hoverNav.length; i++) {
        hoverNav[i].classList.remove('show');
    }
}






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


// modal
const bg = document.querySelector('.modal_bg');
const modal = document.querySelector('.modal_content');
const open = document.querySelector('.open');
const close = document.querySelector('.closeBtn');
const close2 = document.querySelector('#submit');

open.addEventListener('click', () => {
    bg.style.display = 'block';
    modal.style.display = 'block'
});

close.addEventListener('click', () => {
    bg.style.display = 'none';
    modal.style.display = 'none'
});

close2.addEventListener('click', () => {
    bg.style.display = 'none';
    modal.style.display = 'none'
});


// log-in
const form = document.getElementById("login_form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
    console.log('input')
    const formControl = input.parentElement;
    formControl.className = "form-control error"; 

    const small = formControl.querySelector("small");
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function idName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkEmail(input) {
    if (input.value.trim() && input.value.includes("@")) {
        showSuccess(input);
    } else {
        showError(input, `${idName(input)} is not valid`);
    }
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords do not match");
    }
}

function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function (input) {
        if (input.value.length < 0) {
            showError(input, `${getFieldName(input)} is required`);
            isRequired = true;
        } else {
            showSuccess(input);
        }
    });

    return isRequired;
}

function getFieldName(input) {
    console.log(input);
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!checkRequired([username, email, password, password2])) {
        checkLength(username, 3, 15);
        checkLength(password, 6, 25);
        checkEmail(email);
        checkPasswordsMatch(password, password2);
    }
});

// nav 페이지이동
const logoToMain = document.querySelector('.head_nav h1')
const main = document.querySelector('.head_nav')
const brand = document.querySelector(".moveToBrand")
const store = document.querySelector(".moveToStore")
const cop = document.querySelector(".moveToCop")

logoToMain.addEventListener('click', () => {
    location.href="./index.html"
})

main.addEventListener('click', () => {
    location.href="./index.html"
})

brand.addEventListener('click', () => {
    location.href="../nav/brand/brand_info/brand.html"
})

store.addEventListener('click', () => {
    location.href="../nav/brand/store_info/store.html"
})

cop.addEventListener('click', () => {
    location.href="../nav/brand/cop_info/cop.html"
})
    
