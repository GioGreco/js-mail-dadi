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

    let check = false;

    function research(){
        for(let i=0; i < mails.length; i++){
            // let check = false;
            if(mailInput.value === mails[i]){
                check = true;
            };
        }
        if(check){
            const success = document.createElement('div');
            mailSection.append(success);
            success.className = 'success';
            success.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        }
        else{
            const failure = document.createElement('div');
            mailSection.append(failure);
            failure.className = 'failure';
            failure.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
        };
    };

    searchMail.addEventListener('click', research);
}