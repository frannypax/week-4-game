

$(document).ready(function(){
	//creating an object containg game characters

	var character={
		"obiWan":{
			name:"Obi-Wan Kenobi",
			health:120,
			attackPower:8,
			imageUrl: "assets/images/obi.jpg",
			counterAttack:15
		},
		"lukeSky":{
			name:"Luke Skywalker",
			health:100,
			attackPower:14,
			imageUrl: "assets/images/luke.jpg",
			counterAttack:5
		},
		"darthS":{
			name:"Darth Sidious",
			health:150,
			attackPower:8,
			imageUrl: "assets/images/darthSidious.jpg",
			counterAttack:20
		},
		"darthM":{
			name:"Darth Maul",
			health:180,
			attackPower:7,
			imageUrl: "assets/images/darthSidious.jpg",
			counterAttack:20
		},

	};

	console.log(character.obiWan.name);

	var myPlayer;
	var myOpponent;
	var opponents;
	var attackResult;
	var counterAttactResult = 1;
	var killCount = 0;

});