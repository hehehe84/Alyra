'use strict';


//Generate a random number to compare in the following

const GenerateRand = function() {
    return parseInt(Math.random()*20)+1;
    //Or Math.trunc(Math.random()*20)+1;
}
let numbAlea = GenerateRand();

///Selection of the element inside the html
let mess = document.querySelector('.message');

const displayMessage = function(message){
    document.querySelector('.message').textContent=message;
}

const clicke = document.querySelector('.check');
// const thisScore=document.querySelector('.score').value;

//Initialization incrementation
let score2 = 20;     //State application cause part of our application
// BE AWARE : console.log(document.querySelector('.guess').value;);       It return a string

//Listen to the click, see if it's equal to our result
clicke.addEventListener("click",() =>{
    let guess = Number(document.querySelector('.guess').value);
    let score = document.querySelector('.score');
    //if(typeof guess === "number"){  BAD cause we prefer =>   
    if(guess){
        goodNumb(guess,score);
    }else{
        // mess.textContent = '⛔️ No number';
        displayMessage('⛔️ No number !!!');
    }
});

//Test and change the text when we reach low level to put an error
// let testIncr = function(increment,score,mess){
//     (increment>0) ? (score.textContent = increment) : (score.textContent = 0, mess.textContent = '💥 You lost the game !',clicke.disabled=true );
// };

const goodNumb = function(guess,score){   //Compare the value enter by the 
    if (guess===numbAlea){           //Client to a random number above
        // mess.textContent = 'Correct Number !';
        displayMessage('Correct Number !!!')
        document.body.style.backgroundColor="#60b347";
        document.querySelector('.number').textContent = numbAlea;
        document.querySelector('.number').style.width= '30rem';
        clicke.disabled=true;
        calcHScore(score2,hScore);
    // }else if (guess>numbAlea){
    //     if(score2>0){
    //         mess.textContent = '📈 Too high!';
    //         score2--;
    //         score.textContent=score2;
    //     }else{
    //         mess.textContent='💥 You lost the game';
    //         clicke.disabled=true;
    //     }
    // }else if (guess<numbAlea){
    //     if(score2>0){
    //         mess.textContent = '📉 Too low!';
    //         score2--; 
    //         score.textContent=score2;
    //     }else{
    //         mess.textContent='💥 You lost the game';
    //         clicke.disabled=true;
    //     }

    }else if (score2>0){
        displayMessage((guess>numbAlea) ? '📈 Too high!':'📉 Too low!');//Super intéressant le display message dans un cas comme celui la...
        score2--;
        score.textContent=score2;
    }else{
        // mess.textContent='💥 You lost the game';
        displayMessage('💥You loose the game...');
        clicke.disabled=true;
    }
}

//I put the line under cause it will alow me to call calcHScore above

let hScore=0;
let highScore = document.querySelector('.highscore');

const calcHScore = function(score,hScore){
    if (score>=hScore){
        hScore=score;
    }else{
        hScore=hScore;
    }
    highScore.textContent=hScore;
}

//We will reboot our system with this button :
const rein=document.querySelector('.again');

rein.addEventListener('click', function(){
    score2=20;
    numbAlea=GenerateRand();
    document.querySelector('.score').textContent=score2;
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.number').textContent='?';
    document.querySelector('.number').style.width='15rem';
    document.body.style.backgroundColor='#222';
    document.querySelector('.guess').value='';
    clicke.disabled=false;      //I had to change this in order to make MY code good
})

// rein.addEventListener('click', function(){
//     document.location.reload(true);
// });

//We don't use this cause we don't use the memory of our computer/Navigator










/*
const GenerateRand = function() {
    return parseInt(Math.random()*20)+1;
}
let numbAlea = GenerateRand();

let mess = document.querySelector('.message');
const clicke = document.querySelector('.check');

let score2 = 20;

clicke.addEventListener("click",() =>{
    let guess = Number(document.querySelector('.guess').value);
    let score = document.querySelector('.score');
    if(guess){
        goodNumb(guess,score);
    }else{
        mess.textContent = '⛔️ No number';
    }
});

let hScore=0;

const goodNumb = function(guess,score){    
    if (guess===numbAlea){  
        mess.textContent = 'Correct Number !';
        document.body.style.backgroundColor="#60b347";
        document.querySelector('.number').textContent = numbAlea;
        document.querySelector('.number').style.width= '30rem';
        clicke.disabled=true;
        calcHScore(score2,hScore);
    }else if (score2>0){
        (guess>numbAlea) ? mess.textContent= '📈 Too high!': mess.textContent = '📉 Too low!';
        score2--;
        score.textContent=score2;
    }else{
        mess.textContent='💥 You lost the game';
            clicke.disabled=true;
    }
}

let highScore = document.querySelector('.highscore');

const calcHScore = function(score,hScore){
    if (score>=hScore){
        hScore=score;
    }else{
        hScore=hScore;
    }
    highScore.textContent=hScore;
}

const rein=document.querySelector('.again');

rein.addEventListener('click', function(){
    score2=20;
    numbAlea=GenerateRand();
    document.querySelector('.score').textContent=score2;
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.number').textContent='?';
    document.querySelector('.number').style.width='15rem';
    document.body.style.backgroundColor='#222';
    document.querySelector('.guess').value='';
    clicke.disabled=false;     
})*/

