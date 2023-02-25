const hamburger = document.querySelector("#hamburger");
const mobileMenu = document.querySelector("#mobileMenu");
const header = document.querySelector("header");
const ul_links = document.querySelectorAll("#header .nav-list ul a");

const toggleHandler = () => {
	hamburger.classList.toggle("active");
	mobileMenu.classList.toggle("active");
};

// function toggleHandler() {
// 	hamburger.classList.toggle("active");
// 	mobileMenu.classList.toggle("active");
// }

hamburger.addEventListener("click", toggleHandler);

ul_links.forEach((links) => {
	links.addEventListener("click", toggleHandler);
});

document.addEventListener("scroll", () => {
	let scrollPosition = window.scrollY;
	if (scrollPosition > 270) {
		header.style.backgroundColor = "grey";
	} else {
		header.style.backgroundColor = "transparent";
	}
});
