'use strict';

var winning_combos = [
	[1,2,3],
	[4,5,6],
	[7,8,9], 

	[1,4,7],
	[2,5,8],
	[3,6,9],
	
	[3,5,7],
	[1,5,9],  
];
var combo_user = [];
var combo_bot = [];

var turn = 0;

var winning_combo_check_user = function(){
	
	console.log("user combo: " + JSON.stringify(combo_user));

	for (var i = 0; i < winning_combos.length; i++) {
		// https://stackoverflow.com/a/9204307/6813490
		if(winning_combos[i].every((val) => combo_user.includes(val))){
			return true;
		}
	}
	turn++;
	play_game();
}

var winning_combo_check_bot = function(){
	
	console.log("bot combo: " + JSON.stringify(combo_bot));

	for (var i = 0; i < winning_combos.length; i++) {
		if(winning_combos[i].every((val) => combo_bot.includes(val))){
			return true;
		}
	}
	turn++;
}

var play_game = function(input){

	if(turn%2 === 0){
    	console.log(`\nuser input: ${input}`);
		play_user(input);

    }
    else {
    	play_bot();
    }
}

var game_over = function(){
	console.log("game over")
	process.exit();
}

var play_user = function(i){
	combo_user.push(parseInt(i));
	if(winning_combo_check_user()){
		game_over();
	}
}

var play_bot = function(){
	var bot_choice = Math.floor(Math.random() * 10);
	console.log(`\nbot input: ${bot_choice}`);
	combo_bot.push(bot_choice);
	if(winning_combo_check_bot()){
		game_over();
	}
}

var stdin = process.openStdin();
stdin.addListener("data", function(inputObj) {
	
	// https://stackoverflow.com/a/8129748/6813490
	
	// note:  d is an object, and when converted to a string it will
	// end with a linefeed.  so we (rather crudely) account for that  
	// with toString() and then trim()
	
	play_game(inputObj.toString().trim());
});


var board_positions = "\n 1 2 3 \n 4 5 6 \n 7 8 9\n"; 

console.log("board positions: " + board_positions);
