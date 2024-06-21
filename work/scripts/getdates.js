const currentYear = new Date().getFullYear();

const footerFirstParagraph = document.querySelector('footer p:first-child');
footerFirstParagraph.textContent = `© ${currentYear} Bryce Hansen.`;

const lastModifiedDate = document.lastModified;

const secondParagraph = document.querySelector('p:nth-child(2)');
secondParagraph.textContent = `Last modified: ${lastModifiedDate}`;
