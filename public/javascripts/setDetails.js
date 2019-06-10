import { removeDollar } from "./removeDollar.js";
export let priceArr;

export function setDetails() {
  console.log("setDetails");
  let box = document.querySelectorAll(".box");
  let shoeDetails = document.querySelector(".shoeDetails");
  let cancel = document.querySelector("#cancel");
  let cover = document.querySelector(".cover");
  let coverContent = document.querySelector(".coverContent");
  let no = document.querySelector("#no");

  for (let i = 0; i < box.length; i++) {
    box[i].onclick = e => {
      let cPic = coverContent.querySelector("#coverPic").src;
      let cPrice = coverContent.querySelector("#coverPrice").innerText;
      let cName = coverContent.querySelector("#coverName").innerText;

      shoeDetails.classList.add("openDetails");
      shoeDetails.classList.remove("closeDetails");

      let t = e.target.closest(".box");
      shoeName.innerText = coverName.innerText = t.querySelector(
        "#boxTitle"
      ).innerText;
      priceTag.innerText = coverPrice.innerText = t.querySelector(
        "#boxPrice"
      ).innerText;
      coverPic.src = t.querySelector("#boxImg").src;

      //console.log(hID);

      priceArr = removeDollar(t.querySelector("#boxPrice").innerText);

      cover.style.pointerEvents = "none";

      cancel.onclick = () => {
        shoeDetails.classList.add("closeDetails");
        shoeDetails.classList.remove("openDetails");
        no.innerText = 1;
        coverPic.src = cPic;
        coverName.innerText = cName;
        coverPrice.innerText = cPrice;
        cover.style.pointerEvents = "auto";
      };
    };
  }

  cover.onclick = () => {
    shoeDetails.classList.add("openDetails");
    shoeDetails.classList.remove("closeDetails");

    shoeName.innerText = coverName.innerText;
    priceTag.innerText = coverPrice.innerText;

    priceArr = removeDollar(coverPrice.innerText);

    cancel.onclick = () => {
      shoeDetails.classList.add("closeDetails");
      shoeDetails.classList.remove("openDetails");

      no.innerText = 1;
    };
  };
}
