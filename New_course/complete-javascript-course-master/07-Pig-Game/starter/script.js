'use strict';

//Initialisation of the different element of the game

const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');

let score0=document.getElementById('score--0');
let score1=document.getElementById('score--1');
const scores=[score0,score1];

let current0=document.getElementById('current--0');
let current1=document.getElementById('current--1');

//Initialisation of the buttons :

const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');

//initialisation of the image and the dice !

let Dice=document.querySelector('.dice');


//Initialisation of the randomness

const randDice = function(){
    return parseInt(Math.random()*6)+1;
}

//Reinitialisation of the score !

const initialisation = function(){
    score0.textContent=0;
    score1.textContent=0;
    current0.textContent=0;
    current1.textContent=0;
    Dice.classList.add('hidden');
    btnHold.disabled=false;
    btnRoll.disabled=false;
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
};

initialisation();

btnNew.addEventListener('click', ()=>{
    score0.textContent=0;
    score1.textContent=0;
    current0.textContent=0;
    current1.textContent=0;
    currentScore=0;      //Link to reinitialisation of the sum of dice throw
    Dice.classList.add('hidden');
    btnHold.disabled=false;
    btnRoll.disabled=false;
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
});



//We will at first roll the dice

let currentScore=0;
let innerCount=1;
btnRoll.addEventListener('click', function(){
    let throww=randDice();
    Dice.classList.remove('hidden');
    Dice.src=`dice-${throww}.png`;
    if (throww!=1){
        currentScore+=throww;
        console.log(currentScore);
        currentScoree(currentScore);
    }else{                      //If our dice got on "1", we change the player :! + //Initialization first player
        currentScore=0;
        SwitchPlayer();
    }
    
})

const SwitchPlayer=function(){
    if (player0.classList.contains('player--active')){
        player0.classList.remove('player--active');
        player1.classList.add('player--active');
        current0.textContent=0;
        currentScore=0;
    }else{
        player0.classList.add('player--active');
        player1.classList.remove('player--active');
        current1.textContent=0;
        currentScore=0;
    }
};

const currentScoree=function(currentScore){
    let current00=0;
    let current11=0;
    if(player0.classList.contains('player--active')){
        current00+=currentScore;
        current0.textContent=current00;
    }else{
        current11+=currentScore;
        current1.textContent=current11;
    }
};



btnHold.addEventListener('click', function(){
    if (player0.classList.contains('player--active')){
        score0.innerHTML=Number(score0.innerHTML) + Number(current0.innerHTML);
        SwitchPlayer();
        Winner(score0,score1);
    }else{
        score1.innerHTML=Number(score1.innerHTML) + Number(current1.innerHTML);
        SwitchPlayer();
        Winner(score0,score1);
    }
});




const Winner=function(score0,score1){
    if (Number(score0.innerHTML)>=100){
        console.log(Number(score0)>=100);
        player0.classList.add('player--winner');
        player1.classList.remove('player--active');
        btnHold.disabled=true;
        btnRoll.disabled=true;
        Dice.classList.add('hidden');
    }
    else if (Number(score1.innerHTML)>=100){
        console.log(Number(score1)>=100);
        player1.classList.add('player--winner');
        player0.classList.remove('player--active');
        btnHold.disabled=true;
        btnRoll.disabled=true;
        Dice.classList.add('hidden');
    }

}

