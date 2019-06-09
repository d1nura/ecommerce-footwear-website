import { shoppingItems } from "./shoppingItems.js";

export function shoppingBag() {
  console.log("shoppingBag");
  let shpBag = document.querySelector("#shoppingBag");
  let shpDiv = document.querySelector(".shoppingBag");
  let shpClose = document.querySelector("#shpClose");
  let footer = document.querySelector(".footer");

  shpBag.onclick = () => {
    console.log("shpBag");
    //shpDiv.style.transform = "translateX(0%)";
    shpDiv.classList.add("openBag");
    shpDiv.classList.remove("closeBag");
    footer.classList.toggle("shpToggle");
    shoppingItems();
  };

  shpClose.onclick = () => {
    //shpDiv.style.transform = "translate(120%)";
    shpDiv.classList.add("closeBag");
    shpDiv.classList.remove("openBag");
    footer.classList.toggle("shpToggle");
    if (cartNo.innerText == 0) {
      cartNo.style.display = "none";
    }
  };
}
