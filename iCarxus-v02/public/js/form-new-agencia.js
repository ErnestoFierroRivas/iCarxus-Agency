'use strict';

const form = document.querySelector('.stepper-nueva-agencia');
const beforeBtn = document.querySelector('#beforeBtn');
const afterBtn= document.querySelector('#afterBtn');
const backBtn = document.querySelector('#backBtn');
const steps = Array.from(document.querySelectorAll('.stepper-nueva-agencia__body__step'));
/******Eventos*****/
afterBtn.addEventListener('click',next);
beforeBtn.addEventListener('click', before);

function next(){

    let index = 0;
    console.log(index);
    const activa = document.querySelector('.stepper-nueva-agencia .stepper-nueva-agencia__body .stepper-nueva-agencia__body__step.active');
    // if (activa == index[0]) {
    //     console.log('step-1');
    // } else {
    //     console.log('otro step');

    // }
    index=steps.indexOf(activa);
    steps[index].classList.remove('active');
    steps[++index].classList.add('active');
    console.log(index);
    if (index = 3) {
        steps.classList.remove(afterBtn);
        
    } else {
        console.log('no se quito el btn chale');
    }
}

function before(){
    let index = 0;
    const activa = document.querySelector('.stepper-nueva-agencia .stepper-nueva-agencia__body .stepper-nueva-agencia__body__step.active');
    index=steps.indexOf(activa);
    steps[index].classList.remove('active');
    steps[--index].classList.add('active');
}

