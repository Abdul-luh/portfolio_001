const hamburger = document.querySelector("#hamburger");
const mobileMenu = document.querySelector("#mobileMenu");
const header = document.querySelector("header");
const ul_links = document.querySelectorAll("#header .nav-list ul a");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	mobileMenu.classList.toggle("active");
});
ul_links.forEach((links) => {
	links.addEventListener("click", () => {
		hamburger.classList.toggle("active");
		mobileMenu.classList.toggle("active");
	});
});

document.addEventListener("scroll", () => {
	let scrollPosition = window.scrollY;
	if (scrollPosition > 270) {
		header.style.backgroundColor = "grey";
	} else {
		header.style.backgroundColor = "transparent";
	}
});
