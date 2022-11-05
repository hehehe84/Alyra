'use strict';


const modal=document.querySelector('.modal');
const btnsShowModal=document.querySelectorAll('.show-modal');
const overlay=document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.close-modal');

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


//We activate all the button to show the modal when we click on them

for (let i=0; i<btnsShowModal.length;i++){
    btnsShowModal[i].addEventListener("click", openModal);
}

//Now, we activate the close button to close the modal.

btnCloseModal.addEventListener("click", closeModal);

//activate close while clicking on the overlay

overlay.addEventListener("click", closeModal);

//Click on escape in order to escape the Modal

document.addEventListener('keydown', function(e){
    if (e.key==="Escape"&&!modal.classList.contains('hidden')){
        closeModal();
    }
});