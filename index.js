const btn =document.querySelector(".btn");
const background = document.querySelector(".container");
let colors =["green","red","blue","white","yellow"];

btn.addEventListener("click",()=>{
    let randomClr=Math.floor(Math.random()*5);
   background.style.backgroundColor = colors[randomClr];
});