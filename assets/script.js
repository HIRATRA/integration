const menuHamberger = document.querySelector(".menu-hamberger");
const navLinks = document.querySelector(".nav-links");
menuHamberger.addEventListener("click",() => {
    navLinks.classList.toggle("mobile-menu");
});