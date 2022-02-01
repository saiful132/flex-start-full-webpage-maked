function aos_init() {
	AOS.init({
		duration: 1000,
		easing: "ease-in-out",
		once: true,
		mirror: false,
	});
}
window.addEventListener("load", () => {
	aos_init();
});

window.addEventListener("scroll", function () {
	let navbar = document.querySelector(".navBAR");
	let windowPos = window.scrollY > 0;
	navbar.classList.toggle("scrolling-effect", windowPos);
});

// swiper
var swiper = new Swiper(".mySwiper", {
	effect: "coverflow",
	loop: true,
	centeredSlides: true,
	spaceBetween: 150,
	slidesPerView: "auto",
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 100,
		modifier: 1.5,
		slideShadows: true,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

// 02
var swiper = new Swiper(".mySwiper1", {
	effect: "coverflow",
	loop: true,
	grabCursor: false,
	centeredSlides: true,
	slidesPerView: "auto",
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: true,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

// purecounter
new PureCounter();
