// create an array that contains all 26 letters of the alphabet - lower case
const computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Setup some mutable variable - set wins and losses to 0, allow the user 9 
// guesses, create an empty array for the letter the user 'pressed' or selected
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterUser = [];
//var eachofLetters = null;


// Sets the computerGuess variable equal to a random choice from the computerChoice array.
// The computerGuess will be assigned the value from the random index of the
// computerChoices array.  The length is 26, so we multiply the Math.random() 
// output * the length to get an index of the array between 1 and 26
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// this function looks for the id element #guessesLeft in the DOM and
// updates this id with the varible guessesLeft (which is initially set to 9) above
function countGuessesLeft() {
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}
// this function queries the id #letter in the DOM and updates the DOM with 
// html.  Initially, the letterUser array is empty (set above), but with 
// each keypress, the new event is added to the array letterUser
function farUserGuesses() {
	document.querySelector("#letter").innerHTML = "Your Guesses so far: " + letterUser.join(' ');
}
//  We write the value of guessesLeft to the DOM - initially, this value is 
//  9.  
countGuessesLeft();

// this function will reset the variables after the the user either:
//      a. guesses the number the computer generate -or-
//      b. the user has run out of guesses
var restart = function() {
	guessesLeft = 9;
	letterUser = [];
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// When the user presses a key, it will run the following function..
document.onkeyup = function(event) {
    // decrement the guessesLeft by one
	guessesLeft--;
    // declare a variable userGuess, make it a string, get the event of the
    // key pressed and change it to lower case - in case the user has 
    // capslock 'on'
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    

	letterUser.push(userGuess);
	countGuessesLeft();
	farUserGuesses();

    if (userGuess === computerGuess){       // if the userGuess and the computerGuess
                                            // are the same ...
        wins++;                             // increment the number of times the user 
                                            // has won
        document.querySelector("#wins")     // select the id #wins and write HTML
        .innerHTML = "Wins: " + wins;       // to the webpage reflecting the number
                                            // wins
		restart();                          // run the restart function
	} 
	else if (guessesLeft === 0) {           // if the user has run out of guesses
		losses++;                           // increment the losses
        document.querySelector("#lose")     // for the id #lose
        .innerHTML = "Losses: " + losses;   // write out the number of losses
		restart();                          // run the restart function
	}
  };