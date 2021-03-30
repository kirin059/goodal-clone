'use strict';

// nav drop-down
const menu = document.querySelectorAll('.sub_li a');
const drop = document.querySelectorAll('.dropdown')
const dropdown = document.querySelectorAll('.dropdown_li');

menu.forEach(item => {
    //console.log(item)
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

$(document).ready(function () {
    $('.open').click(function () {
        $('.modal_bg').css({ "display": "block" })
    })
});




// log-in

const form = document.getElementById("login_form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// input에 error메시지(+ outline) 뜨는 함수 기능 구현
function showError(input, message) {
    console.log('input')
    const formControl = input.parentElement;
    formControl.className = "form-control error"; // css 적용

    const small = formControl.querySelector("small");
    small.innerText = message;
}

// input에 success outline 뜨는 함수 기능 구현
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// id를 대문자로 변환하여 텍스트 출력
function idName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// email 유효성 검사
function checkEmail(input) {
    if (input.value.trim() && input.value.includes("@")) {
        showSuccess(input);
    } else {
        showError(input, `${idName(input)} is not valid`);
    }
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords do not match");
    }
}

// Check required fields
function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function (input) {
        if (input.value.length < 0) {
            //값이 없으면
            showError(input, `${getFieldName(input)} is required`);
            isRequired = true;
        } else {
            showSuccess(input);
        }
    });

    return isRequired;
}

// Get fieldname
function getFieldName(input) {
    console.log(input);
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!checkRequired([username, email, password, password2])) {
        checkLength(username, 3, 15);
        checkLength(password, 6, 25);
        checkEmail(email);
        checkPasswordsMatch(password, password2);
    }
});
