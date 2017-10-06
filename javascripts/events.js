"use strict";
const cats = require("./cats");
const dom = require("./dom");
//submit user input on click and enter key press



$("#catNumber").keypress((event) => {
	if(event.key === "Enter"){
		let catNumber = $("#catNumber").val();
		//console.log("it works", event);
		cats.catsLoad(catNumber);
		$(".original").hide();
		$("#deleteDisabled").removeClass("hidden");
	}
});

$("#goCat").click((event) => {
		let catNumber = $("#catNumber").val();
		//console.log("it works", event);
		cats.catsLoad(catNumber);
		$(".original").hide();
	});

$("#deleteDisabled").click((event) => {
	$(".disabled-kitty").parentsUntil("#catsHolder").remove();
});





// $("#goCat").click(() => {
// 	console.log("get cats button click", event);
// 	cats.catsLoad(catNumber);
// });

module.exports = {};