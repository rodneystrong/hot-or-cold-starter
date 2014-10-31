var hotColdApp = {
	guessCount: 0,
	secretNum: null
};

$(document).ready(function () {
	$(".what, a.close").click(overlayController);
	$('.hot-cold-form').on('submit', addGuess);
	$('.new').on('click', newGame);
	newGame();
});

function overlayController() {
	var fade = $(this).data('fade');
	$(".overlay")[fade](1000);
}

function newGame() {
	hotColdApp.secretNum = generateNum();
	hotColdApp.guessCount = 0;
	resetPage();
}

function generateNum() {
	return Math.floor(Math.random() * (100 - 1));
}

function resetPage() {
	$('#userGuess').val('');
	$('#count').text(hotColdApp.guessCount);
	$('#guessList').empty();
	$('#feedback').text('Make your Guess!').removeClass('cold hot');
}

function addGuess(e) {
	e.preventDefault();
	var guess = parseFloat($('#userGuess').val(), 10);
	$('#count').text(hotColdApp.guessCount += 1);
	$('#userGuess').focus().select();
	checkGuess(guess);
}

function checkGuess(guess) {
	var theDifference = Math.abs(guess - hotColdApp.secretNum);
	if (guess < 1 || guess > 100 || guess % 1 !== 0) {
		alert('Please enter a whole # between 1 and 100');
	}
	else if (theDifference >= 40) {
		feedback(guess, 'Cold cold really cold', 'cold');
	}
	else if (theDifference >= 20 && theDifference < 40) {
		feedback(guess, 'Just cold', 'cold');
	}
	else if (theDifference >= 10 && theDifference < 20) {
		feedback(guess, 'Oh man heating up!', 'hot');
	}
	else if (theDifference >= 1 && theDifference < 10) {
		feedback(guess, 'OH MAN you\'re less than 9 away!', 'hot');
	}
	else {
		feedback(guess, 'WOW YOU GOT IT!! Finally jeeez..', 'correct');
	}
}

function feedback(guess, str, klass) {
	$('#feedback').text(str).removeClass('cold hot').addClass(klass);
	$('#guessList').append("<li class="+ klass +">" + guess + "</li>");
}
