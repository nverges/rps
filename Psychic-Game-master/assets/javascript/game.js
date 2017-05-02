var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		var letterChosen = [];
		var userGuess = [];
		var wins = 0;
		var losses = 0;
		var guessesLeft = 9;


		var computerGuess = options[Math.floor(Math.random()*options.length)];
	
		
		document.onkeyup = function() {
			userGuess = String.fromCharCode(event.keyCode).toLowerCase();


					if (userGuess == computerGuess) {
						wins++;
						alert("You win!");
						guessesLeft= 9;


					} else {
						guessesLeft--;
					}

					if (guessesLeft === 0) {
						alert("You lose");
						losses ++;	
						// wins= 0;
						guessesLeft= 9;
					}	
	
			  

				console.log(computerGuess);
				console.log(userGuess);



			// Creates a variable called html that will embed the score on the page upon activating wins, losses, and ties
			var html ="<p><h1>The Psychic Game</h1></p>" +
			"<p><h2>Guess what letter I am thinking of</h2></p>" +
			"<p>wins:  " + wins + "</p>" +
			"<p>losses: " + losses + "</p>" +
			"<p>guesses left: " + guessesLeft + "</p>" +
			"<p>your guesses: " + userGuess + "</p>";

			document.querySelector('#game').innerHTML = html;
			// targets the div "game" that we put the original paragraph inside of in order to display the html
			// every time the user presses a key, determine a win, loss, or tie, incriment these variables as needed, then update this html variable with the correct values. 
			// Target the div "game" and replace all the html inside and with this new variable 'html'

		}
