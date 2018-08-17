var words = ["ford", "chevrolet", "buick", "jeep", "ram", "chrysler", "cadillac", "dodge", "tesla"];

var wins = 0;
var userGuess;
var numGuesses = 7;
var currentWord = words[Math.floor(Math.random() * (words.length))];
var wordLength = currentWord.length;
var wordSpace = "";

console.log(wordLength);
console.log(currentWord);

for (wordLength; wordLength > 0; wordLength--) {
    var space = "-";
    wordSpace = wordSpace + space;
}

console.log(wordSpace);

document.getElementById("currentWord").innerHTML = wordSpace;

document.onkeyup = function (event) {

    userGuess = event.key.toLowerCase();

    console.log(currentWord.search(userGuess));
    console.log(userGuess);

    if (currentWord === wordSpace) {

        wins++;
        document.getElementById("userWins").innerHTML(wins);
        var currentWord = words[Math.floor(Math.random() * (words.length))];
        var wordLength = currentWord.length;
        var wordSpace = "";
        for (wordLength; wordLength > 0; wordLength--) {
            var space = "-";
            wordSpace = wordSpace + space;
        }
        document.getElementById("currentWord").innerHTML = wordSpace;

    } else if (currentWord.includes(userGuess)) {
        
    }
}