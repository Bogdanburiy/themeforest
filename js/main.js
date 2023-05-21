"use strict";

// 1.1 Sticky Header
$(function () {
  var $window = $(window);
  var lastScrollTop = 0;
  var $header = $(".header");
  var headerHeight = $header.outerHeight();

  $window.scroll(function () {
    var windowTop = $window.scrollTop();

    if (windowTop >= headerHeight) {
      $header.addClass("sticky-hidden");
    } else {
      $header.removeClass("sticky-hidden");
      $header.removeClass("sticky-show");
    }

    if ($header.hasClass("sticky-hidden")) {
      if (windowTop < lastScrollTop) {
        $header.addClass("sticky-show");
      } else {
        $header.removeClass("sticky-show");
      }
    }
    lastScrollTop = windowTop;
  });
});

// 1.2 Anchor Prevent default
let anchor = document.querySelectorAll('a[href="#"]');
let anchorLength = anchor.length;

if (anchorLength > 0) {
  for (let i = 0; i < anchorLength; i++) {
    anchor[i].addEventListener("click", function (e) {
      e.preventDefault();
    });
  }
}

// 1.3 Change logo on hover block "Our clients"
let imageGet = Array.from(
  document.querySelectorAll(".clients-list__item .strong")
);
let imageSet = document.querySelector(".clients-logo img");

for (let item of imageGet) {
  item.addEventListener("mouseover", function () {
    let imageSrc = item.dataset.src;
    imageSet.src = imageSrc;
  });
}

// 1.4 Add class after load web document
window.addEventListener("load", function () {
  document.documentElement.classList.add("is-ready");
});

// 1.5 Preloader page
preloader();

function preloader (done) {
    let preObj = document.querySelector('.preloader-page');
    let preCount = document.querySelector('.preloader-page__counter-number');
    let pageContent = document.querySelector('.page-container');
    let preLine = document.querySelector('.preloader-page__counter-line span');

    preObj.classList.add('show');
    pageContent.classList.remove('show');

    let width = 0;
    let time = setInterval(function() {
        width = width + 1;
        preCount.textContent = width + '%';
        preLine.style.width = width + '%';
        if (width === 100) {
            preObj.classList.remove('show');
            pageContent.classList.add('show');
            clearInterval(time);
            width = 0;
            if (done) {
                return done();
            }
        }
    }, 20)

    
}

// 1.6 Init AOS animation
AOS.init({
  once: true,
});

// 1.7 Init Fancybox pop-up
if ($("[data-fancybox]").length) {
  Fancybox.bind("[data-fancybox]");
}

// 1.8 Init Testimonials carousel
$(".testimonials-carousel").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
  centerMode: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// 9 Custom Cursor - https://codepen.io/gabrielcojea/pen/jOWRBrL
const cursor = document.querySelector("#cursor");
const cursorCircle = cursor.querySelector(".cursor-circle");

const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
const pos = { x: 0, y: 0 }; // cursor's coordinates
const speed = 0.1; // between 0 and 1

const updateCoordinates = (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
};

window.addEventListener("mousemove", updateCoordinates);

function getAngle(diffX, diffY) {
  return (Math.atan2(diffY, diffX) * 180) / Math.PI;
}

function getSqueeze(diffX, diffY) {
  const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
  const maxSqueeze = 0.15;
  const accelerator = 1500;
  return Math.min(distance / accelerator, maxSqueeze);
}

const updateCursor = () => {
  const diffX = Math.round(mouse.x - pos.x);
  const diffY = Math.round(mouse.y - pos.y);

  pos.x += diffX * speed;
  pos.y += diffY * speed;

  const angle = getAngle(diffX, diffY);
  const squeeze = getSqueeze(diffX, diffY);

  const scale = "scale(" + (1 + squeeze) + ", " + (1 - squeeze) + ")";
  const rotate = "rotate(" + angle + "deg)";
  const translate = "translate3d(" + pos.x + "px ," + pos.y + "px, 0)";

  cursor.style.transform = translate;
  cursorCircle.style.transform = rotate + scale;
};

function loop() {
  updateCursor();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

const cursorModifiers = document.querySelectorAll("[cursor-class]");

cursorModifiers.forEach((curosrModifier) => {
  curosrModifier.addEventListener("mouseenter", function () {
    const className = this.getAttribute("cursor-class");
    cursor.classList.add(className);
  });

  curosrModifier.addEventListener("mouseleave", function () {
    const className = this.getAttribute("cursor-class");
    cursor.classList.remove(className);
  });
});

// 10 Change cursor color footer hovering
$(".footer").hover(
  function () {
    $("#cursor").addClass("white-border");
  },
  function () {
    setTimeout(
      function () {
        $("#cursor").removeClass("white-border");
      }.bind(this),
      100
    );
  }
);

// 11 Change cursor color footer hovering
$(".hamburger-overlay").hover(
    function () {
      $("#cursor").addClass("white-border");
    },
    function () {
      setTimeout(
        function () {
          $("#cursor").removeClass("white-border");
        }.bind(this),
        100
      );
    }
  );

// 12 Change cursor arrow feedback navs hovering
$(".testimonials-carousel__nav ul li.prev").hover(
  function () {
    $("#cursor").addClass("arrow-flip");
  },
  function () {
    setTimeout(
      function () {
        $("#cursor").removeClass("arrow-flip");
      }.bind(this),
      100
    );
  }
);

// 13 Open overlay menu by click
function openNav() {
  document.getElementById("hamburger-overlay").classList.add("is-open");
}

function closeNav() {
  document.getElementById("hamburger-overlay").classList.remove("is-open");
}