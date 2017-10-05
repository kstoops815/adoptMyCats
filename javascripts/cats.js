"use strict";

let cats = [];

const catsLoad = (catValue) => {$.ajax({
	method: "GET",
	url: "https://random-dogs-api.herokuapp.com/cats/${catValue}" }).done((data) => {
	console.log(data);
	cats = data.cats;
// 	$("body").css("background-image", `url(${data.url})`);
// 	imageData = data;
// }).fail((error) => {
// 	console.log(error);
});
};

// const getPlanets = () => {
// 	return planets;
// };

// const getImageData = () => {
// 	return imageData;

module.exports = {catsLoad};