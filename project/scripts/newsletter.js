document.addEventListener('DOMContentLoaded', function () {
    const newsletterForm = document.getElementById('newsletter-form');

    newsletterForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting in the traditional way

        const emailInput = document.getElementById('newsletter-email');
        if (emailInput && emailInput.value) {
            localStorage.setItem('newsletterEmail', emailInput.value);
            alert('Thank you for subscribing! You will now receive updates from our garden.');
        } else {
            alert('Please enter a valid email address to subscribe.');
        }
    });
});
