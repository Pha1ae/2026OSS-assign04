const form = document.querySelector('#checkout-form');
const message = document.querySelector('#message');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.classList.add('was-validated');

    if (!form.checkValidity()) {
        const invalidInput = form.querySelector(':invalid');
        message.textContent = invalidInput.validationMessage;
        invalidInput.focus();
        return;
    }

    message.textContent = '';
    alert('Registration complete! This is a demo; no order or payment was submitted.');
});
