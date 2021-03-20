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

