"use strict";

// 1.1 Sticky Header
let header = document.querySelector('.header');

if (header) {
    function stickyHeader() {
        if (window.pageYOffset > 10) {
            header.classList.add('sticky-active');
        } else {
            header.classList.remove('sticky-active');
        }
    }

    window.addEventListener('load', stickyHeader);
    window.addEventListener('scroll', stickyHeader);
}

// 1.2 Anchor Prevent default
let anchor = document.querySelectorAll('a[href="#"]');
let anchorLength = anchor.length;

if (anchorLength > 0) {
    for ( let i = 0; i < anchorLength; i++ ) {
        anchor[i].addEventListener('click', function(e) {
            e.preventDefault();
        });
    }
}

// 1.3 Interective cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', function(e) {
    cursor.setAttribute("style","top:" + (e.pageY - 10) + "px; left:" + (e.pageX - 10) + "px;")
});

document.addEventListener('click', function(e) {
   cursor.classList.add('mclick');
   setTimeout(function() { cursor.classList.remove('mclick'); },500) 
});

// 1.4 Accordion
let accordion = document.getElementsByClassName('offer-collapse__item-head');
let i;

for (i = 0; accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.parentElement.classList.toggle('active');
    });
}