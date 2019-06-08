import { shoppingItemsLoad } from "./shoppingItemsLoad.js";

let i = 0;
let map = new Map();

export function addToBag() {
  // console.log("addtobag");
  let flexDiv = document.querySelector(".flexDiv");
  let number = flexDiv.querySelector("#no");
  // console.log(cartNo);

  localStorage.setItem(`item${i}`, [
    hID.innerText,
    coverPic.src,
    shoeName.innerText,
    priceTag.innerText,
    selectVal.value,
    number.innerText
  ]);

  //console.log(number.innerText);

  for (let i of Object.keys(localStorage)) {
    map.set(i, i);
  }
  let obj = localStorage.getItem(map.get(`item${i}`)).split(",");
  console.log(obj);
  shoppingItemsLoad(obj);

  if (localStorage.getItem("cartNo")) {
    cartNo.innerText =
      parseInt(localStorage.getItem("cartNo")) + parseInt(number.innerText);
    localStorage.setItem("cartNo", cartNo.innerText);
    console.log(true);
  } else {
    localStorage.setItem("cartNo", parseInt(number.innerText));
    cartNo.innerText = localStorage.getItem("cartNo");
    console.log(false);
  }

  if (localStorage.getItem("cartNo") > 0) {
    cartNo.style.display = "block";
  }
  i++;
}
