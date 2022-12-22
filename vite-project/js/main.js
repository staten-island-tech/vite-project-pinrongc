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



const DOMselectors ={
  theme: document.getElementById ("change-theme"),
  all: document.getElementById ("all"),
  breakfast: document.getElementById ("breakfast"),
  lunch: document.getElementById ("lunch"),
  dinner: document.getElementById ("dinner"),
  less:document.getElementById ("price1"),
  greater:document.getElementById ("price2")

}
console.log(DOMselectors.theme)


const filter = {
breakfast: menu
  .filter((food) => food.type.includes("breakfast"))
  .map((food)=> food),
lunch: menu
  .filter((food) => food.type.includes("lunch"))
.map((food)=> food),
dinner: menu
  .filter((food) => food.type.includes("dinner"))
  .map((food)=> food),
less: menu
  .filter((food) => food.price <10)
  .map((food)=> food),
greater: menu
  .filter((food) => food.price >=10)
.map((food)=> food)
}


DOMselectors.all.addEventListener("click", function() {
  remove();
  menu
  .forEach(cards)
})

DOMselectors.breakfast.addEventListener("click", function() {
  remove();
 filter.breakfast.forEach(cards)

})

DOMselectors.lunch.addEventListener("click", function() {
  remove();
filter.lunch
  .forEach(cards)

})

DOMselectors.dinner.addEventListener("click", function() {
  remove();
  filter.dinner
  .forEach(cards)

})

DOMselectors.less.addEventListener("click", function() {
  remove();
  filter.less
  .forEach(cards)
 })

 DOMselectors.greater.addEventListener("click", function() {
  remove();
  filter.greater
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

