///////////////////////////////////////
// CODING CHALLENGE 1

/*
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)

1. Create variables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).

4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
*/

//Soluction:

agePlayer1= prompt("Height of the Player 1?");
heightPlayer1= prompt("Ageof the player 1?");
agePlayer2= prompt("Height of the Player 2?");
heightPlayer2= prompt("Ageof the player 2?");
agePlayer3= prompt("Height of the Player 3?");
heightPlayer3= prompt("Ageof the player 3?");

if ((((heightPlayer1+5)*agePlayer1) > ((heightPlayer2+5)*agePlayer2)) && (((heightPlayer1+5)*agePlayer1) > ((heightPlayer3+5)*agePlayer3))){
    alert("Player 1 won the Game! \o/ ");
} else if   ((((heightPlayer2+5)*agePlayer2) > ((heightPlayer1+5)*agePlayer1)) && (((heightPlayer2+5)*agePlayer2) > ((heightPlayer3+5)*agePlayer3))){
    alert("Player 2 won the Game! \o/ ")
}  else if   ((((heightPlayer3+5)*agePlayer3) > ((heightPlayer1+5)*agePlayer1)) && (((heightPlayer3+5)*agePlayer3) > ((heightPlayer2+5)*agePlayer2))){
    alert("Player 3 won the Game! \o/ ")
}else {
    alert("Draw ");
}