
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
  	//-reset feedback

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

  		guessCount +=1;
  		$('#count').text(guessCount);
  		$('#userGuess').focus().select();

  		//append userGuess to the ul#guessList below
  		var guessList = function() {
  			$('#guessList').append("<li>" + userGuess + "</li>");
  		};

  		//Make the difference between userGuess and randonNum a positive value
  		var theDifference = Math.abs(userGuess - randomNum);

  		//unit test
  		//console.log(secretNum);
  		if(userGuess < 1 || userGuess > 100 || userGuess % 1 !== 0) {
  			$('#feedback').text('Please enter a whole # between 1 and 100');
  		}
  		else if(theDifference >= 40) {
  			$('#feedback').text('Cold cold really cold');
  			guessList();
  			$('ul#guessList li').last().css('background-color', '#1a4e95');
  			$('#feedback').css('background-color', '#1a4e95');
  			return;
  		}
  		else if(theDifference >= 20 && theDifference < 40) {
  			$('#feedback').text('Just cold');
  			guessList();
  			$('ul#guessList li').last().css('background-color', '#1a4e95');
  			$('#feedback').css('background-color', '#1a4e95');
  			return;
  		}
  		else if(theDifference >= 10 &&  theDifference < 20) {
  			$('#feedback').text('Oh man heating up!');
  			guessList();
  			$('ul#guessList li').last().css('background-color', '#cc324b');
  			$('#feedback').css('background-color', '#cc324b');
  			return;
  		}
  		else if(theDifference >= 1 &&  theDifference < 10) {
  			$('#feedback').text('OH MAN you\'re less than 9 away!');
  			guessList();
  			$('ul#guessList li').last().css('background-color', '#cc324b');
  			$('#feedback').css('background-color', '#cc324b');
  			return;
  		}
  		else {
  			$('#feedback').text('WOW YOU GOT IT!! Finally jeeez..');
  		}

  	});

  	//start new game on initial load
  	newGame();

  	//new game button function
  	$('.new').on('click', function() {
  		newGame();
  		
  	});
});