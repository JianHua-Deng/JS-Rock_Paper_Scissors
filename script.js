var choices = ["rock", "paper", "scissor"];

const gameChoice = new Map();
gameChoice.set("rock", "scissor");
gameChoice.set("scissor", "paper");
gameChoice.set("paper", "rock");

var winner = false;

function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}

function validStr(str){
    var str1 = str.toLowerCase();
    return (gameChoice.has(str1));
}

console.log("Welcome to Rock Paper Scissor!\n Let's Start!");

while(!winner){
    var compChoice = getComputerChoice();
    var playerChoice = prompt("Rock Paper Scissor! Enter your decisions!");
    while(!validStr(playerChoice)){
        playerChoice = prompt("Invalid Input! Please enter a valid decisions!");
    }

    if(gameChoice.get(compChoice) == playerChoice.toLowerCase()){
        console.log("Computer: " + compChoice + ", Player: " + playerChoice.toLocaleLowerCase() + "\nComputer won!")
        winner = true;
    }else if(gameChoice.get(playerChoice.toLowerCase()) == compChoice){
        console.log("Computer: " + compChoice + ", Player: " + playerChoice.toLocaleLowerCase() + "\nPlayer won!");
        winner = true;
    }else{
        console.log("Computer: " + compChoice + ", Player: " + playerChoice.toLocaleLowerCase() + "\nIt's a tie!");
    }
}
