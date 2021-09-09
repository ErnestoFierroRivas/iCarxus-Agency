const slidePage = document.querySelector(".slidepage");

const firtNextBtn = document.querySelector(".nextBtn");

const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");

const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");

const prevBtnFour = document.querySelector(".prev-3");
const nextBtnFour = document.querySelector(".next-3");

const prevBtnFive = document.querySelector(".prev-4");
const submitBtn = document.querySelector(".submit");

/*Progress-Bar*/

const progressCheck = document.querySelectorAll(".body-container__container__progress-bar__step__check");
const progressbullet = document.querySelectorAll(".body-container__container__progress-bar__step__bullet");
let max = 5;
let current = 1;

/*Stepper-1*/
firtNextBtn.addEventListener("click", function(){
    slidePage.style.marginLeft="-25%";
    progressbullet[current -1].classList.add("active");
    current += 1;
})

/*Stepper-2*/
nextBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft="-50%";
})
prevBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft="0%";
})

/*Stepper-3*/
nextBtnThird.addEventListener("click", function(){
    slidePage.style.marginLeft="-75%";
})
prevBtnThird.addEventListener("click", function(){
    slidePage.style.marginLeft="-25%";
})

/*Stepper-4*/
nextBtnFour.addEventListener("click", function(){
    slidePage.style.marginLeft="-100%";
})
prevBtnFour.addEventListener("click", function(){
    slidePage.style.marginLeft="-50%";
})

/*Stepper-5*/
prevBtnFive.addEventListener("click", function(){
    slidePage.style.marginLeft="-75%";
})
