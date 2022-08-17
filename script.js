function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  randomElement = choice[Math.floor(Math.random() * choice.length)];
  return randomElement
}

function getPlayerSelection(){
  let answer = prompt("A game of Rock Paper Scissors! \n Enter choice");
  let choice = answer.toLowerCase();
  return choice
}

const choices = ["rock", "paper", "scissors"];

function compare(choiceA, choiceB){
  if (choices.includes(choiceA) && choices.includes(choiceB)){
    if (choiceA === "rock" && choiceB === "paper"){
      return "paper"
    } else if (choiceA === "rock" && choiceB === "scissors"){
      return "rock"
    } else if (choiceA === "paper" && choiceB === "scissors"){
      return "scissors"
    }  else if (choiceA === "paper" && choiceB === "rock"){
      return "paper"
    }  else if (choiceA === "scissors" && choiceB === "rock"){
      return "rock"
    }  else if (choiceA === "scissors" && choiceB === "paper"){
      return "scissors"
    } else {
      return "draw"
    }
  } else {
    return "wrong input"
  }
}
let playerScore = 0
let computerScore = 0

function playround(player, computer){
  if (compare(player, computer) === player){
    playerScore += 1;
    console.log("you win, " + player + " beats " + computer + " ." + "Current score: " + playerScore + "|" + computerScore)
  } else if (compare(player,computer) == "draw"){
    console.log("its a draw")
  } else if (compare(player, computer) === computer){
    computerScore += 1;
    console.log("you lose, " + computer + " beats " + player + " ." + "Current score: " + playerScore + "|" + computerScore)
  } else {
    return "something went wrong"
  }
}

function game(){
  for(let i = 0; i < 5; i++){
    playround(getPlayerSelection(), getComputerChoice())
  }
  if (playerScore > computerScore){
    console.log("You won! " + playerScore + ": " + computerScore)
  } else if (playerScore === computerScore){
    console.log("it's a Draw! " + playerScore + ":" + computerScore)
  } else {
    console.log("You lost! " + playerScore + ":" + computerScore)
  }
}
game()