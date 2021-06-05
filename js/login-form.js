const username = document.querySelector(".name");
const surname = document.querySelector(".surname");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const registerBtn = document.querySelector(".register-btn");

const errorName = document.querySelector(".error-name");
const errorSurname = document.querySelector(".error-surname");
const errorEmail = document.querySelector(".error-email");
const errorPassword = document.querySelector(".error-password");

registerBtn.addEventListener("click", function () {

    if (checkLength(username.value, 0) === true) {
        errorName.classList.remove("show-error");
    } else {
        errorName.classList.add("show-error");
    }

    if (checkLength(surname.value, 0) === true) {
        errorSurname.classList.remove("show-error");
    } else {
        errorSurname.classList.add("show-error");
    }

    if (checkEmail(email.value) === true) {
        errorEmail.classList.remove("show-error");
    } else {
        errorEmail.classList.add("show-error");
    }

    if (checkLength(password.value, 8) === true) {
        errorPassword.classList.remove("show-error");
    } else {
        errorPassword.classList.add("show-error");
    }
    checkErrors();
})

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}


function checkEmail(email) {
    const redex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const pattern = redex.test(email);
    return pattern;
}

const registerForm = document.querySelector(".accound-created");

function checkErrors() {

    let allErrors = document.querySelectorAll(".error-message");
    let errorCounter = 0;

    allErrors.forEach((el) => {

        if (el.classList.contains("show-error")) {
            errorCounter++
        }
    });

    if (errorCounter === 0) {
        registerForm.classList.add("visible");

    } else {
        registerForm.classList.remove("visible");
    }
}


const loginEmail = document.querySelector(".login-email");
const loginPassword = document.querySelector(".login-password");
const errorLoginEmail = document.querySelector(".error-login-email");
const errorLoginPassword = document.querySelector(".error-login-password");
const loginBtn = document.querySelector(".login-btn");


loginBtn.addEventListener("click", function () {
    if (loginPassword.value.trim().length > 8) {
        errorLoginPassword.classList.remove("show-error");
    } else {
        errorLoginPassword.classList.add("show-error");
    }

    if (checkEmail(loginEmail.value) === true) {
        errorLoginEmail.classList.remove("show-error");
    } else {
        errorLoginEmail.classList.add("show-error");
    }
    checkErrorsInLogin();
})


const loggedForm = document.querySelector(".logged");
function checkErrorsInLogin() {

    let allErrors = document.querySelectorAll(".error-message-login");
    let errorCounter = 0;

    allErrors.forEach((el) => {

        if (el.classList.contains("show-error")) {
            errorCounter++
        }

    });

    if (errorCounter === 0) {
        loggedForm.classList.add("visible");
    } else {
        loggedForm.classList.remove("visible");
    }
}



