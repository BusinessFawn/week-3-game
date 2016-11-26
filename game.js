var attempts = 10;
var wins = 0;
var losses = 0;
var words =["mean girls", "clueless", "wedding crashers", "old school"];
var randomWord = words[Math.floor(Math.random() * words.length)].split("");
//var randomWord = words[1];
var wordLettersGuessed = [];
var printLetters = [];
var userGuess;
var displayBlank = [];
for (var i = 0; i < randomWord.length; i++){
  displayBlank.push("_");
}
var remainingLetters = randomWord.length;
  console.log(randomWord);




// var displayBlank = [];
// var wordBlank = new Array (randomWord.length);
// for (var i = 0; i < wordBlank.length; i++){
//   displayBlank = wordBlank.join(" _ ");
// }
// console.log(wordBlank);


document.getElementById("randomWordGenerated").innerHTML = displayBlank.join(" ");
//console.log(displayBlank);

var lettersGuessed = [];

document.onkeyup = function (event){
   userGuess = String.fromCharCode(event.keyCode).toLowerCase();
   lettersGuessed.push(userGuess);

    document.getElementById("firstGuess").innerHTML = lettersGuessed.join(" ");

    console.log(lettersGuessed);
    //console.log(printLetters.toString());

   if (randomWord.indexOf(userGuess) > -1){
        //displayBlank[j] = userGuess;
        printLetters = letterChecker(userGuess);
        alert("Correct!");
        //update the entire thing with the letters
        document.getElementById("randomWordGenerated").innerHTML = printLetters;

   }
   else{
      alert("Wrong!");
      attempts--;
      document.getElementById("counter").innerHTML = attempts;
   }

};
function letterChecker(a) {
  var i = randomWord.indexOf(a);
  //potentially redundent, but this allows me to continue the use of i as the indexOf the user input.
  if(i > -1 && wordLettersGuessed.indexOf(a) < 0) {
    displayBlank[i] = a;
  }
  //this loops so that I can continue to credit the user for their correct guess for all subsequent appearances of their guess
  while(i > -1)
  {
    i = randomWord.indexOf(a, i + 1);
    if(i > -1){
      displayBlank[i] = a;
    }
  }
  return displayBlank;
}




















