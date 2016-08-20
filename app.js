// Define moves inside an Array in the order of 0 > 1 > 2 > 0
var _moves = ['Rock', 'Scissors', 'Paper'];
var _movesLength = _moves.length;
var comMovePos1;
var comMovePos2;
var $result = document.getElementById('result');

function genRandom() {
	'use strict';
	return Math.floor(Math.random() * _movesLength);
}

function compMoves() {
	'use strict';
	if (comMovePos1 === comMovePos2) {
		$result.innerHTML = 'Draw';
	} else if ((comMovePos1 - comMovePos2) === -2) {
		$result.innerHTML = 'Player Two Won!';
	} else if ((comMovePos1 - comMovePos2) % 2 === 0 || (comMovePos1 - comMovePos2) % 2 === -1) {
		$result.innerHTML = 'Player One Won!';
	} else {
		$result.innerHTML = 'Player Two Won!';
	}
	//console.log(comMovePos1, comMovePos2);
}

// Computer player 1
document.getElementById('player1').onclick = function() {
	'use strict';
	comMovePos1 = genRandom();
	document.getElementById('player1Move').innerHTML = _moves[comMovePos1];
	if (comMovePos2 !== null && comMovePos2 !== undefined) {
		compMoves();
	}
};

//Computer player 2
document.getElementById('player2').onclick = function() {
	'use strict';
	comMovePos2 = genRandom();
	document.getElementById('player2Move').innerHTML = _moves[comMovePos2];
	if (comMovePos1 !== null && comMovePos1 !== undefined) {
		compMoves();
	}
};


