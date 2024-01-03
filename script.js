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

function playRound(compChoice, playerChoice){

    if(gameChoice.get(compChoice) == playerChoice.toLowerCase()){
        console.log("Computer: " + compChoice + ", Player: " + playerChoice.toLocaleLowerCase() + "\n")
        return "computer"
    }else if(gameChoice.get(playerChoice.toLowerCase()) == compChoice){
        console.log("Computer: " + compChoice + ", Player: " + playerChoice.toLocaleLowerCase() + "\n");
        return "player";
    }else{
        console.log("Computer: " + compChoice + ", Player: " + playerChoice.toLocaleLowerCase() + "\n");
        return "tie";
    }
}

function game(){
    var result;
    console.log("Welcome to Rock Paper Scissor!\n Let's Start!");

    while(!winner){
        var compChoice = getComputerChoice();
        var playerChoice = prompt("Rock Paper Scissor! Enter your decisions!");
        while(!validStr(playerChoice)){
            playerChoice = prompt("Invalid Input! Please enter a valid decisions!");
        }
        result = playRound(compChoice, playerChoice);
        if( result == "computer" || result == "player"){
            winner = true;
        }else{
            console.log("It's a tie, Let's do it one more time!");
        }
    }
    console.log(result + " Won!");
}

game();
