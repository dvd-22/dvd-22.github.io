const theme = document.querySelector(".theme");
const root = document.documentElement;
const typer = document.querySelector(".typer");

function themeChange() {
	if (theme.classList.contains("dark")) {
		root.style.setProperty("--background-color", "#fff");
		root.style.setProperty("--text-color", "#000");
		theme.innerHTML = '<ion-icon name="moon-outline"></ion-icon>';
		theme.classList.remove("dark");
	} else {
		root.style.setProperty("--background-color", "#1a1a1a");
		root.style.setProperty("--text-color", "#fff");
		theme.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';
		theme.classList.add("dark");
	}
}

theme.addEventListener("click", themeChange);
