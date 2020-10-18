// npm installed modules
const express = require("express");
const bodyParser = require("body-parser");

// Custom modules
const date = require(__dirname + "/date.js");

const app = express();

app.use(express.static("public"));

let nItem = [
	"Bazic item",
	"Food"
];

// Body-Parser module init
app.use(bodyParser.urlencoded({extended: true}));

// Using EJS templates
app.set("view engine", "ejs");

app.get("/", (req, res) =>{

	let day = date();

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


// Start listening on process port for horoku
app.listen(process.env.PORT, () => {
	console.log("Server start listen on port " + process.env.PORT);
});
