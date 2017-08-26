
$(document).ready(function(){

//global variables	
var wins=0;
var losses=0;
var totalScore=0;
var computerNumber=0;

var crystals = {
	"red":{
		imageUrl:"assets/images/red.png",
		points:0
	},

	"yellow":{
		imageUrl:"assets/images/yellow.png",
		points:0
	},

	"green":{
		imageUrl:"assets/images/green.png",
		points:0
	},

	"blue":{
		imageUrl:"assets/images/blue.png",
		points:0
	}
};

console.log(crystals.red.points);

//The init function will display all the crystals and set the "wins", "losses", and "Total Score" to 0
//It will also display the randomly generated computer "Number"
function init(){

	$("#wins").html(wins);
	$("#losses").html(losses);
	$("#totalScore").html(totalScore);
	
	//Random number for the red crystal will be generated between 1 and 5
	crystals.red.points = Math.round(Math.random() * (5 - 1)) + 1
	$("#red").append("<img src= " + crystals.red.imageUrl + ">");

	crystals.yellow.points = Math.round(Math.random() * (15 - 10)) + 10
	$("#yellow").append("<img src= " + crystals.yellow.imageUrl + ">");

	crystals.green.points = Math.round(Math.random() * (20 - 15)) + 15
	$("#green").append("<img src= " + crystals.green.imageUrl + ">");

	crystals.blue.points = Math.round(Math.random() * (2 - 1)) + 1
	$("#blue").append("<img src= " + crystals.blue.imageUrl + ">");

	
	computerNumber = Math.round(Math.random() * (60 - 40)) + 40
	$("#computerNumber").html(computerNumber);

}
init()

$("#red").on("click", function(){

	totalScore = totalScore + crystals.red.points;
	compareNumbers();
	$("#totalScore").html(totalScore);
	
})

$("#yellow").on("click", function(){
	totalScore = totalScore + crystals.yellow.points;
	compareNumbers();
	$("#totalScore").html(totalScore);
})

$("#green").on("click", function(){
	totalScore = totalScore + crystals.green.points;
	compareNumbers();
	$("#totalScore").html(totalScore);
})

$("#blue").on("click", function(){
	totalScore = totalScore + crystals.blue.points;
	compareNumbers();
	$("#totalScore").html(totalScore);	
})

//This function will compare the sum of the points with the computerNumber and to see if they're the same.
//wins increase by 1 if they're the same else, losses increase by 1. Then then endGame function is called
function compareNumbers(){

	if (totalScore == computerNumber){
		alert("Good Job, you added right");
		wins++;
		$("#wins").html(wins);
		endGame();
	}
	if(totalScore > computerNumber){
		alert("Oops!! your additions went over " + computerNumber + ".");	
		losses++
		$("#losses").html(losses);
		endGame();
	}
}

//this will reset the coputer-generated number as well as the values assigned to the crystals
function endGame(){
	totalScore=0;
	$("#totalScore").html(totalScore);

	computerNumber = Math.round(Math.random() * (60 - 40)) + 40;
	$("#computerNumber").html(computerNumber);

	crystals.red.points = Math.round(Math.random() * (5 - 1)) + 1;
	crystals.yellow.points = Math.round(Math.random() * (15 - 10)) + 10;
	crystals.green.points = Math.round(Math.random() * (20 - 15)) + 1;
	crystals.blue.points = Math.round(Math.random() * (2 - 1)) + 1;
}



});

