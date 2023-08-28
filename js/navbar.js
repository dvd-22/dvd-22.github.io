//Navbar

let navbar = ` 
<header class="nav-wrapper">
	<nav class="navbar unselectable">
	<a href="/index.html" class="nav-logo">&lt;D&#47;&gt;</a>
		<ul class="nav-menu">
			<li class="nav-item">
				<a href="/index.html" class="nav-link">aboutme</a>
			</li>
			<li class="nav-item">
				<a href="/contact.html" class="nav-link">contact</a>
			</li>
			<li class="nav-item">
				<a href="/blog" class="nav-link">blog</a>
			</li>
			<li class="nav-item">
				<a href="/projects.html" class="nav-link">projects</a>
			</li>
		</ul>
		<button type="button" title="theme" class="theme"><i data-feather="sun"></i></button>

		<button type="button" title="hamburger" class="hamburger">
			<span class="bar"></span>
			<span class="bar"></span>
			<span class="bar"></span>
		</button>
	</nav>
</header>
`;
document.body.insertAdjacentHTML("afterbegin", navbar);

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

//const insertedFooter = document.querySelector("footer");

// window.onscroll = function () {
// 	var pageHeight = Math.max(
// 		document.body.scrollHeight,
// 		document.body.offsetHeight,
// 		document.documentElement.clientHeight,
// 		document.documentElement.scrollHeight,
// 		document.documentElement.offsetHeight
// 	);
// 	if (window.innerHeight + window.scrollY >= pageHeight - 100) {
// 		insertedFooter.style.setProperty(
// 			"background",
// 			`linear-gradient(
// 			0deg,
// 			rgba(0, 0, 0, 0.55) 43%,
// 			rgba(0, 0, 0, 0) 97%
// 		)`
// 		);
// 		insertedFooter.style.setProperty("display", "flex");
// 	} else {
// 		insertedFooter.style.setProperty("background", "rgba(0, 0, 0, 0)");
// 		insertedFooter.style.setProperty("display", "none");
// 	}
// };
