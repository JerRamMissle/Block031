//declare word
//decleare vowels value
//declare consonants value
let word = "textbook";
let vowels = 0;
let consonants = 0;

//declare vowels in if statements
//declare consonants in else statements
for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
        vowels++;
    } else {
        consonants++;
    }
}

console.log("The word is " + word);
console.log("it has " + vowels + " vowels and " + consonants + " " + "consonants.");



