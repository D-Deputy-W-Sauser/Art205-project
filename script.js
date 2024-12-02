const popup = document.getElementById('popup');
const popupBtn = document.getElementById('popupBtn');
const closeBtn = document.getElementById('closeBtn');
const confirmationModal = document.getElementById('confirmationModal');
const confirmBtn = document.getElementById('confirmBtn');
const cancelBtn = document.getElementById('cancelBtn');
const contactForm = document.getElementById('contactForm');

popupBtn.addEventListener('click', () => {
    popup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    confirmationModal.style.display = 'block';
});

confirmBtn.addEventListener('click', () => {
    contactForm.submit();
});
