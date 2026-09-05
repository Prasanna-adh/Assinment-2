// Mobile menu
const menu = document.getElementById("navMenu");
const menuBtn = document.getElementById("menuButton");

if (menuBtn) {
    menuBtn.onclick = function () {
        menu.classList.toggle("active");
    };
}


// Learn More buttons
const buttons = document.querySelectorAll(".learn-button");

for (let button of buttons) {
    button.onclick = function () {

        let text = button.nextElementSibling;

        if (text.classList.contains("show")) {
            text.classList.remove("show");
            button.innerHTML = "Learn More";
        } else {
            text.classList.add("show");
            button.innerHTML = "Show Less";
        }
    };
}


// Dark mode
const theme = document.getElementById("themeButton");

if (localStorage.getItem("darkMode") == "on") {
    document.body.classList.add("dark");

    if (theme) {
        theme.innerHTML = "☀️";
    }
}

if (theme) {
    theme.onclick = function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            theme.innerHTML = "☀️";
            localStorage.setItem("darkMode", "on");
        } else {
            theme.innerHTML = "🌙";
            localStorage.setItem("darkMode", "off");
        }
    };
}


// Contact form
const form = document.getElementById("contactForm");

if (form) {
    form.onsubmit = function (event) {

        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let issue = document.getElementById("issue").value;
        let message = document.getElementById("message").value.trim();

        let result = document.getElementById("formMessage");

        if (name == "") {
            result.innerHTML = "Please enter your name.";
            return;
        }

        if (email == "" || !email.includes("@")) {
            result.innerHTML = "Please enter a valid email.";
            return;
        }

        if (phone == "") {
            result.innerHTML = "Please enter your phone number.";
            return;
        }

        if (issue == "") {
            result.innerHTML = "Please select your IT issue.";
            return;
        }

        if (message == "") {
            result.innerHTML = "Please describe your problem.";
            return;
        }

        result.innerHTML = "Your support request has been submitted.";

        form.reset();
    };
}