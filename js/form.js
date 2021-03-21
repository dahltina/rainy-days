
const form = document.querySelector("#form");
const firstName = document.querySelector("#first-name");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#last-name");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const button = document.querySelector("#submit");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const submitSuccess = document.querySelector("#success-message");

form.addEventListener("submit", validateForm);
form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    if (checkLength(firstName.value, 0) && checkLength(lastName.value, 0) && validateEmail(email.value) && checkLength(message.value, 19)) {
        submitSuccess.innerHTML = `<div class="success-message">Thank you! 
                                Your message has been sent and we will get back to you shortly</div>`
        form.reset();
    }
}

function validateForm(event) {
    event.preventDefault();

    if (checkLength(firstName.value, 0)) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }
    if (checkLength(lastName.value, 0)) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }
    if (validateEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
    if (checkLength(message.value, 19)) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }
}

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}
