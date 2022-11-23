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

// 1.3 Interective cursor


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

// 1.7 Parallax srolling items
const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
});

gsap.registerPlugin(ScrollTrigger);

scroller.on('scroll', ScrollTrigger.update);

ScrollTrigger.scrollerProxy(
    '.page-container', {
        scrollTop(value) {
            return arguments.length ?
            scroller.scrollTo(value, 0, 0) :
            scroller.scroll.instance.scroll.y
        },
        getBoundingClientRect() {
            return {
                left: 0, top: 0, 
                width: window.innerWidth,
                height: window.innerHeight
            }
        }
    }
);

ScrollTrigger.create({
    trigger: '.big-image',
    scroller: '.page-container',
    start: 'top+=5% 50%',
    end: 'bottom-=40% 50%',
    animation: gsap.to('.big-image', {backgroundSize: '120%'}),
    scrub: 2,
});

var y = {
    el: document,
    name: "scroll",
    offset: [0, 0],
    repeat: !1,
    smooth: !1,
    initPosition: { x: 0, y: 0 },
    direction: "vertical",
    gestureDirection: "vertical",
    reloadOnContextChange: !1,
    lerp: 0.1,
    class: "is-inview",
    scrollbarContainer: !1,
    scrollbarClass: "c-scrollbar",
    scrollingClass: "has-scroll-scrolling",
    draggingClass: "has-scroll-dragging",
    smoothClass: "has-scroll-smooth",
    initClass: "has-scroll-init",
    getSpeed: !1,
    getDirection: !1,
    scrollFromAnywhere: !1,
    multiplier: 1,
    firefoxMultiplier: 50,
    touchMultiplier: 2,
    resetNativeScroll: !0,
    tablet: { smooth: !1, direction: "vertical", gestureDirection: "vertical", breakpoint: 992 },
    smartphone: { smooth: !1, direction: "vertical", gestureDirection: "vertical" },
}

ScrollTrigger.addEventListener('refresh', () => scroller.update());

ScrollTrigger.refresh();

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