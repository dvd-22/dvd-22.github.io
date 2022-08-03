const theme = document.querySelector(".theme");
const root = document.documentElement;
const typer = document.querySelector(".typer");
const navlinks = document.querySelectorAll(".nav-link");

navlinks.forEach((link) => {
	link.addEventListener("click", () => {
		navlinks.forEach((link) => {
			link.classList.remove("active");
		});
		link.classList.add("active");
	});
});

theme.addEventListener("click", () => {
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
});
