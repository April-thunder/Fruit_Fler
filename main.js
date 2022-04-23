// Настройка слайдера

const swiper = new Swiper('.swiper', {
    
    autoplay: {
        delay: 3000,
    },

    spaceBetween: 20, 

    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
  },
});

// Яндекс карты

function init() {
    let map = new ymaps.Map('map', {
        center: [48.46857007389406,135.08654149999998],
        zoom: 17
    })
}

ymaps.ready(init);

// Мобильное меню 

const btn = document.querySelectorAll('.menu__btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');
const closeIcon = document.querySelector('.close__icon');

btn.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {
	if (e.target === modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}
});

closeIcon.addEventListener('click', (e) => {
	if (e.target === closeIcon) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}
});