/** @jsx React.DOM */

var theGame = React.createClass({displayName: 'theGame',
	getinitialState: function() {
		return {number: 12};
	},

	render: function() {

				return React.DOM.section({className: "game"}, 
					
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