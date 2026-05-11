// SCROLL ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden").forEach(el => {
    observer.observe(el);
});

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");

    document.body.classList.toggle("menu-open");

});

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {

        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");
        document.body.classList.remove("menu-open");

    });
});

const contactToggle = document.getElementById("contact-toggle");
const contactDropdown = document.getElementById("contact-dropdown");

if (contactToggle) {

    contactToggle.addEventListener("click", (e) => {

        e.preventDefault();

        contactDropdown.classList.toggle("active");

    });

}

/* CLICK OUTSIDE TO CLOSE */
document.addEventListener("click", (e) => {

    if (
        !contactDropdown.contains(e.target) &&
        !contactToggle.contains(e.target)
    ) {
        contactDropdown.classList.remove("active");
    }

});