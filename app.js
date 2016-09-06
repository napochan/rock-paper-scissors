(function() {

	'use strict';

	var _moves = [
									{move: 'Rock', beats: ['Scissors']}, 
									{move: 'Scissors', beats: ['Paper']},
							  	{move: 'Paper', beats: ['Rock']}
							  ];
	var _movesLength = _moves.length;
	var comMovePos1;
	var comMovePos2;
	var $result = document.getElementById('result');

	function genRandom() {
		return Math.floor(Math.random() * _movesLength);
	}

	function compMoves() {
		if (comMovePos1 === comMovePos2) {
			$result.innerHTML = 'Draw';
		} else if (_moves[comMovePos1].beats.indexOf(_moves[comMovePos2].move) !== -1) {
			$result.innerHTML = 'Player One Won!';
		} else {
			$result.innerHTML = 'Player Two Won!';
		}
	}

	// Computer player 1
	document.getElementById('player1').onclick = function() {
		comMovePos1 = genRandom();
		document.getElementById('player1Move').innerHTML = _moves[comMovePos1].move;
		if (comMovePos2 !== null && comMovePos2 !== undefined) {
			compMoves();
		}
	};

	//Computer player 2
	document.getElementById('player2').onclick = function() {
		comMovePos2 = genRandom();
		document.getElementById('player2Move').innerHTML = _moves[comMovePos2].move;
		if (comMovePos1 !== null && comMovePos1 !== undefined) {
			compMoves();
		}
	};

}());
