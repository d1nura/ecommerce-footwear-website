//import { addToBag } from "./addToBag.js";
import { shoppingItemsLoad } from "./shoppingItemsLoad.js";

export function onload() {
  if (localStorage.getItem("cartNo")) {
    console.log(cartNo);
    console.log(localStorage.getItem("cartNo"));
    cartNo.innerText = localStorage.getItem("cartNo");
  }

  if (localStorage.getItem("cartNo") > 0) {
    cartNo.style.display = "block";
  } else {
    cartNo.style.display = "none";
  }

  console.log(localStorage.length);
  if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i++) {
      if (Object.keys(localStorage)[i] == "cartNo") continue;
      console.log(Object.values(localStorage)[i].split(","));
      let obj = Object.values(localStorage)[i].split(",");
      shoppingItemsLoad(obj);
    }
  }
}
