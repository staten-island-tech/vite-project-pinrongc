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



menu.forEach (cards);