function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  randomElement = choice[Math.floor(Math.random() * choice.length)];
  return randomElement
}

function getPlayerSelection(){
  let answer = prompt("enter choice");
  let choice = answer.toLowerCase();
  return choice
}

const playerSeletion = getPlayerSelection();
const computerSelection =  getComputerChoice();
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

function playround(player, computer){
  if (compare(player, computer) === player){
    console.log("you win, " + playerSeletion + " beats " + computerSelection)
  } else if (compare(playerSeletion,computerSelection) == "draw"){
    console.log("its a draw")
  } else if (compare(player, computer) === computer){
    console.log("you lose, " + computerSelection + " beats " + playerSeletion)
  } else {
    return "something went wrong"
  }
}
playround(playerSeletion, computerSelection)
console.log(playerSeletion, computerSelection)