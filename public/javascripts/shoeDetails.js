import { removeDollar } from "./removeDollar.js";
import { addToBag } from "./addToBag.js";
import { priceArr } from "./setDetails.js";

export function shoeDetails() {
  console.log("shoeDetails");
  let dec = document.querySelector("#dec");
  let inc = document.querySelector("#inc");
  let no = document.querySelector("#no");
  let addBag = document.querySelector("#addToBag");

  dec.onclick = () => {
    if (parseInt(no.innerText) !== 1) {
      no.innerText = parseInt(no.innerText) - 1;
      priceTag.innerText =
        "$" + (removeDollar(priceTag.innerText) - priceArr).toFixed(2);
    }
  };

  inc.onclick = () => {
    no.innerText = parseInt(no.innerText) + 1;
    priceTag.innerText = "$" + (priceArr * parseInt(no.innerText)).toFixed(2);
  };

  addBag.onclick = () => {
    addToBag();
  };
}
