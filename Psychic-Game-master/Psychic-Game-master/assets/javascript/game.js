var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		var letterChosen = [];
		var userGuess = [];
		var computerGuess= [];
		var wins = 0;
		var losses = 0;
		var guessesLeft = 9;
		var guessesReset = "";

		// pulls a random variable from the options array and stores it in a new variable called computerGuess
		computerGuess = options[Math.floor(Math.random()*options.length)]; 


		// function that will occur upon pressing a key
			document.onkeyup = function() {

			var reset = function() {
				// reset guesses left counter
				guessesLeft = 9;
				// clear the value in the yourGuesses field --- NOT FUNCTIONING
				letterChosen = [];
				userGuess = [];
				// document.write(letterChosen());
				// pull a new value from the options array to computerGuess variable
				computerGuess = options[Math.floor(Math.random()*options.length)]; 
			}


			// captures key pressed in the form of a string and stores it in a new variable called userGuess 
			userGuess = String.fromCharCode(event.keyCode).toLowerCase();

					if (userGuess == computerGuess) {
						wins++;
						alert("The correct choice was " + " '" + userGuess + "'" + "!" + " You win!");
						reset();
						letterChosen = [];

						// var computerGuess = options[Math.floor(Math.random()*options.length)];

					} else {
						guessesLeft--;

					}

					if (guessesLeft === 0) {
						losses ++;	
						alert("You lose. Loser.");
						reset();
			
					}	

			// pushes userGuess values into the empty array letterChosen
			userGuess = event.key;
			letterChosen.push(userGuess);


			// Debugging
				console.log(computerGuess);
				console.log(userGuess);


		////// HTML /////////////////////////////////////////////////////////


		document.getElementById("wrong-guesses").innerHTML = letterChosen.join(' ');
		document.getElementById("guessesLeft").innerHTML = guessesLeft;
		document.getElementById("wins").innerHTML = wins;
		document.getElementById("losses").innerHTML = losses;

			// // Creates a variable called html that will embed the score on the page upon activating wins, losses, and ties
			// var html ="<p><h1>The Psychic Game</h1></p>" +
			// "<p><h2>Guess what letter I am thinking of</h2></p>" +
			// "<p>wins:  " + wins + "</p>" +
			// "<p>losses: " + losses + "</p>" +
			// "<p>guesses left: " + guessesLeft + "</p>" +
			// "<p>your guesses: " + letterChosen.join('  ') + "</p>";

			// document.querySelector('#game').innerHTML = html;
			// // targets the div "game" that we put the original paragraph inside of in order to display the html
			// // every time the user presses a key, determine a win, loss, or tie, incriment these variables as needed, then update this html variable with the correct values. 
			// // Target the div "game" and replace all the html inside and with this new variable 'html'

		}



