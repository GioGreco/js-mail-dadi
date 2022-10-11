"use strict";

const mailSection = document.getElementById('mail');
const mailBtn = mailSection.querySelector('button');

const diceSection = document.getElementById('dice');
const diceBtn = diceSection.querySelector('button');

mailBtn.addEventListener('click', () => {
    mailSection.classList.add('active');
    diceSection.classList.add('collapse');
    function removeSection (){
        setTimeout(() => {
            diceSection.classList.add('d-none');
            mailBtn.classList.add('d-none');
            mailValidation();
        }, 1000)
    };
    removeSection();
});

diceBtn.addEventListener('click', () => {
    diceSection.classList.add('active');
    mailSection.classList.add('collapse');
    function removeSection (){
        setTimeout(() => {
            mailSection.classList.add('d-none');
            diceBtn.classList.add('d-none');
            diceGame();
        }, 1000)
    };
    removeSection();
});

//mail exercise

const mails = ['marioRossi@gmail.com', 'gabrieleFoffa@gmail.com', 'francescaRondella@gmail.com', 'stefanoStefano@gmail.com', 'carlaCollari@gmail.com', 'cinziaGino@gmail.com', 'dannyDonato@gmail.com', 'louPesci@gmail.com', 'paoloDiesci@gmail.com', 'bryanCristante@gmail.com'];
console.log(mails);

function mailValidation(){
    const mailInput = document.createElement('input');
    mailSection.append(mailInput);
    mailInput.type = 'text';
    mailInput.className = 'mailInput';
    mailInput.placeholder = 'verifica il tuo indirizzo mail'

    const searchMail = document.createElement('button');
    mailSection.append(searchMail);
    searchMail.className = 'searchMail';
    searchMail.innerText = 'VERIFICA';

    const outcome = document.createElement('div');
    mailSection.append(outcome);
    outcome.className = 'outcome'

    let check = false;

    function research(){
        for(let i=0; i < mails.length; i++){
            if(mailInput.value === mails[i]){
                check = true;
            };
        }
        if(check){
            outcome.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
            outcome.style.color = 'green';
        }
        else{
            outcome.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
            outcome.style.color = 'red';
        };
        check = false;
    };

    searchMail.addEventListener('click', research);
}

//dice exercise

const faces = 6;

function diceGame(){
    const pcNumber = document.createElement('div');
    diceSection.append(pcNumber);
    pcNumber.className = 'number pc-number';
    pcNumber.innerHTML = `<i class="fa-solid fa-desktop"></i>`;

    const myNumber = document.createElement('div');
    diceSection.append(myNumber);
    myNumber.className = 'number my-number';
    myNumber.innerHTML = `<i class="fa-solid fa-user"></i>`;

    const throwDice = document.createElement('button');
    diceSection.append(throwDice);
    throwDice.className = 'throwDice';
    throwDice.innerText = 'LANCIA I DADI';

    const winner = document.createElement('div');
    winner.className = 'winner';
    diceSection.prepend(winner);

    function diceSimulator(){
        let pcResult = Math.floor(Math.random() * faces);
        let myResult = Math.floor(Math.random() * faces);

        pcNumber.innerHTML = pcResult;
        myNumber.innerHTML = myResult;

        if(pcResult === myResult){
            winner.innerHTML = 'PAREGGIO!';
            winner.style.color = 'yellow';
        }
        else if(pcResult > myResult){
            winner.innerHTML = 'YOU LOSE!';
            winner.style.color = 'red';
        }
        else if(myResult > pcResult){
            winner.innerHTML = 'YOU WIN!';
            winner.style.color = 'green';
        }
    };

    throwDice.addEventListener('click', diceSimulator);
}