let footer = `
<footer>
<a
	href="http://github.com/dvd-22/david"
	target="_blank"
	rel="noopener noreferrer"
	id="coded"
	>&lt;&#47;&gt;</a
>
&VeryThinSpace; with &#10084;&#65039; by &VeryThinSpace;
<a
	href="http://github.com/dvd-22"
	target="_blank"
	rel="noopener noreferrer"
	>&#128192;</a
>
</footer>`;
document.body.insertAdjacentHTML("beforeend", footer);

const themeButton = document.querySelector(".theme");
const root = document.documentElement;

function loadTheme() {
	let theme = localStorage.getItem("theme");
	if (theme === "light") {
		root.style.setProperty("--background-color", "#fff");
		root.style.setProperty("--text-color", "#000");
		root.style.setProperty(
			"--bg-shapes-color",
			`invert(0%) sepia(100%) saturate(0%) hue-rotate(322deg)
		brightness(100%) contrast(100%)`
		);
		root.style.setProperty("--bg-shapes-opacity", "0.2");
		themeButton.innerHTML = '<i data-feather="moon"></i>';
	} else {
		root.style.setProperty("--background-color", "#1a1a1a");
		root.style.setProperty("--text-color", "#fff");
		root.style.setProperty(
			"--bg-shapes-color",
			`invert(100%) sepia(55%) saturate(0%) hue-rotate(143deg)
			brightness(109%) contrast(101%)`
		);
		root.style.setProperty("--bg-shapes-opacity", "0.1");
		themeButton.innerHTML = '<i data-feather="sun"></i>';
	}
}

themeButton.addEventListener("click", () => {
	let theme = localStorage.getItem("theme");
	theme === "light"
		? localStorage.setItem("theme", "dark")
		: localStorage.setItem("theme", "light");

	loadTheme();
	feather.replace();
});

loadTheme();
feather.replace();

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}
