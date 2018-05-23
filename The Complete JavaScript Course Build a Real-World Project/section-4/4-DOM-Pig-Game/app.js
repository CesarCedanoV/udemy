/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

// Select the UI elements
score0 = document.getElementById('score-0');
score1 = document.getElementById('score-1');
current0 = document.getElementById('current-0');
current1 = document.getElementById('current-1');
diceDOM = document.querySelector('.dice' );



init();
function init() {
    scores = [0,0];
    roundScore=0;
    activePlayer = 0;
    
    // Reset UI elements
    score0.textContent = '0';
    score1.textContent = '0';
    current0.textContent = '0';
    current1.textContent = '0';
    diceDOM.style.display = 'none';

    // Removed some DOM manipulation after a Game. 
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    

    

    document.querySelector('.btn-roll').disabled = false;
    document.querySelector('.btn-hold').disabled = false;
}


document.querySelector('.btn-roll').addEventListener('click', function() {
    
    // 1. Random numnber
    var dice = Math.floor(Math.random() * 6) + 1 ;

    // 2. Display the dice
    diceDOM.style.display = 'block';

        // 2.1 Change the Dice image with the Dice number
        diceDOM.src = 'dice-' + dice + '.png'
    
    // 3. Update the round scode IF the rolled number was NOT a 1
    if (dice !== 1) {
        // Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else {
        // Reset roundScore and Next player
        nextTurn();
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    // Add current score to Global Score
    scores[activePlayer] += roundScore;
    
    // Update UI
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    // Check if player won the game
    if (scores[activePlayer] >= 20) {
        document.getElementById('name-'+activePlayer).textContent='Winner!';
        alert("We got a Winner. Player #" + (activePlayer + 1) + " Won!")
        diceDOM.style.display = 'none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        document.querySelector('.btn-roll').disabled = true;
        document.querySelector('.btn-hold').disabled = true;
    }else {
        nextTurn();
    }
});




function nextTurn() {
    roundScore = 0;
    current0.textContent = roundScore ;
    current1.textContent = roundScore ; 
    // Hide Blick
    diceDOM.style.display = 'none';
    
    // Change the activePlayer on the Back
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    // Change the activePlayer on the UI 
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
};



document.querySelector('.btn-new').addEventListener('click', init);
