"use strict";

const cats = require("./cats");

const createDomString = (catz) => {
	let catString = "";
    for(let i=0; i<catz.length; i++){
        let newCat = "";
        newCat += `<div class="cat-card col-md-3">`;
		newCat +=	  `<div class="image-container">`;
		newCat +=	    `<img src="${catz[i].imageUrl}">`;
		newCat +=	`</div>`;
		newCat +=	  `<div class="description-container">`;
		newCat +=	    `<h3> ${catz[i].name} </h3>`;
		newCat +=	    `<p> Color: ${catz[i].color} </p>`;
		newCat +=	    `<p> Skills: ${catz[i].specialSkill} </p>`;


		if(`${catz[i].numberOfToes}` <= 10){
		newCat += `<p class="disabled-kitty"> Toes: ${catz[i].numberOfToes} </p>`;
		} else {
			newCat += `<p class="disabled-cat"> Toes: ${catz[i].numberOfToes} </p>`;
		}
	
		newCat +=	  `</div>`;
		newCat +=	`</div>`;

		catString += newCat;
	}
        
    printToDom(catString);
};

const printToDom = (strang) => {
	$("#catsHolder").html(strang);
};

module.exports = {createDomString};
