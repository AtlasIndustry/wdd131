// Get the current year
const currentYear = new Date().getFullYear();

// Update the footer's first paragraph with the copyright year
const footerFirstParagraph = document.querySelector('footer p:first-child');
footerFirstParagraph.textContent = `© ${currentYear} Your Company Name. All rights reserved.`;

// Get the last modified date
const lastModifiedDate = document.lastModified;

// Update the second paragraph with the last modified date
const secondParagraph = document.querySelector('p:nth-child(2)');
secondParagraph.textContent = `Last modified: ${lastModifiedDate}`;