
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
  			$('#userGuess').val('');
  			
  		});
  	}

  	function guessFeedback() {
  		$('#guessButton').on('click', function() {
  			//unit test
  			//console.log(secretNum);
  			if(userGuess < secretNum) {
  				console.log('too low');
  				return;
  			}
  			if(userGuess > secretNum) {
  				console.log('too high');
  				return;
  			}
  			else {
  				console.log('correct!');
  			}
  		});
  	}

  	function keepCount() {
  		$('#guessButton').on('click', function() {
  			guessCount += 1;
  			//unit test
  			//console.log(guessCount);
  			$('#count').text(guessCount);
  		});
  	}

  	newGame();
  	guessFeedback();
  	keepCount();
  	/*feedback to user*/
  	//var to take user input
  	//var userGuess = $('#userGuess').val();
  	//console.log(userGuess);

});