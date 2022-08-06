const themeButton = document.querySelector(".theme");
const root = document.documentElement;

themeButton.addEventListener("click", () => {
	let theme = localStorage.getItem("theme");
	if (theme === "light") {
		root.style.setProperty("--background-color", "#1a1a1a");
		root.style.setProperty("--text-color", "#fff");
		themeButton.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';
		localStorage.setItem("theme", "dark");
	} else {
		root.style.setProperty("--background-color", "#fff");
		root.style.setProperty("--text-color", "#000");
		themeButton.innerHTML = '<ion-icon name="moon-outline"></ion-icon>';
		localStorage.setItem("theme", "light");
	}
});

function loadTheme() {
	let theme = localStorage.getItem("theme");
	if (theme === "light") {
		root.style.setProperty("--background-color", "#fff");
		root.style.setProperty("--text-color", "#000");
		themeButton.innerHTML = '<ion-icon name="moon-outline"></ion-icon>';
	} else {
		root.style.setProperty("--background-color", "#1a1a1a");
		root.style.setProperty("--text-color", "#fff");
		themeButton.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';
	}
}

loadTheme();
