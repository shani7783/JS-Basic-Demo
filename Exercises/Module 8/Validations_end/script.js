function validateForm(event) {
    cleanErrors();
    validateUsername();
    validatePassword();
    validateAcceptTerms();

    if (document.querySelector('.error') != null) {
        event.preventDefault();
    }
}

function cleanErrors() {
    const errors = document.querySelectorAll(".error");
    for (let i = 0; i < errors.length; i++) {
        errors[i].remove();
    }
}

function validateUsername() {
    const usernameContainer = document.querySelector("#username");
    const usernameControl = usernameContainer.querySelector("input");

    if (!validateMinimumLength(usernameControl, 3)) {
        addErrorMessage(usernameContainer, "Username must contain 3 characters");
    }
}

function validatePassword() {
    const passwordContainer = document.querySelector("#password");
    const passwordControl = passwordContainer.querySelector("input");

    if (!validateMinimumLength(passwordControl, 1)) {
        addErrorMessage(passwordContainer, "You must enter password");
    }
}

function validateAcceptTerms() {
    const acceptTermsContainer = document.querySelector("#acceptTerms");
    const acceptTermsControl = acceptTermsContainer.querySelector("input");

    if (!acceptTermsControl || !acceptTermsControl.checked) {
        addErrorMessage(acceptTermsContainer, "You must accept the terms");
    }
}

function validateMinimumLength(control, minimumLength) {
    return control && control.value.length >= minimumLength;
}

function addErrorMessage(container, errorMsg) {
    const error = document.createElement('span');
    error.innerText = errorMsg;
    error.setAttribute('class', 'error');
    container.appendChild(error);
}

document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector("form");
    form.addEventListener("submit", validateForm);
});