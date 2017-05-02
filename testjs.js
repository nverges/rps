
var userGuess;
var numbers = ["r", "p", "s"];
var wins = 0;
var losses = 0;
var ties = 0;

	

	// create click events
	document.onkeyup = function() {

		//click event for userguess
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	//debugging
	console.log("u: " + userGuess);

		//click event for computerGuess taken from animals array
		var computerGuess = numbers[Math.floor(Math.random()*numbers.length)];
	//debugging
	console.log("comp: " + computerGuess);


		//if statements
		// if userGuess is r,p, or s

		if (userGuess == 'r' || userGuess == "p" || userGuess == 's') {

			// compare results with computerGuess
			if (userGuess=='r' && computerGuess=='s') {
				wins++;
				var letter;
				userGuess = letter.replace("r", "rock");
				console.log(wins);
			}

			if (userGuess=='r' && computerGuess=='p') {
				losses++;
				console.log(losses);
			}

			if (userGuess=='p' && computerGuess=='r') {
				wins++;
				console.log(wins);
			}

			if (userGuess=='p' && computerGuess=='s') {
				losses++;
				console.log(losses);
			}

			if (userGuess=='s' && computerGuess=='p') {
				wins++;
				console.log(wins);
			}

			if (userGuess=='s' && computerGuess=='r') {
				losses++;
				console.log(losses);
			}

			if (userGuess === computerGuess) {
				ties ++;
				console.log(ties);
			}


			if (wins) {
				console.log ("wins: " + wins);
			}

			if (losses) {
				console.log ("losses: " + losses);
			}

			if (ties) {
				console.log("ties: " + ties);
			}

		  // otherwise, display this alert
		} else {
			alert("please choose r, p, or s");
		}

		// adjust strings for html
		// var str = "p";
		// userGuess = str.replace("p", "paper");



		






	// display to HTML

	document.getElementById("your-guess").innerHTML = ("Your Guess: " + userGuess);
	document.getElementById("computer-guess").innerHTML = ("Computer's Guess: " + computerGuess);
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("losses").innerHTML = losses;
	document.getElementById("ties").innerHTML = ties;

	// document.getElementById("guessesLeft").innerHTML = guessesLeft;
	// document.getElementById("wins").innerHTML = wins;
	// document.getElementById("losses").innerHTML = losses;



	}

	
