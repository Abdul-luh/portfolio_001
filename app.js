const hamburger = document.querySelector("#hamburger");
const mobileMenu = document.querySelector("#mobileMenu");
const header = document.querySelector("header");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	mobileMenu.classList.toggle("active");
});
