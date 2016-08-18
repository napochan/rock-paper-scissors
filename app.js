var _moves = ['Rock', 'Scissors', 'Paper'];
var _movesLength = _moves.length;
var comMovePos1;
var comMovePos2;
var $result = document.getElementById('result');


function genRandom() {	
	return Math.floor(Math.random() * _movesLength);
};

function compMoves() {
	if (comMovePos1 === comMovePos2) {
		$result.innerHTML = 'Draw';
	} else if ((comMovePos1 - comMovePos2) % 2 === 0 || (comMovePos1 - comMovePos2) % 2 === -1) {
		$result.innerHTML = 'Player One Won!';
	} else if ((comMovePos1 - comMovePos2) % 2 === 1) {
		$result.innerHTML = 'Player Two Won!';
	} else {
		$result.innerHTML = 'Player Two Won!';
	};
	console.log(comMovePos1, comMovePos2);
};


document.getElementById('player1').onclick = function() {
	comMovePos1 = genRandom();
	document.getElementById('player1Move').innerHTML = _moves[comMovePos1];
	if (comMovePos2 !== null && comMovePos2 !== undefined) {
		compMoves();
	};
};

document.getElementById('player2').onclick = function() {
	comMovePos2 = genRandom();
	document.getElementById('player2Move').innerHTML = _moves[comMovePos2];
	if (comMovePos1 !== null && comMovePos1 !== undefined) {
		compMoves();
	};
};


