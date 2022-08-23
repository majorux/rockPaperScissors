function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  randomElement = choice[Math.floor(Math.random() * choice.length)];
  return randomElement
}
let getPlayerSelection;

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
let playerScore = 0;
let computerScore = 0;
let output = "";

function playround(player, computer){
  if (compare(player, computer) === player){
    playerScore += 1;
    output = "you win, " + player + " beats " + computer + ". " + "Current score: " + playerScore + "|" + computerScore;
    } else if (compare(player,computer) == "draw"){
    output = "its a draw. " + "Current score: " + playerScore + "|" + computerScore;
  } else if (compare(player, computer) === computer){
    computerScore += 1;
    output = "you lose, " + computer + " beats " + player + ". " + "Current score: " + playerScore + "|" + computerScore;
  } else {
    return "something went wrong"
  }
};

window.addEventListener('click', function(e){
  const getPlayerSelection = e.srcElement.className;
  playround(getPlayerSelection, getComputerChoice());

  const body = document.querySelector('body');
  const text = document.createElement('p');
  text.innerText = (output);
  if(document.querySelector('p')){
    const p = this.document.querySelector('p');
    p.remove(p)
  }
  body.append(text)
});




//function game(){
//for(let i = 0; i < 5; i++){
//playround(getPlayerSelection(), getComputerChoice())
//}
//if (playerScore > computerScore){
//console.log("You won! " + playerScore + ": " + computerScore)
//} else if (playerScore === computerScore){
//console.log("it's a Draw! " + playerScore + ":" + computerScore)
//} else {
//console.log("You lost! " + playerScore + ":" + computerScore)
//}
//}
//game()