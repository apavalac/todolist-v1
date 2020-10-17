const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));

let nItem = [
	"Bazic item",
	"Food"
];

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", (req, res) =>{
	let today = new Date();

	let options = {
		weekday: "long",
		day: "numeric",
		month: "long"
	};

	let day = today.toLocaleDateString("en-US", options);

	res.render("index", {
		day: day,
		newListItem: nItem
	});
});

app.post("/", (req, res) => {
	nItem.push(req.body.newItem);

	console.log(nItem);

	res.redirect("/");
});

app.listen(3000, () => {
	console.log("Server start listen on port 3000");
});
