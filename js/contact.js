const contactName = document.querySelector(".contact-name");
const contactEmail = document.querySelector(".contact-email");
const contactSubject = document.querySelector(".contact-subject"); 
const contactTextarea = document.querySelector(".contact-textarea"); 
const contactBtn = document.querySelector(".contact-btn"); 

const errorContactName = document.querySelector(".error-contact-name");
const errorContactEmail = document.querySelector(".error-contact-email");
const errorContactSubject = document.querySelector(".error-contact-subject"); 
const errorContactTextarea = document.querySelector(".error-contact-textarea"); 


contactBtn.addEventListener("click", function(){
    
    if (checkLength2(contactName.value, 0) === true) {
        errorContactName.classList.remove("show-error");
    } else {
        errorContactName.classList.add("show-error");
    }

    if (checkEmail2(contactEmail.value) === true) {
        errorContactEmail.classList.remove("show-error");
    } else {
        errorContactEmail.classList.add("show-error");
    }


    if (checkLength2(contactSubject.value, 0) === true) {
        errorContactSubject.classList.remove("show-error");
    } else {
        errorContactSubject.classList.add("show-error");
    }

    if (checkLength2(contactTextarea.value, 12) === true) {
        errorContactTextarea.classList.remove("show-error");
    } else {
        errorContactTextarea.classList.add("show-error");
    }

    checkErrors();


})

function checkLength2(value, len) {

    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}


function checkEmail2(email) {

    const redex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const pattern = redex.test(email);
    return pattern;

}

const contactSlide = document.querySelector(".contact-slide");


function checkErrors() {

    let allErrors = document.querySelectorAll(".error-message-contact");

    let errorCounter = 0;


    allErrors.forEach((el) => {

        if (el.classList.contains("show-error")) {
            errorCounter++
        }

    });

    if (errorCounter === 0) {
        contactSlide.classList.add("visible");

    } else {
        contactSlide.classList.remove("visible");
    }
}