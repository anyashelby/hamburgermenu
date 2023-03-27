const hamburger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
});

hamburger.addEventListener('click', () => {
	menu.classList.toggle('active');
});

	