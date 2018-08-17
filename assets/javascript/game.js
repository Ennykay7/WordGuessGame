    var words = ["ford", "chevrolet", "buick", "jeep", "ram", "chrysler", "cadillac", "dodge", "tesla"];
    var wins = 0;
    var userGuess;
    var numGuesses = 7;
    var currentWord = words[Math.floor(Math.random() * (words.length))];
    var wordLength = currentWord.length;
    var space = "-";
    var wordSpace = space.repeat(wordLength);
    var userGuess = "";
    
    document.getElementById("currentWord").innerHTML = wordSpace;

document.onkeyup = function (event) {

    userGuess = event.key.toLowerCase();

    if (numGuesses === 0) {
        alert("GAME OVER");
    } else if (currentWord === wordSpace) {

        wins++;
        document.getElementById("userWins").innerHTML = wins;
        numGuesses = 7;
        document.getElementById("guessesLeft").innerHTML = numGuesses;
        currentWord = words[Math.floor(Math.random() * (words.length))];
        wordLength = currentWord.length;
        wordSpace = space.repeat(wordLength);
        document.getElementById("currentWord").innerHTML = wordSpace;

    } else if (currentWord.includes(userGuess)) {

        var check1 = currentWord.indexOf(userGuess);
        var check2 = currentWord.lastIndexOf(userGuess);
        var replace = wordSpace.split("");
        replace.splice(check1, 1, userGuess);
        replace.splice(check2, 1, userGuess);
        wordSpace = replace.join("");
        document.getElementById("currentWord").innerHTML = wordSpace;

    } else {
        numGuesses--;
        document.getElementById("guessesLeft").innerHTML = numGuesses;
    }
}