"use strict";

const dom = require("./dom");

let cats = [];



const catsLoad = (catValue) => {$.ajax({
	url: `https://random-dogs-api.herokuapp.com/cats/${catValue}`}).done((data) => {
	console.log("in cats load", data);
	cats = data.cats;
	dom.createDomString(cats);
// 	$("body").css("background-image", `url(${data.url})`);
// 	imageData = data;
	}).fail((error) => {
		console.log(error);
});
};

// const getPlanets = () => {
// 	return planets;
// };

// const getImageData = () => {
// 	return imageData;

module.exports = {catsLoad};