let i = 0;

export function addToBag() {
  console.log("addtobag");

  localStorage.setItem(`item${i}`, [
    coverPic.src,
    shoeName.innerText,
    priceTag.innerText,
    selectVal.value,
    no.innerText
  ]);

  let obj = Object.values(localStorage)[0].split(",");
  let dataArr = [];

  for (let i of Object.keys(localStorage)) {
    //console.log(i);
    set.add(i);
  }

  let itemDiv = document.createElement("div");
  let shpItems = document.querySelector(".shoppingItems");
  itemDiv.setAttribute("id", "itemDiv");
  shpItems.appendChild(itemDiv);
  itemDiv.innerHTML = `
    <img src='${obj[0]}'>
    <div>
      <h2>${obj[1]}</h2>
      <p>${obj[2]}</p>
    </div>
    <div id="amount">
      <button id="inc">-</button>
      <p id="no">${obj[4]}</p>
      <button id="dec">+</button>
    </div>  
  `;
  i++;
}
