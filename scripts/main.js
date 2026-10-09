const mobileNav = document.querySelector("#mobile-nav");
const mainMenu = document.querySelector("#main-menu");
const menuIcon = mobileNav.querySelector("i");

mobileNav.addEventListener("click", () => {
	const isOpen = mainMenu.classList.toggle("is-open");

	mobileNav.setAttribute("aria-expanded", isOpen);
	menuIcon.classList.toggle("fa-bars", !isOpen);
	menuIcon.classList.toggle("fa-xmark", isOpen);
});
