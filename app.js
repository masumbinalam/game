/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

var diceDOM = document.querySelector('.dice');

btnNewGame();

function btnNewGame() {
	scores = [0,0];
	roundScore = 0;
	activePlayer = 1;

	diceDOM.style.display = 'none';

	changePlayer()

	document.querySelector('#score-0').textContent = '0';
	document.querySelector('#score-1').textContent = '0';
	document.querySelector('#current-0').textContent = '0';
	document.querySelector('#current-1').textContent = '0';
}

function changePlayer() {
	diceDOM.style.display = 'none';
	document.querySelector('#current-' + activePlayer).textContent = '0';
	roundScore = 0;

	document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	document.querySelector('.player-'+ activePlayer +'-panel').classList.add('active');
}

function btnRoll() {
	dice = Math.floor(Math.random() * 6) + 1;
	
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';

	if (dice !== 1) {
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	} else {
		changePlayer();
	}
}

function btnHold() {
	scores[activePlayer] += roundScore;
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
	changePlayer();
}

document.querySelector('.btn-roll').addEventListener('click', btnRoll)
document.querySelector('.btn-hold').addEventListener('click', btnHold)
document.querySelector('.btn-new-game').addEventListener('click', btnNewGame)