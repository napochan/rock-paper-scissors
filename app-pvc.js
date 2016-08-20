// Define moves inside an Array in the order of 0 > 1 > 2 > 0
var _moves = ['Rock', 'Scissors', 'Paper'];
var _movesLength = _moves.length;
var comMovePos2;
var $player1Move;
var $result = document.getElementById('result');

function genRandom() {
	'use strict';
	return Math.floor(Math.random() * _movesLength);
}

function compMoves() {
	'use strict';
	if ($player1Move === comMovePos2) {
		$result.innerHTML = 'Draw';
	} else if (($player1Move - comMovePos2) === -2) {
		$result.innerHTML = 'Player Two Won!';
	} else if (($player1Move - comMovePos2) % 2 === 0 || ($player1Move - comMovePos2) % 2 === -1) {
		$result.innerHTML = 'Player One Won!';
	} else {
		$result.innerHTML = 'Player Two Won!';
	}
}

//Computer player 2
document.getElementById('player2').onclick = function() {
	'use strict';
	var $seletedOption = document.getElementById('player1Move').selectedIndex;
	$player1Move = Number(document.getElementsByTagName('option')[$seletedOption].value);

	if ($player1Move === -1) {
		$result.innerHTML = 'Please make your move!';
	} else {
		comMovePos2 = genRandom();
		document.getElementById('player2Move').innerHTML = _moves[comMovePos2];
		compMoves();
	}
};




