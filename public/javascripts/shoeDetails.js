import { removeDollar } from "./removeDollar.js";

export function shoeDetails() {
  console.log("shoeDetails");
  let dec = document.querySelector("#dec");
  let inc = document.querySelector("#inc");
  let no = document.querySelector("#no");

  const priceArr = [];

  dec.onclick = () => {
    if (parseInt(no.innerText) !== 1) {
      no.innerText = parseInt(no.innerText) - 1;
      priceTag.innerText =
        "$" + (removeDollar(priceTag.innerText) - priceArr[0]).toFixed(2);
    }
  };

  inc.onclick = () => {
    priceArr.push(removeDollar(priceTag.innerText));
    no.innerText = parseInt(no.innerText) + 1;
    priceTag.innerText =
      "$" + (priceArr[0] * parseInt(no.innerText)).toFixed(2);
  };
}
