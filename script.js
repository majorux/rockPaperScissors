function getComputerChoice() {
  choices = ["rock", "paper", "scissors"];
  randomElement = choices[Math.floor(Math.random() * choices.length)];
  return randomElement
}

function getPlayerSelection(){
  let answer = prompt("enter choice");
  let choice = answer.toLowerCase();
  return choice
}

const playerSeletion = getPlayerSelection();
const computerSelection =  getComputerChoice();
function compare(choiceA, choiceB){
  if (choiceA == "rock" && choiceB == "paper"){
    return "paper";
  } else if (choiceA == "rock" && choiceB == "scissors"){
    return "rock";
  } else if (choiceA == "paper" && choiceB == "scissors"){
    return "scissors";
  } else {
    return "draw";
  }
}

function playround(playerSeletion, computerSelection){

}