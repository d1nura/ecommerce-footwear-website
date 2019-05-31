import { removeDollar } from "./removeDollar.js";

export function shoppingItems() {
  console.log("shoppingItems");
  let shoppingItems = document.querySelector(".shoppingItems");
  let inc = shoppingItems.querySelectorAll("#inc");
  let dec = shoppingItems.querySelectorAll("#dec");
  let itemPrice = document.querySelectorAll(".itmPrice");

  if (shoppingItems.children.length > 0) {
    console.log(itemDiv);
    let tp = [];

    for (let i = 0; i < shoppingItems.children.length; i++) {
      let oPArr = [];
      inc[i].onclick = e => {
        console.log("inc");
        let it = e.target.closest("#itemDiv");
        let oPrice =
          removeDollar(it.querySelector(".itmPrice").innerText) /
          parseInt(it.querySelector("#no").innerText);
        oPArr.push(oPrice);

        it.querySelector("#no").innerText =
          parseInt(it.querySelector("#no").innerText) + 1;

        it.querySelector(".itmPrice").innerText =
          "$" +
          (oPArr[0] * parseInt(it.querySelector("#no").innerText)).toFixed(2);

        //totalPrice.innerText =
      };

      dec[i].onclick = e => {
        console.log(e.target.value);
        let it = e.target.closest("#itemDiv");
        let oPrice =
          removeDollar(it.querySelector(".itmPrice").innerText) /
          parseInt(it.querySelector("#no").innerText);
        oPArr.push(oPrice);

        console.log(oPArr);
        if (it.querySelector("#no").innerText > 1) {
          it.querySelector("#no").innerText =
            parseInt(it.querySelector("#no").innerText) - 1;

          it.querySelector(".itmPrice").innerText =
            "$" +
            (
              removeDollar(it.querySelector(".itmPrice").innerText) - oPArr[0]
            ).toFixed(2);
        }
      };

      tp.push(removeDollar(itemPrice[i].innerText));
      console.log(tp);

      totalPrice.innerText = tp.reduce((p, n) => {
        return (parseFloat(p) + parseFloat(n)).toFixed(2);
      });
    }

    //console.log(totalPrice.innerText);
  }
}
