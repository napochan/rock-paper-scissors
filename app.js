var _moves = ['Rock', 'Scissors', 'Paper'];
var _movesNumber = _moves.length;

document.getElemtById('player1').clcik

function comMove() {
	var comMovePos = Math.floor(Math.random() * 3);
	return _moves[comMovePos];
}

function compMoves() {
	var comMove1 = comMove();
	var comMove2 = comMove();
	if (comMove1 === comMove2) {
		document.getElemtById('result').innerHtml('Draw')
	};
	console.log (comMove1);
	console.log (comMove2);
};

