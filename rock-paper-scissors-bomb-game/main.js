/*"if a user types 'bomb' as their choice, then make sure they win"*/
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput=== 'rock'){
    console.log('User: '+ userInput);
  }
  else if(userInput=== 'paper'){
    console.log('User: '+ userInput);
  }
  else if(userInput=== 'scissors'){
    console.log('User: '+ userInput);
  }
  else if(userInput=== 'bomb'){
    console.log('User: '+ userInput);
  }
  else{
    console.log('Invalid input.');
    userInput=null;
  }
  return userInput;
};

const getComputerChoice = () =>{
  let choice = Math.floor(Math.random()*3);
  
  if(choice===0){
    choice='rock';
  }else if(choice===1){
    choice= 'paper';
  }else{
    choice= 'scissors';
  }
  return choice;
};


const determineWinner = (userChoice, computerChoice) => {
    let res= null;
    if(userChoice==='bomb'){
      console.log('You win.');
      res=userChoice;
    }
    if(userChoice === computerChoice){
        console.log('Tie.');
        res=null;
    }
    if(userChoice === 'rock' && computerChoice === 'scissors'){
        console.log('You won.');
        res=userChoice;
    }
    if(userChoice === 'scissors' && computerChoice === 'paper'){
        console.log('You won.');
        res=userChoice;
    }
    if(userChoice === 'paper' && computerChoice === 'scissors'){
        console.log('You lost.');
        res=computerChoice;
    }
    
    if(userChoice === 'rock' && computerChoice === 'paper'){
        console.log('You lost.');
        res=computerChoice;
    }
    if(userChoice === 'scissors' && computerChoice === 'rock'){
        console.log('You lost.');
        res=computerChoice;
    }
    if(userChoice === 'paper' && computerChoice === 'rock'){
        console.log('You win.');
        res=userChoice;
    }

    return res;
};

function playGame(){
  
  const userChoice=getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log("Computer: "+ computerChoice);
  determineWinner(userChoice,computerChoice);

};

playGame();


