
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	//things to do for new game
  	//-reset guess field
  	//-reset guess count
  	//-focus guess field
  	//-generate new #

  	//
  	//GLOBALS
  	//

  	//the # of guesses
  	var guessCount = 0;

  	//reset guess field
  	//set input field to empty
  	function resetGuess() {
  		$('#userGuess').val('');
  	}

  	//generete the secret #
  	function secretNum() {
  		randomNum = Math.floor(Math.random() * (100 - 1));
  		console.log(randomNum + " is the number you web developing cheater");
  		return randomNum;
  	}

  	/*new game button*/
  	function newGame() {
  		secretNum();
  		resetGuess();
  	}

  	//
  	//EVENTS
  	//

  	/*feedback to users*/
  	$('#guessButton').on('click', function(e) {
  		//prevent the default submit behavior
  		e.preventDefault();
  		//the user guess
  		var userGuess = +$('#userGuess').val();
  		console.log(userGuess);
  		//unit test
  		//console.log(secretNum);
  		if(userGuess < 1 || userGuess > 100 || userGuess % 1 !== 0) {
  			$('#feedback').text('Please enter a whole # between 1 and 100');
  		}
  		else if(userGuess < randomNum) {
  			//console.log('too low');
  			$('#feedback').text('too low');
  			return;
  		}
  		else if(userGuess > randomNum) {
  			$('#feedback').text('too high');
  			return;
  		}
  		else {
  			$('#feedback').text('correct!');
  		}
  	});

  	$('#guessButton').onclick = guessCounter;

  	var guessCounter = function() {
  		guessCount +=1;
  		$('#count').text(guessCount);
  		$('#userGuess').focus();
  	}

  	//start new game on initial load
  	newGame();

  	//new game button function
  	$('.new').on('click', function() {
  		secretNum();
  		resetGuess();
  		
  	});
});