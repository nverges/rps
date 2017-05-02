// GLOBAL VARIABLES
////////////////////////////////////////////////////////////////////////////////////////////////////////////


// arrays and variables for holding data

//possible options
var wordOptions = ["ross","joey","chandler","rachel","monica","phoebe"];
// variable that holds selected word
var selectedWord = "";
// array that holds letters in word
var lettersinWord = []; 
// used to calculate number of letters in word
var numBlanks = 0;
// array that holds both blanks and successful guesses
var blanksAndSuccesses = []; // R _ _ _
//array that holds the incorrect letters chosen by user
var wrongLetters = [];


// game counters
var wins = 0;
var losses = 0;
var numGuesses = 9;


// FUNCTIONS
///////////////////////////////////////////////////////////////////////////////////////////////////////////


function startGame() {
	// choose a random string from the "options" array and store it in the variable selectedWord
	selectedWord = wordOptions[Math.floor(Math.random()*wordOptions.length)]; 
	// takes the random string chosen in selectedWord, splits it by letter, and stores it in lettersinWord
	lettersinWord = selectedWord.split("");
	// populates the numbBlanks array with "_" for each value in selectedWord.split
	numBlanks = lettersinWord.length;


	// RESET
	guessesLeft = 9;
	wrongLetters = [];
	blanksAndSuccesses = [];


	//populate blanks and successes with right number of blanks
	for (var i=0; i<numBlanks; i++) {
		blanksAndSuccesses.push(" ");
	}

	// POPULATE HTML
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join('_');
	document.getElementById("guessesLeft").innerHTML = guessesLeft;
	document.getElementById("winCounter").innerHTML = wins;
	document.getElementById("lossCounter").innerHTML = losses;
	// document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(' ');

	// Debugging
	console.log(selectedWord);
	console.log(lettersinWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);
}

function checkLetters(letter) {
	// check if letter exists anywhere in word
	var isLetterInWord = false;

	for (var i=0; i<numBlanks; i++) {
		if (selectedWord[i] == letter) {
			isLetterInWord = true;
		}
	}

	// check where in the word letter exists, then populate blanksAndSuccesses array
	if(isLetterInWord) {
		for (var i=0; i<numBlanks; i++) {
			if (selectedWord[i] == letter) {
				blanksAndSuccesses[i] = letter;
			}
		}
	} 

	//letter wasn't found
	else {
		wrongLetters.push(letter);
		numGuesses--;
	}

	console.log(blanksAndSuccesses);

}

function roundComplete() {
	console.log("Win Count: " + wins + " | Loss count: " + losses + " | Guesses Left: " + numGuesses);

	//update HTML in realtime
	document.getElementById("guessesLeft").innerHTML = guessesLeft;
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(' ');
	document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(' ');

	//check if user won
	if(lettersinWord.toString() == blanksAndSuccesses.toString()) {
		wins++;
		alert("You won!");

		//update HTML
		document.getElementById("winCounter").innerHTML = wins;

		startGame();
	}

	//check if user lost
	else if (numGuesses == 0) {
		losses++;
		alert("you lose");
		document.getElementById("lossCounter").innerHTML = losses;

		startGame();
	}
}


// PROCESSES
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//initiates code
startGame();

//register keyclicks
document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();
	
	//debugging
	console.log(letterGuessed);
}





