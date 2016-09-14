(function() {

  'use strict';

  var _moves = [
                  {move: 'Rock', beats: ['Scissors']},
                  {move: 'Scissors', beats: ['Paper']},
                  {move: 'Paper', beats: ['Rock']}
                ];
  var _movesLength = _moves.length;
  var comMovePos2;
  var $player1Move;
  var $result = document.getElementById('result');

  function genRandom() {
    return Math.floor(Math.random() * _movesLength);
  }

  function compMoves() {
    if ($player1Move === comMovePos2) {
      $result.innerHTML = 'Draw';
    } else if (_moves[$player1Move].beats.indexOf(_moves[comMovePos2].move) !== -1 ) {
      $result.innerHTML = 'Player One Won!';
    } else {
      $result.innerHTML = 'Player Two Won!';
    }
  }

  //Computer player 2
  document.getElementById('player2').onclick = function() {
    var $seletedOption = document.getElementById('player1Move').selectedIndex;
    $player1Move = Number(document.getElementsByTagName('option')[$seletedOption].value);

    if ($player1Move === -1) {
      $result.innerHTML = 'Please make your move!';
    } else {
      comMovePos2 = genRandom();
      document.getElementById('player2Move').innerHTML = _moves[comMovePos2].move;
      compMoves();
    }
  };


}());

