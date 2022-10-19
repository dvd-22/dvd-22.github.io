//Navbar

var navbar = ` 
<header>
	<nav class="navbar">
		<a href="./index.html" class="nav-logo">&ltD&#47&gt</a>
		<ul class="nav-menu">
			<li class="nav-item">
				<a href="./" class="nav-link">aboutme</a>
			</li>
			<li class="nav-item">
				<a href="./projects" class="nav-link">projects</a>
			</li>
			<li class="nav-item">
				<a href="./contact" class="nav-link">contact</a>
			</li>
			<li class="nav-item">
				<a href="./blog" class="nav-link">blog</a>
			</li>
		</ul>
		<button type="button" title="theme" class="theme"><ion-icon name="sunny-outline"></ion-icon></button>

		<button type="button" title="hamburger" class="hamburger">
			<span class="bar"></span>
			<span class="bar"></span>
			<span class="bar"></span>
		</button>
	</nav>
</header>
`;
document.body.insertAdjacentHTML("afterbegin", navbar);

// Theme button

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
		themeButton.innerHTML = '<ion-icon name="moon-outline"></ion-icon>';
	} else {
		root.style.setProperty("--background-color", "#1a1a1a");
		root.style.setProperty("--text-color", "#fff");
		root.style.setProperty(
			"--bg-shapes-color",
			`invert(100%) sepia(55%) saturate(0%) hue-rotate(143deg)
			brightness(109%) contrast(101%)`
		);
		root.style.setProperty("--bg-shapes-opacity", "0.1");
		themeButton.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';
	}
}

themeButton.addEventListener("click", () => {
	let theme = localStorage.getItem("theme");
	theme === "light"
		? localStorage.setItem("theme", "dark")
		: localStorage.setItem("theme", "light");

	loadTheme();
});

loadTheme();

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
