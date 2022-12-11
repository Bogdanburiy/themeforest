"use strict";

// 1.1 Sticky Header
// let header = document.querySelector('.header');

// if (header) {
//     function stickyHeader() {
//         if (window.pageYOffset > 10) {
//             header.classList.add('sticky-active');
//         } else {
//             header.classList.remove('sticky-active');
//         }
//     }

//     window.addEventListener('load', stickyHeader);
//     window.addEventListener('scroll', stickyHeader);
// }

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

// 1.4 Interective fill page progress


// 1.4 Change logo on hover block "Our clients"
let imageGet = Array.from(document.querySelectorAll('.clients-list__item .strong'));
let imageSet = document.querySelector('.clients-logo img');

for ( let item of imageGet ) {
    item.addEventListener('mouseover', function() {
        let imageSrc = item.dataset.src;
        imageSet.src = imageSrc;
    });
}

// 1.5 Add class after load web document
window.addEventListener('load', function() {
    document.documentElement.classList.add("is-ready");
});

// 1.6 Preloader page
// preloader();

// function preloader (done) {
//     let preObj = document.querySelector('.preloader-page');
//     let preCount = document.querySelector('.preloader-page__counter-number');
//     let pageContent = document.querySelector('.page-container');
//     let preLine = document.querySelector('.preloader-page__counter-line span');

//     preObj.classList.add('show');
//     pageContent.classList.remove('show');

//     let width = 0;
//     let time = setInterval(function() {
//         width = width + 1;
//         preCount.textContent = width + '%';
//         preLine.style.width = width + '%';
//         if (width === 100) {
//             preObj.classList.remove('show');
//             pageContent.classList.add('show');
//             clearInterval(time);
//             width = 0;
//             if (done) {
//                 return done();
//             }
//         }
//     }, 20)
// }

// 1.7 Mobile menu
let tl = new TimelineMax({ paused: true });

tl.to(".overlay-container", 1, {
    left: 0,
    ease: Expo.easeInOut,
});

tl.staggerFrom(
    ".overlay-menu > div",
    0.8,
    { y: 100, opacity: 0, ease: Expo.easeOut },
    "0.1",
    "-=0.4"
);

tl.reverse();
$(document).on("click", ".menu-open", function () {
    $(this).toggleClass( "open" );
    $('html').toggleClass( "hidden" );
    tl.reversed(!tl.reversed());
});
$(document).on("click", ".menu-close", function () {
    tl.reversed(!tl.reversed());
});

// 1.8 Set attribute to news cards
