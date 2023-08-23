const parent = document.getElementsByClassName("blogposts");

let list = [
	{
		title: "Didn't make it to collegue",
		date: "Aug 23rd, 2023",
		type: "Personal",
		path: "./didnt-make-it-to-collegue.html",
	},
	{
		title: "Horizonte de Eventos",
		date: "Nov 11, 2022",
		type: "Tale",
		path: "./horizonte-de-eventos.html",
	},
	{
		title: "Tools List",
		date: "Jan 02nd, 2023",
		type: "Resource",
		path: "./tools.html",
	},
	{
		title: "Carta a la pared",
		date: "Nov 12, 2020",
		type: "Tale",
		path: "./carta-a-la-pared.html",
	},
];

const createBlogLinks = () => {
	for (let i = 0; i < list.length; i++) {
		let li = document.createElement("li");
		li.className = "blogpost clicky";
		li.id = list[i].title.toLowerCase().replace(/ /g, "-");

		let a = document.createElement("a");
		a.rel = "noopener";
		a.href = list[i].path;
		a.className = "clicky-links";
		a.innerText = list[i].title;

		let type = document.createElement("div");
		type.className = "post-type";
		type.innerText = `${list[i].date}\n${list[i].type}`;

		li.appendChild(a);
		li.appendChild(type);
		parent[0].appendChild(li);
	}
};

if (parent.length > 0) {
	createBlogLinks();
}

const DATE = document.querySelector(".date");

if (DATE) {
	console.log();
	for (let i = 0; i < list.length; i++) {
		if (list[i].path === window.location.pathname.replace(/\/blog/, ".")) {
			DATE.innerText = list[i].date;
			break;
		}
	}
}
