
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
  	var userGuess = $('#userGuess').val();


  	/*new game button*/
  	function newGame() {
  			

  		$('.new').on('click', function() {
  			//generate the random number
  			var secretNum = Math.floor(Math.random() * (100 - 1));
  			console.log(userGuess);
  			//set input field to empty
  			//$('#userGuess').val('');
  			
  		});
  	};

  	newGame();
  	/*feedback to user*/
  	//var to take user input
  	//var userGuess = $('#userGuess').val();
  	//console.log(userGuess);

});