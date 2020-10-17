const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) =>{
	let today = new Date();

	res.render("index", {test: "test"});
});

app.listen(3000, () => {
	console.log("Server start listen on port 3000");
});