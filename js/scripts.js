'use strict';

/**
 * navbar variables
 */

const menuToggleBtn = document.querySelector('[data-navbar-toggle-btn]');
const navbar = document.querySelector('[data-navbar]');

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle('active'); };

menuToggleBtn.addEventListener('click', ()=>{
    elemToggleFunc(navbar);
});

/**
 * GO TO TOP Button
 */

const goTopBtn = document.querySelector('[data-go-top]');

window.addEventListener('scroll', ()=>{
    if (window.scrollY > 500) {
        goTopBtn.classList.add('active');
    } else {
        goTopBtn.classList.remove('active');
    }
});    
