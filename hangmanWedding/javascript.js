// Globa Variables
// ==========================================================
// Create an array of words (wedding based words)

const wordArr = ["bride", "mexico", "groom", "party", "vows"];

// ==========================================================
// Global Variables

//solution
var currentWord;

// letters in solution
var currentArr = [];

// This will be the number of blanks we show based on the solution
var numLetters = 0;

//holds underscores and solved letters (ex: 'n, _ _, n)
var blanks = [];

//Holds the wrong guesses
var guessedLettersArr = [];

//game counters
var wins = 0;
var losses = 0;
var guessesRemianing = 15;

// ==========================================================
// Start Game
function startGame(){
    // Start game with BTN click
1
    //resets the guesses once a new game starts
    guessesRemianing = 15;

    //chose a random word from your word array
    currentWord = wordArr[Math.floor(Math.random() * wordArr.length)];

    // word is broken into indivisual letters
    currentArr = currentWord.split("");
 
    //displaying the letter count in the dom
    numLetters = currentArr.length;

    console.log("Current Word " + currentWord);

    console.log("Current Word Split into an array " + currentArr);

    //we reset** the arrays for the right and wrong letters for each game
    blanks = [];
    guessedLettersArr = [];

    for (i = 0; i < numLetters; i ++){
        blanks.push("_");
    }

      // Print the initial blanks in console.
    console.log("Print the initial blanks in console " + blanks);

    //displays updates to Dom

    document.getElementById("numLetters").innerHTML = numLetters;

    // Reprints the guessesLeft to 15
    document.getElementById("remaining").innerHTML = guessesRemianing;

    // Prints the blanks at the beginning of each round in the HTML
    document.getElementById("currentWord").innerHTML = blanks.join(" ");

    // Clears the wrong guesses from the previous round
    document.getElementById("letterArr").innerHTML = guessedLettersArr.join(" ");
	// ...update the page
};

startGame();


// ==========================================================
// It's where we will do all of the comparisons for matches.

function checkLetters(letter) {

    //this variable will be toggled 
    var letterInWord = false;

    for (var i=0; i < numLetters; i++) {
        if (currentWord[i] === letter){
            letterInWord = true;
        }
    }

    if (letterInWord) {
         for (var j=0; j< numLetters; j ++){
             if (currentWord[j] === letter){
                 blanks[j] = letter;
             }
         }

         console.log(blanks);
    }

    else {
        guessedLettersArr.push(letter);
        guessesRemianing--;
    }
}

// ==========================================================
// Here we will have all of the code that needs to be run after each guess is made
function roundComplete() {

    console.log("WinCount: " + wins + " | LossCount: " + losses + " | NumGuesses: " + guessesRemianing);

    // Update the HTML to reflect the new number of guesses. Also update the correct guesses.
    document.getElementById("remaining").innerHTML = guessesRemianing;
    // This will print the array of guesses and blanks onto the page.
    document.getElementById("currentWord").innerHTML = blanks.join(" ");
    // This will print the wrong guesses onto the page.
    document.getElementById("letterArr").innerHTML = guessedLettersArr.join(" ");

    // If we have gotten all the letters to match the solution...
    if (currentArr.toString() === blanks.toString()) {
        // ..add to the win counter & give the user an alert.

        
        wins++;
        alert("You win!");

        // Update the win counter in the HTML & restart the game.
        document.getElementById("wins").innerHTML = wins;
        startGame();

    }

    // If we've run out of guesses..
    else if (guessesRemianing === 0) {
      // Add to the loss counter.
      losses++;
      // Give the user an alert.
      alert("You lose");
  
      // Update the loss counter in the HTML.
      document.getElementById("losses").innerHTML = losses;
      // Restart the game.
      startGame();
    }

}


 // =========================================================
 //log letters chosen

 function guessedLetters(){
     document.onkeyup = function (event){
         //event.keycode 9which is passed to (string.fromCharCode) grabs the keycode that was pressed .... string.fromCharCode takes that code and converts it into a value of the code A B C etc.

        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        checkLetters(userGuess);

        roundComplete();

     }
 }

 guessedLetters();
