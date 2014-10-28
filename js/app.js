
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	//the secret number
  	var secretNum = Math.floor(Math.random() * (100 - 1));;

  	var guessCount = 0;

  	//things to do for new game
  	//-reset guess field
  	//-reset guess count
  	//-focus guess field
  	//-generate new #
  	//-

  	/*new game button*/
  	function newGame() {
  			
  		//new game button function
  		$('.new').on('click', function() {
  			//generate the random number
  			secretNum = Math.floor(Math.random() * (100 - 1));
  			//unit test
  			console.log(secretNum);

  			//set input field to empty
  			//$('#userGuess').val('');
  			
  		});
  	}

  	/*feedback to users*/
  	$('#guessButton').on('click', function(e) {
  		//prevent the default submit behavior
  		e.preventDefault()
  		//the user guess
  		var userGuess = +$('#userGuess').val();
  		console.log(userGuess);
  		//unit test
  		//console.log(secretNum);
  		if(userGuess < 1 || userGuess > 100 || userGuess % 1 !== 0) {
  			$('#feedback').text('Please enter a whole # between 1 and 100');
  		}
  		else if(userGuess < secretNum) {
  			//console.log('too low');
  			$('#feedback').text('too low');
  			return;
  		}
  		else if(userGuess > secretNum) {
  			$('#feedback').text('too high');
  			return;
  		}
  		else {
  			$('#feedback').text('correct!');
  		}
  	});

  	$('#guessButton').on('click', function() {
  		guessCount += 1;
  		//unit test
  		//console.log(guessCount);
  		$('#count').text(guessCount);
  		$('#userGuess').focus();
  	});

  	newGame();
  	/*feedback to user*/
  	//var to take user input
  	//console.log(userGuess);

});