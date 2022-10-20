const prompt = require('prompt-sync')();
const username = prompt('What is your username?: ')

//Core variable declarations
let tries = 3, range = 2, stage = 1, score = 0

//Controller function
const guessController = function(range){
  let value = Math.trunc(Math.random() * range + 1)
  // console.log(value)
  console.log(`Hi ${username}, Welcome to stage ${stage}:`)
  console.log(`In this stage, your guess range is between 1 and ${range}`)
  let guess = +prompt('What is your guess?: ')
  if(guess === value) {
    score++
    range++
    stage++
    guessController(range)
  }else{
    if(tries === 0){
      console.log(`Ouch!, Game over, ${username}. Try again.\n You scored ${score} and got to stage ${stage}`)
    }else{
      tries--
      console.log(`Wrong answer, you have ${tries} tries left`)
      guessController(range)
    }
  }
}
guessController(range)