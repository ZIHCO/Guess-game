let numberRange = [1, 2];
let level = 1;
let score = 0;
let username = prompt('Please enter your name:');
var isActive;
function checkNumber(num1, num2) {
    if (num1 === num2) {
        return true;
    }
    return false;
}
function ifActive () {
  if (isActive === 'Y') {
    return true;
  }
  return false;
}
function guessMyNumber () {
  let userChoice = parseInt(prompt(`I think of an integer in ${numberRange}. Guess the number:`));
  
  let myNumber = Math.floor(Math.random() * numberRange.length) + 1;
  if (checkNumber(userChoice, myNumber) === false) {
    console.log(`Gameover!`);
  }
  else {
    while (checkNumber(userChoice, myNumber)) {
      level += 1;
      score += 1;
      console.log(`Correct guess, level ${level}`)
      let rangeIncrement = numberRange[numberRange.length - 1] + 1;
      numberRange.push(rangeIncrement);
      myNumber = Math.floor(Math.random() * numberRange.length);
      userChoice = parseInt(prompt(`I think of an integer in ${numberRange}. Guess the number:`));
    }
    console.log(`Gameover! ${username} \n Total score: ${score}`);
  }
  isActive = prompt('Enter "Y" to play again, "N" to close:');
  if (ifActive()) {
    return guessMyNumber();
  }
  return `Goodbye ${username}`
}
console.log(guessMyNumber());