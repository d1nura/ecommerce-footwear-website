export function setDetails() {
  console.log("setDetails");
  let box = document.querySelectorAll(".box");
  let shoeDetails = document.querySelector(".shoeDetails");
  let cancel = document.querySelector("#cancel");

  let cP, name, priceT;

  for (let i = 0; i < box.length; i++) {
    box[i].onclick = e => {
      cP = coverPic.src;
      priceT = coverPrice.innerText;
      name = coverName.innerText;

      shoeDetails.style.transform = "translate(100%)";
      let t = e.target.closest(".box");
      //t.querySelector("img").src
      // console.log(t.querySelector("p").innerText);
      shoeDetails.querySelector("#priceTag").innerText = t.querySelector(
        "h3"
      ).innerText;
      shoeDetails.querySelector("#shoeName").innerText = t.querySelector(
        "p"
      ).innerText;
      coverPic.src = t.querySelector("img").src;
      coverPrice.innerText = t.querySelector("h3").innerText;
      coverName.innerText = t.querySelector("p").innerText;
    };
  }

  cancel.onclick = () => {
    shoeDetails.style.transform = "translate(0%)";
    coverPic.src = cP;
    coverName.innerText = name;
    coverPrice.innerText = priceT;
  };
}
