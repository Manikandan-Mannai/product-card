const productCards = document.querySelectorAll('.product-card');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close-btn');

for (let i = 0; i < productCards.length; i++) {
    productCards[i].addEventListener('click', () => {
        modals[i].style.display = 'flex';
    });

    closeBtns[i].addEventListener('click', () => {
        modals[i].style.display = 'none';
    });
}
