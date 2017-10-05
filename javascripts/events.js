"use strict";
const cats = require("./cats");
//submit user input on click and enter key press

let catNumber = $("#catNumber").val();

$("#catNumber").keypress((event) => {
	if(event.key === "Enter"){
		console.log("it works", event);
		cats.catsLoad(catNumber);
		console.log("cat number", catNumber);
	}
});

$("#goCat").click(() => {
	console.log("get cats button click", event);
	cats.catsLoad(catNumber);
});

module.exports = {};