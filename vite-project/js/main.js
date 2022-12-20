import "../styles/style.css"
import { menu } from "./menu"

console.log(menu);

const cards = function (menu){
document.querySelector(".parent").insertAdjacentHTML(
"beforeend",
`<div class="baby">
<p>${menu.name}</p>
<img class="Classic"
  src="${menu.image}"
  alt="">
</div>`
     )
}

const remove = function () { 
document.querySelectorAll(".baby") .forEach((baby)=>baby.remove());
}

const DOMselectors ={
  theme: document.getElementById ("change-theme"),
  all: document.getElementById ("all"),
  breakfast: document.getElementById ("breakfast"),
  lunch: document.getElementById ("lunch"),
  dinner: document.getElementById ("dinner")
}
console.log(DOMselectors.theme)

DOMselectors.all.addEventListener("click", function() {
  remove();
  menu
  .forEach(cards)

})


DOMselectors.breakfast.addEventListener("click", function() {
  remove();
  menu
  .filter((food) => food.type.includes("breakfast"))
  .forEach(cards)

})

DOMselectors.lunch.addEventListener("click", function() {
  remove();
  menu
  .filter((food) => food.type.includes("lunch"))
  .forEach(cards)

})

DOMselectors.dinner.addEventListener("click", function() {
  remove();
  menu
  .filter((food) => food.type.includes("dinner"))
  .forEach(cards)

})

DOMselectors.theme.addEventListener("click", function() {
 if(document.body.classList.contains("cool")){
 document.body.classList.add("warm");
 document.body.classList.remove("cool");
 }
 else{
  document.body.classList.add("cool");
  document.body.classList.remove("warm");
}
});


menu.forEach (cards);