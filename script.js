// JS REPRESENTATION FROM DOM
// Navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
// VHS REC counter
const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
// Testimonial Slider
const indicatorButtons = document.getElementsByClassName("indicator-button");
const testimonialCards = document.getElementsByClassName("testimonial-card");

// EVENT LISTENERS
document.addEventListener("DOMContentLoaded", userScroll);
document.addEventListener("DOMContentLoaded", runTypingEffect);
document.querySelector("#to-top").addEventListener("click", scrollToTop);

// Hamburger animation
hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
});

// Navbar scroll effect and to-top button
function userScroll() {
	const navbar = document.querySelector(".nav-container");
	const toTopBtn = document.querySelector("#to-top");

	window.addEventListener("scroll", () => {
		if (window.scrollY > 50) {
			navbar.classList.add("navbar-scroll");
			toTopBtn.classList.add("show");
		} else {
			navbar.classList.remove("navbar-scroll");
			toTopBtn.classList.remove("show");
		}
	});
}

function scrollToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// Typing Effect
function runTypingEffect() {
	const text = "Hello World! I am";
	const typingElement = document.getElementById("typing-text");
	const typingDelay = 250;

	typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
	for (let i = 0; i < text.length; i++) {
		setTimeout(() => {
			typingElement.textContent += text.charAt(i);
		}, delay * i);
	}
}

// REC counter
function updateCounter() {
	let h = new Date().getHours();
	let m = new Date().getMinutes();
	let s = new Date().getSeconds();

	h = h < 10 ? "0" + h : h;
	m = m < 10 ? "0" + m : m;
	s = s < 10 ? "0" + s : s;

	hourEl.innerText = h;
	minuteEl.innerText = m;
	secondEl.innerText = s;
	setTimeout(() => {
		updateCounter();
	}, 1000);
}

updateCounter();

// Testimonial Slider Indicator button functionality
let isActive = false;
for (let i = 0; i < indicatorButtons.length; i++) {
	indicatorButtons[i].addEventListener("click", function () {
		for (let j = 0; j < indicatorButtons.length; j++) {
			indicatorButtons[j].classList.remove("active");
			testimonialCards[j].style.opacity = "0";
		}
		isActive = true;
		if (isActive) {
			indicatorButtons[i].classList.add("active");
			testimonialCards[i].style.opacity = "100%";
		}
	});
}
