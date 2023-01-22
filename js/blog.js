const parent = document.getElementsByClassName("blogposts");

let list = [
	{
		title: "Tools List",
		type: "Resource",
		path: "./tools.html",
	},
	{
		title: "Horizonte de Eventos",
		type: "Tale",
		path: "./horizonte-de-eventos.html",
	},
	// {
	// 	title: "Hombre solitario",
	// 	type: "Tale",
	// 	path: "./hombre-solitario.html",
	// },
	{
		title: "Carta a la pared",
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

		let div = document.createElement("div");
		div.className = "post-type";
		div.innerText = list[i].type;
		li.appendChild(a);
		li.appendChild(div);
		parent[0].appendChild(li);
	}
};

if (parent.length > 0) {
	createBlogLinks();
}
