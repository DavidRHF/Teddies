/* ==========================================================
   TEDDIES RESTAURANT
   JavaScript - Interactions
========================================================== */

/* ---------- MOBILE NAV TOGGLE ---------- */

const menuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

/* Close mobile menu when clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

/* ---------- NAVBAR SCROLL EFFECT ---------- */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
        navbar.style.background = "rgba(255, 248, 238, 0.95)";
    } else {
        navbar.style.boxShadow = "none";
        navbar.style.background = "rgba(255, 248, 238, 0.85)";
    }
});

/* ---------- SIMPLE SCROLL REVEAL ---------- */

const revealElements = document.querySelectorAll(".card, .testimonial, .section");

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transition = "0.6s ease";
        } else {
            el.style.opacity = "0";
            el.style.transform = "translateY(20px)";
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ---------- BUTTON FEEDBACK EFFECT ---------- */

document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.96)";
        setTimeout(() => {
            btn.style.transform = "";
        }, 150);
    });
});
