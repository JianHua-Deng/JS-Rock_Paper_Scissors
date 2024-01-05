
/* Setting up arrays and maps for comparisons */
var choices = ["rock", "paper", "scissor"];
const gameChoice = new Map();
gameChoice.set("rock", "scissor");
gameChoice.set("scissor", "paper");
gameChoice.set("paper", "rock");

/* Variables for games content */
var playerPoints = 0;
var compPoints = 0;

/* Getting necessary info from DOM */
const rockImg = document.getElementById("rock");
const paperImg = document.getElementById("paper");
const scissorImg = document.getElementById("scissor");

const playerImg = document.getElementById("player-img");
const compImg = document.getElementById("computer-img");
const playerScore = document.getElementById("player-scores");
const computerScore = document.getElementById("computer-scores");
const resultScreen = document.querySelector('.result');
const choiceScreen = document.querySelector(".choices");

/* adding event listener to rock, paper, and scissor */
rockImg.addEventListener("click", handleChoice);
paperImg.addEventListener("click", handleChoice);
scissorImg.addEventListener("click", handleChoice);

function reset(){
    playerPoints = 0;
    compPoints = 0;
    playerScore.textContent = 0;
    computerScore.textContent = 0;
}

function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerChoice, compChoice){

    if(gameChoice.get(compChoice) == playerChoice){
        console.log("Computer: " + compChoice + ", Player: " + playerChoice + "\n")
        return "computer"
    }else if(gameChoice.get(playerChoice) == compChoice){
        console.log("Computer: " + compChoice + ", Player: " + playerChoice + "\n");
        return "player";
    }else{
        console.log("Computer: " + compChoice + ", Player: " + playerChoice + "\n");
        return "tie";
    }
}

function addPoints(result){
    if(result == 'player'){
        playerPoints += 1;
        playerScore.textContent = playerPoints;
    }else{
        compPoints += 1;
        computerScore.textContent = compPoints;
    }
}

function setSrc(playerChoice, compChoice){
    console.log("Player choose: " + playerChoice);
    console.log("Bot choose: " + compChoice);
    switch(playerChoice){
        case "rock":
            playerImg.src = "./images/Rock.png";
            break;
        case "paper":
            playerImg.src = "./images/Paper.png";
            break;
        case "scissor":
            playerImg.src = "./images/Scissor.png";
            break;
    }

    switch(compChoice){
        case "rock":
            compImg.src = "./images/Rock.png";
            break;
        case "paper":
            compImg.src = "./images/Paper.png";
            break;
        case "scissor":
            compImg.src = "./images/Scissor.png";
            break;
    }
}

function handleChoice(){
    playerChoice = this.id;
    compChoice = getComputerChoice();
    let result = playRound(playerChoice, compChoice);
    if(result != 'tie'){
        addPoints(result);
    }
    setSrc(playerChoice, compChoice);
    choiceScreen.style.display = "none";
    resultScreen.style.display = "flex";




}



/*
1. When player clicks on either of the images, it triggers a event, and in the js, there should be a function that handles
the event, and determine which choice did the player make
2. Now that we know the choice that the player made, there should be a function that determines the choice that the computer made
3.
*/