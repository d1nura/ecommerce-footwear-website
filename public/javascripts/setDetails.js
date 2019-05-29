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

      priceTag.innerText = t.querySelector("h3").innerText;
      shoeName.innerText = t.querySelector("p").innerText;

      const same = () => {
        coverPic.src = t.querySelector("img").src;
        coverPrice.innerText = t.querySelector("h3").innerText;
        coverName.innerText = t.querySelector("p").innerText;
      };
      same();
      cover.onclick = () => {
        same();
      };
    };
  }

  let cover = document.querySelector(".cover");

  cover.onclick = e => {
    console.log(cover);
    cP = coverPic.src;
    priceT = coverPrice.innerText;
    name = coverName.innerText;

    let t = e.target.closest(".coverContent");
    shoeDetails.style.transform = "translate(100%)";
    priceTag.innerText = t.querySelector("h3").innerText;
    shoeName.innerText = t.querySelector("p").innerText;
  };

  cancel.onclick = () => {
    shoeDetails.style.transform = "translate(0%)";
    coverPic.src = cP;
    coverName.innerText = name;
    coverPrice.innerText = priceT;
  };
}
