import { removeDollar } from "./removeDollar.js";

export function shoppingItems() {
  console.log("shoppingItems");
  let shoppingItems = document.querySelector(".shoppingItems");
  let inc = shoppingItems.querySelectorAll("#inc");
  let dec = shoppingItems.querySelectorAll("#dec");
  let itemPrice = document.querySelectorAll(".itmPrice");
  let remove = document.querySelectorAll("#remove");

  if (shoppingItems.children.length > 0) {
    let tp = [];

    for (let i = 0; i < shoppingItems.children.length; i++) {
      let oPArr = [];
      inc[i].onclick = e => {
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

        totalPrice.innerText = (
          parseFloat(totalPrice.innerText) + oPArr[0]
        ).toFixed(2);
      };

      dec[i].onclick = e => {
        let it = e.target.closest("#itemDiv");
        let oPrice =
          removeDollar(it.querySelector(".itmPrice").innerText) /
          parseInt(it.querySelector("#no").innerText);
        oPArr.push(oPrice);

        if (it.querySelector("#no").innerText > 1) {
          it.querySelector("#no").innerText =
            parseInt(it.querySelector("#no").innerText) - 1;

          it.querySelector(".itmPrice").innerText =
            "$" +
            (
              removeDollar(it.querySelector(".itmPrice").innerText) - oPArr[0]
            ).toFixed(2);

          totalPrice.innerText = (
            parseFloat(totalPrice.innerText) - oPArr[0]
          ).toFixed(2);
        }
      };

      tp.push(removeDollar(itemPrice[i].innerText));

      totalPrice.innerText = tp.reduce((p, n) => {
        return (parseFloat(p) + parseFloat(n)).toFixed(2);
      });

      remove[i].onclick = e => {
        shoppingItems.removeChild(e.target.closest("#itemDiv"));
        totalPrice.innerText = (
          parseFloat(totalPrice.innerText) -
          removeDollar(
            e.target.closest("#itemDiv").querySelector(".itmPrice").innerText
          )
        ).toFixed(2);
      };
    }

    //console.log(totalPrice.innerText);
  }
}
