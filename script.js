
/* =========================
   MOBILE NAVIGATION
========================= */

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("open");

});


/* Close menu after clicking a navigation link */

navLinks.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

    });

});


/* =========================
   AUTOMATIC COPYRIGHT YEAR
========================= */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const formData = new FormData(contactForm);

    const name = formData.get("name");

    const email = formData.get("email");

    const message = formData.get("message");


    const subject = encodeURIComponent(
        "Portfolio enquiry from " + name
    );

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\n" + message
    );


    // Replace this with your actual email address

    const recipient = "pauloauka@gmail.com";


    const mailtoLink =
        "mailto:" + recipient +
        "?subject=" + subject +
        "&body=" + body;


    window.location.href = mailtoLink;

});