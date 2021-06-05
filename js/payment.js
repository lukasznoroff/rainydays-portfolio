const shippingName = document.querySelector(".shipping-name");
const shippingSurname = document.querySelector(".shipping-surname");
const shippingStreet =document.querySelector(".shipping-street");
const shippingCity = document.querySelector(".shipping-city");

const paymentName = document.querySelector(".payment-name");
const paymentCardNumber = document.querySelector(".payment-card-number");
const paymentCvc = document.querySelector(".payment-cvc");
const paymentEmail = document.querySelector(".payment-email");
const paymentBtn = document.querySelector(".payment-btn");

const errorShippingName = document.querySelector(".error-shipping-name");
const errorShippingSurname = document.querySelector(".error-shipping-card-surname");
const errorShippingStreet = document.querySelector(".error-shipping-street");
const errorShippingCity = document.querySelector(".error-shipping-city");
const errorPaymentName = document.querySelector(".error-payment-name");
const errorPaymentCard = document.querySelector(".error-payment-card");
const errorPaymentCvc = document.querySelector(".error-payment-cvc");
const errorPaymentEmail = document.querySelector(".error-patment-email");
 
paymentBtn.addEventListener("click", function(){
    
    if (checkLength2(shippingName.value, 0) === true) {
        errorShippingName.classList.remove("show-error");
    } else {
        errorShippingName.classList.add("show-error");
    }

    if (checkLength2(shippingSurname.value, 0) === true) {
        errorShippingSurname.classList.remove("show-error");
    } else {
        errorShippingSurname.classList.add("show-error");
    }

    if (checkLength2(shippingStreet .value, 0) === true) {
        errorShippingStreet.classList.remove("show-error");
    } else {
        errorShippingStreet.classList.add("show-error");
    }

    if (checkLength2(shippingCity .value, 0) === true) {
        errorShippingCity.classList.remove("show-error");
    } else {
        errorShippingCity.classList.add("show-error");
    }
   
    if (checkLength2(paymentName .value, 0) === true) {
        errorPaymentName.classList.remove("show-error");
    } else {
        errorPaymentName.classList.add("show-error");
    }

    if (checkLength2(paymentCardNumber.value, 16) === true) {
        errorPaymentCard.classList.remove("show-error");
    } else {
        errorPaymentCard.classList.add("show-error");
    }

    if (checkLength2(paymentCvc.value, 2) === true) {
        errorPaymentCvc.classList.remove("show-error");
    } else {
        errorPaymentCvc.classList.add("show-error");
    }

    if (checkEmail(paymentEmail.value, 0) === true) {
        errorPaymentEmail.classList.remove("show-error");
    } else {
        errorPaymentEmail.classList.add("show-error");
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


function checkEmail(email) {
    const redex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const pattern = redex.test(email);
    return pattern;
}

const paymentSlide = document.querySelector(".payment-slide");

function checkErrors() {
    
    let allErrors = document.querySelectorAll(".error-message-shipping");
    let errorCounter = 0;

    allErrors.forEach((el) => {

        if (el.classList.contains("show-error")) {
            errorCounter++
        }

    });

    if (errorCounter === 0) {
        paymentSlide.classList.add("visible");
    } else {
        paymentSlide.classList.remove("visible");

    }
}