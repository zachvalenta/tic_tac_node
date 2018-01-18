'use strict';

var winning_combos = [
	[1,2,3],
	[4,5,6],
	[7,8,9]
];
var X_combo = [];
var O_combo = [];

var turn = 0;
var winning_combo_check_X = function(){
	
	console.log("X current combo: " + JSON.stringify(X_combo));
	console.log("winning combo: " + JSON.stringify(winning_combos[0]));
	
	var won = JSON.stringify(winning_combos[0]) === JSON.stringify(X_combo);
	console.log("are they equal? " + won);
	
	return JSON.stringify(winning_combos[0]) === JSON.stringify(X_combo);
}

var winning_combo_check_O = function(){
	
	console.log("O current combo: " + JSON.stringify(O_combo));
	console.log("winning combo: " + JSON.stringify(winning_combos[0]));
	
	console.log("testing")
	var won = JSON.stringify(winning_combos[0]) === JSON.stringify(O_combo);
	console.log("123")

	console.log("are they equal? " + won);

	return JSON.stringify(winning_combos[0]) === JSON.stringify(O_combo);
}

var play_game = function(input){

	if(turn%2 === 0){
    	console.log(`X input: ${input}`);
		play_X(input);

    }
    else {
    	console.log(`O input: ${input}`);
    	play_O(input);
    }

    turn++;
}

var game_over = function(){
	console.log("game over")
	process.exit();
}

var play_X = function(i){
	X_combo.push(parseInt(i));
	if(winning_combo_check_X()){game_over();}
}

var play_O = function(i){
	
	O_combo.push(parseInt(i));
	console.log("O current combo: " + JSON.stringify(O_combo));
	console.log(JSON.stringify(winning_combos[0]));

	if(winning_combo_check_O()){game_over();}
}

var stdin = process.openStdin();
stdin.addListener("data", function(inputObj) {
	play_game(inputObj.toString().trim());
});


var board_positions = " 1 2 3 \n 4 5 6 \n 7 8 9"; 

console.log("board positions: " + board_positions);

//https://stackoverflow.com/a/5266239
//process.exit();

// note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then trim()

    // http://stackabuse.com/command-line-arguments-in-node-js/
// https://stackoverflow.com/a/4351548

// for (let j = 0; j < process.argv.length; j++) {  
//     console.log(j + ' -> ' + (process.argv[j]));
// }

// https://stackoverflow.com/a/8129748