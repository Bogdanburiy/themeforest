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

for ( let item of accordion) {
    item.addEventListener('click', function() {
        this.parentElement.classList.toggle('active');
    });
}

// 1.4 Change logo on hover block "Our clients"
let imageGet = Array.from(document.querySelectorAll('.clients-list__item .strong'));
let imageSet = document.querySelector('.clients-logo img');

for ( let item of imageGet ) {
    item.addEventListener('mouseover', function() {
        let imageSrc = item.dataset.src;
        imageSet.src = imageSrc;
    });
}

// 1.5 Parallax srolling items
// const scroller = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });

// gsap.registerPlugin(ScrollTrigger);

// scroller.on('scroll', ScrollTrigger.update);

// ScrollTrigger.scrollerProxy(
//     '.page-container', {
//         scrollTop(value) {
//             return arguments.length ?
//             scroller.scrollTo(value, 0, 0) :
//             scroller.scroll.instance.scroll.y
//         },
//         getBoundingClientRect() {
//             return {
//                 left: 0, top: 0, 
//                 width: window.innerWidth,
//                 height: window.innerHeight
//             }
//         }
//     }
// );

// ScrollTrigger.create({
//     trigger: '.big-image',
//     scroller: '.page-container',
//     start: 'top+=5% 50%',
//     end: 'bottom-=40% 50%',
//     animation: gsap.to('.big-image', {backgroundSize: '120%'}),
//     scrub: 2,
// });

// ScrollTrigger.addEventListener('refresh', () => scroller.update())

// ScrollTrigger.refresh()