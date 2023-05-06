let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    let randomNum =Math.floor(Math.random()*10);
    return randomNum;
};

const compareGuesses = (humanGuess, computerGuess, targetGuess) =>{
    /*Determines which player (human or computer) wins based on which guess is closest to the target. If both players are tied, the human user should win.
Return true if the human player wins, and false if the computer player wins. */
    if(!((humanGuess>=0) && (humanGuess<=9))){
        console.log("Your number guess is out of range!");
    }
    else{
        let diffHuman = getAbsoluteDistance(humanGuess,targetGuess);
        let diffComputer = getAbsoluteDistance(computerGuess,targetGuess);
    
        if(diffHuman<diffComputer || diffHuman===diffComputer){
            return true;
        }
        else{
            return false;
        }
    }
    
};

function updateScore(whoIsTheWinner){
    if(typeof(whoIsTheWinner)==='string'){
        if(whoIsTheWinner==='human'){
            humanScore++;
        }
        if(whoIsTheWinner==='computer'){
            computerScore++;
        }
    }
}

function advanceRound(){
    currentRoundNumber++;
}

const getAbsoluteDistance = (num1, num2) =>{
    return Math.abs(num1-num2);
};


console.log(compareGuesses(3,5,generateTarget()));
