import { removeDollar } from "./removeDollar.js";

export function shoppingItems() {
  console.log("shoppingItems");
  let shoppingItems = document.querySelector(".shoppingItems");
  let inc = shoppingItems.querySelectorAll("#inc");
  let dec = shoppingItems.querySelectorAll("#dec");
  let num = shoppingItems.querySelectorAll("#no");
  let itemPrice = document.querySelectorAll(".itmPrice");
  let remove = document.querySelectorAll("#remove");

  if (shoppingItems.children.length > 0) {
    let tp = [];
    let ct = [];

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

        //getStorage(e, "inc");

        it.querySelector(".itmPrice").innerText =
          "$" +
          (oPArr[0] * parseInt(it.querySelector("#no").innerText)).toFixed(2);

        totalPrice.innerText = (
          parseFloat(totalPrice.innerText) + oPArr[0]
        ).toFixed(2);

        //console.log(cartNo.innerText);
        cartNo.innerText = parseInt(localStorage.getItem("cartNo")) + 1;
        localStorage.setItem("cartNo", cartNo.innerText);
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

          cartNo.innerText = parseInt(localStorage.getItem("cartNo")) - 1;
          localStorage.setItem("cartNo", cartNo.innerText);
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

        getStorage(e, "remove");

        cartNo.innerText =
          parseInt(localStorage.getItem("cartNo")) -
          parseInt(e.target.closest("#itemDiv").querySelector("#no").innerText);
        localStorage.setItem("cartNo", cartNo.innerText);

        //console.log(localStorage.getItem(`item${i}`));
      };

      ct.push(num[i].innerText);
      cartNo.innerText = ct.reduce((p, n) => {
        return parseInt(p) + parseInt(n);
      });
      localStorage.setItem("cartNo", cartNo.innerText);
    }

    clearCart.onclick = () => {
      shoppingItems.innerHTML = "";
      totalPrice.innerText = "0.00";
      cartNo.innerText = 0;
      localStorage.setItem("cartNo", cartNo.innerText);
      for (let l = 0; l < localStorage.length * 2; l++) {
        if (localStorage.getItem(`item${l}`)) {
          localStorage.removeItem(`item${l}`);
        }
      }
    };
  }
}

function getStorage(e, name) {
  for (let j = 0; j < localStorage.length * 2; j++) {
    if (localStorage.getItem(`item${j}`)) {
      if (
        localStorage.getItem(`item${j}`).split(",")[0] ==
        e.target.closest("#itemDiv").querySelector("span").innerText
      ) {
        if (name == "remove") {
          localStorage.removeItem(`item${j}`);
        }
      }
    }
  }
}
