function saveEmail() {
    const emailInput = document.getElementById('newsletter-email');
    if (emailInput && emailInput.value) {
        localStorage.setItem('newsletterEmail', emailInput.value);
        alert('Email saved! You will now receive our newsletters.');
    } else {
        alert('Please enter a valid email address.');
    }
}
