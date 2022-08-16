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