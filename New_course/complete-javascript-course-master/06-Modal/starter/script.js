'use strict';


const btnsOpenModal= document.querySelectorAll('.show-modal');  //QSA cause we have multiple buttons
const modalH=document.querySelector('.modal');      //H stands for hidden
const btnCloseModal=document.querySelector('.close-modal');

const overlayH=document.querySelector('.overlay');  //H stand for Hidden

// console.log(btnsOpenModal);

// for (let i=0;i<btnsOpenModal.length;i++)
//     btnsOpenModal[i].addEventListener('click', ()=>{
//         console.log(`Button ${i+1} clicked`);
// });


//objective is to show the windows when we click on the button
for (let i=0;i<btnsOpenModal.length;i++)
    btnsOpenModal[i].addEventListener('click', ()=>{
        console.log(`Button ${i+1} clicked`);
        
        modalH.classList.remove('hidden');      //modalH stands for the entire class named "modal hidden" that we simplified to "modal" and that I named "modalH". when I write modal.classList.remove('hide'), I simply remove "hidden" from the class name.
        overlayH.classList.remove('hidden');    //Same than above, we remove "hidden" element from our class list. that lead to show the overlay.
        
        //modalH.style.display = 'block';     Other way of doing it, less efficient than above
        //overlayH.style.display = "block";   but less powerfull cause if hidden had 10 properties, we would have to repeat with every properties again and again...
});


//Objective is to hide !
//clicking on the button
btnCloseModal.addEventListener('click', function(){
    modalH.classList.add('hidden');
    overlayH.classList.add('hidden');
});

overlayH.addEventListener('click', ()=>{
    modalH.classList.add('hidden');
    overlayH.classList.add('hidden');
});


document.addEventListener('keydown', function(e){
    //console.log(e.key);
    if(e.key==="Escape"&& !overlayH.classList.contains('hidden')){
        modalH.classList.add('hidden');
        overlayH.classList.add('hidden');
    }
});



