export function setDetails() {
  console.log("setDetails");
  let box = document.querySelectorAll(".box");
  let shoeDetails = document.querySelector(".shoeDetails");
  let cancel = document.querySelector("#cancel");
  let cover = document.querySelector(".cover");
  let coverContent = document.querySelector(".coverContent");
  let no = document.querySelector("#no");
  //let shoeName = shoeDetails.querySelector("#shoeName");

  for (let i = 0; i < box.length; i++) {
    box[i].onclick = e => {
      let cPic = coverContent.querySelector("#coverPic").src;
      let cPrice = coverContent.querySelector("#coverPrice").innerText;
      let cName = coverContent.querySelector("#coverName").innerText;

      shoeDetails.style.transform = "translateX(100%)";

      let t = e.target.closest(".box");
      shoeName.innerText = coverName.innerText = t.querySelector(
        "#boxTitle"
      ).innerText;
      priceTag.innerText = coverPrice.innerText = t.querySelector(
        "#boxPrice"
      ).innerText;
      coverPic.src = t.querySelector("#boxImg").src;

      cancel.onclick = () => {
        shoeDetails.style.transform = "translate(0)";
        no.innerText = 1;
        coverPic.src = cPic;
        coverName.innerText = cName;
        coverPrice.innerText = cPrice;
      };
    };
  }

  cover.onclick = () => {
    shoeDetails.style.transform = "translateX(100%)";

    shoeName.innerText = coverName.innerText;
    priceTag.innerText = coverPrice.innerText;

    cancel.onclick = () => {
      shoeDetails.style.transform = "translate(0)";
      no.innerText = 1;
    };
  };
}
