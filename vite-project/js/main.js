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
  dinner: document.getElementById ("dinner")
}
console.log(DOMselectors.theme)

DOMselectors.breakfast.addEventListener("click", function() {
  menu
  .filter((food) => food.type.includes("breakfast"))
  .forEach (
    console.log(food.name)
  )
})




menu.forEach (cards);