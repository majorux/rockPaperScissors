function getComputerChoice() {
  choices = ["rock", "paper", "scissors"]
  randomElement = choices[Math.floor(Math.random() * choices.length)];
  return randomElement
}
