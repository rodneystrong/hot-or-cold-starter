
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	//the user guess
  	var userGuess = +$('#userGuess').val();
  	//the secret number
  	var secretNum = Math.floor(Math.random() * (100 - 1));;

  	var guessCount = 0;


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
  	function guessFeedback() {
  		$('#guessButton').on('click', function(e) {
  			//prevent the default submit behavior
  			e.preventDefault()
  			//unit test
  			//console.log(secretNum);
  			if(userGuess < secretNum) {
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
  	}

  		$('#guessButton').on('click', function() {
  			guessCount += 1;
  			//unit test
  			//console.log(guessCount);
  			$('#count').text(guessCount);
  			$('#userGuess').focus();
  		});

  	newGame();
  	guessFeedback();
  	/*feedback to user*/
  	//var to take user input
  	//console.log(userGuess);

});