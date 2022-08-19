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
		themeButton.innerHTML = '<ion-icon name="moon-outline"></ion-icon>';
	} else {
		root.style.setProperty("--background-color", "#1a1a1a");
		root.style.setProperty("--text-color", "#fff");
		root.style.setProperty(
			"--bg-shapes-color",
			`invert(100%) sepia(55%) saturate(0%) hue-rotate(143deg)
			brightness(109%) contrast(101%)`
		);
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
