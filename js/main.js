// Header Navigation Button
// const nav_button = document.querySelector('.nav__toggle');
// const menu_icon = document.querySelector('.menu-icon');
// const nav = document.querySelector('.nav');

// nav_button.onclick = function(){
//   nav.classList.toggle('nav--mobile');
//   menu_icon.classList.toggle('menu-icon--active');
//   document.body.classList.toggle('no-scroll');
// }


/* Changing color of arrow on button when hover is active */

let nav_button = document.querySelector(".nav__button");

function setAttributes(el, attrs) {
    for(var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

const image_arrow_dark = document.createElement('img');
setAttributes(image_arrow_dark, {
    "src": "./images/icons/icon-arrow-right-dark.svg", 
    "alt": "&#129189;",
});

const image_arrow_light = document.createElement('img');
setAttributes(image_arrow_light, {
    "src": "./images/icons/icon-arrow-right-light.svg", 
    "alt": "&#129189;",
});

nav_button.append(image_arrow_dark);


nav_button.addEventListener('mouseenter', () => {
    image_arrow_dark.remove();
    nav_button.append(image_arrow_light);
});

nav_button.addEventListener('mouseleave', () => {
    image_arrow_light.remove();
    nav_button.append(image_arrow_dark);
});


/* Carousel Script */

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        dots: false,
        margin: 48,
        loop: true,
    });
});

/* Video-Button Script */

const videoBtn = document.querySelector('#video-btn');
const videoPrev = document.querySelector('.video__preview');
const videoWrapper = document.querySelector('.video__cover');
const video = document.querySelector('#video-file');

videoWrapper.addEventListener('click', function() {
    if (video.paused) {
        videoWrapper.classList.remove('video-overlay');
        videoPrev.classList.add('none');
        videoBtn.classList.add('none');
        video.play()
    } else {
        videoWrapper.classList.add('video-overlay');
        videoBtn.classList.remove('none');
        video.pause()
    }
})

document.body.onkeydown = function(e) {
    if (e.keyCode == '32') {
        if (videoPrev.classList.contains('none')) {
            if (video.paused) {
                videoWrapper.classList.remove('video-overlay');
                videoPrev.classList.add('none');
                videoBtn.classList.add('none');
                video.play()
            } else {
                videoWrapper.classList.add('video-overlay');
                videoBtn.classList.remove('none');
                video.pause()
            }
        }
    }
};