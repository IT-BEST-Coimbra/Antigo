const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");
const headerStu = document.getElementById("headerstu");
const headerComp = document.getElementById("headercomp");
const headerButton = document.getElementById("open-popup");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.toggle("is-active");
        navbarMenu.classList.toggle("is-active");
    });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", () => {
        burgerMenu?.classList.remove("is-active");
        navbarMenu?.classList.remove("is-active");
    });
});

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
    if (headerMenu && headerButton && this.scrollY >= 85) {
        headerMenu.classList.add("on-scroll");
        headerButton.classList.add("on-scroll");
    } else {
        headerMenu?.classList.remove("on-scroll");
        headerButton?.classList.remove("on-scroll");
    }
});

// ------------ COMPANIES ------------

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
    if (headerComp && headerButton && this.scrollY >= 85) {
        headerComp.classList.add("on-scroll");
        headerButton.classList.add("on-scroll");
    } else {
        headerComp?.classList.remove("on-scroll");
        headerButton?.classList.remove("on-scroll");
    }
});

// ------------ STUDENTS ------------

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
    if (headerStu && headerButton && this.scrollY >= 85) {
        headerStu.classList.add("on-scroll");
        headerButton.classList.add("on-scroll");
    } else {
        headerStu?.classList.remove("on-scroll");
        headerButton?.classList.remove("on-scroll");
    }
});

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
    if (navbarMenu && window.innerWidth > 768) {
        if (navbarMenu.classList.contains("is-active")) {
            navbarMenu.classList.remove("is-active");
        }
    }
});
