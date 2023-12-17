let userScore = 0 ;
let compScore = 0;

const userScorePara = document.querySelector("#user-score")
const computerScorePara = document.querySelector("#computer-score")
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genComputerChoice = () =>{
    const options = ["rock" , 'paper' , 'scissors'];
    const rendomIndex = Math.floor(Math.random()*3);
    return options[rendomIndex];
}

const drawGame = () =>{
    console.log("game was draw");
    msg.innerText='game was draw play again!';
    msg.style.backgroundColor='yellow';
    msg.style.color='#081b31';
}

const showWinner = (userWin , computerChoice , userChoice) =>{
    if (userWin){
        console.log("You Win!")
        msg.innerText=`You Win!. your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor='green';
        userScore++;
        userScorePara.innerText=userScore;
    }
    else{
        console.log("You Lose!");
        msg.innerText=`You Lose! ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor='red';
        compScore++;
        computerScorePara.innerText = compScore;
    }
}

const playGame = (userChoice) =>{
    console.log("user chioce is =" , userChoice);
    //generator computer choice
    const computerChoice = genComputerChoice();
    console.log("computer choice is =",computerChoice)

    ///show choice
    if(userChoice === computerChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === 'rock'){
            //scissor , rock
            userWin = computerChoice === 'paper' ? false : true;
        }
        else if(userChoice === 'paper'){
            //rock , scissors
            userWin = computerChoice === 'rock' ?  true: false ;
        }
        else{
            //rock , paper
            userWin = computerChoice === 'rock' ? false : true ;
        }       
        showWinner(userWin  , computerChoice , userChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click" , ()=>{
        const userChoice = choice.getAttribute("id");
        // console.log(`choice was clicked for id = ${userChoice}`)
        playGame(userChoice)
    })
})