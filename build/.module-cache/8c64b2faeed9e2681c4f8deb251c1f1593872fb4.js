/** @jsx React.DOM */
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*new game button*/
  	function newGame() {
  		$('.new').on('click', function() {
  			var userGuess = $('#userGuess').val();
  			console.log(userGuess);
  		})
  	};
  	newGame();
  	/*feedback to user*/
  	//var to take user input
  	//var userGuess = $('#userGuess').val();
  	//console.log(userGuess);

});

var theGame = react.createClass({
	getinitialState: function() {
		return {number: 12};
	},

	render: function() {
				React.DOM.section({className: "game"}, 
					
					React.DOM.h2({id: "feedback"}, "Make your Guess!"), 

					React.DOM.form(null, 
						React.DOM.input({type: "text", name: "userGuess", id: "userGuess", className: "text", maxlength: "3", autocomplete: "off", placeholder: "Enter your Guess", required: true}), 
		      			React.DOM.input({type: "submit", id: "guessButton", className: "button", name: "submit", value: "Guess"})
					), 
					
		      		React.DOM.p(null, "Guess #", React.DOM.span({id: "count"}, "0"), "!"), 
					
					React.DOM.ul({id: "guessList", className: "guessBox clearfix"}

					)

				)
	}
});

React.renderComponent(
  theGame(null),
  document.getElementById('content')
);