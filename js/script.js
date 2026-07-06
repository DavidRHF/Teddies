"use strict";

/* ==========================================================
   TEDDIES - PRODUCTION JS
========================================================== */

/* ---------- UTIL ---------- */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

/* ==========================================================
   MOBILE NAV
========================================================== */

const menuBtn = $(".mobile-menu-btn");
const navLinks = $(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    $$(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}

/* ==========================================================
   STICKY NAV (CLEAN VERSION)
========================================================== */

const navbar = $(".navbar");

if (navbar) {
    window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    });
}
