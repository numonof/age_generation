
let buttons = document.querySelector(".button");
let nameQuation = document.querySelector("#quation_name").textContent = 'Enter your name';
let ageQuation = document.querySelector("#quation_age");
let nameIn = document.querySelector("#userName");
let ageIn = document.querySelector("#userAge");
let text = document.querySelector('.text');
// Modal
let showModal = document.querySelector('.show-modal');
let modal = document.querySelector('.modal');
let closeModalBtn = document.querySelector('.close-modal');
let owerlay = document.querySelector('.owerlay');
let respons = document.querySelector('.respons')
// Open Modal
const openModal = function(){
    modal.classList.remove('hidden');
    owerlay.classList.remove('hidden');
}
// closeModal
const closeModal = function(){
    modal.classList.add('hidden');
    owerlay.classList.add('hidden');
}
closeModalBtn.addEventListener( 'click', closeModal);
owerlay.addEventListener( 'click', closeModal);
document.addEventListener( 'keydown' , function (evt) {
    if (evt.key === 'Escape'){
        closeModal()  
    }
})
ageQuation.textContent = 'Enter your age';

const myClick = function() {
    let myName = nameIn.value
    let myAge =  +ageIn.value 
    let  answer = myName === '' || myName === null &&  myAge === '' || myAge === null ? text.textContent = 'Enter your Name and Age': myAge === '' || myAge === null ? text.textContent = 'Enter your age' : text.textContent = ""  ;
    var result = `Dear ${myName} , he year of your birth: ${2022 - myAge} va  and you have livid  ${myAge * 12} month, ${((myAge * 365 )/ 7).toFixed()} week, ${myAge * 365} day , ${myAge * 365 * 24} hour , ${myAge * 365 * 24 * 60} minute , ${myAge * 365 * 24 * 60 * 60}  second`
    respons.textContent = result ;
   
    if ( myName === '' || myAge === null) {
        closeModal()
        console.log("closeModal");
 
    } else {
        openModal()
        console.log("openModal");
    }
   console.log(respons);
    nameIn.value = ""
    ageIn.value = null;
    
}

buttons.addEventListener( 'click',  myClick );