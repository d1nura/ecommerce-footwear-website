export function setData() {
  console.log("setData");

  let leftArrow = document.querySelector("#leftArrow");
  let rightArrow = document.querySelector("#rightArrow");

  leftArrow.onclick = () => {
    console.log("left Arrow");
  };

  rightArrow.onclick = () => {
    console.log("right arrow");
  };

  fetch("/data.json")
    .then(res => res.json())
    .then(data => {
      console.log(data[0][0]);
      selectCover(0, data);
      selectShowBoxes(0, data);
      //converContent.querySelector('img').src=
    });
}

function selectCover(n, data) {
  let coverContent = document.querySelector(".coverContent");
  coverContent.querySelector("img").src = data[n][0].pic;
  coverContent.querySelector("h3").innerText = data[n][0].price;
  coverContent.querySelector("p").innerText = data[n][0].title;
}

function selectShowBoxes(x, data) {
  let boxes = document.querySelectorAll(".box");

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = `
      <img src="${data[x][i + 1].pic}"/>
      <h3>${data[x][i + 1].price}</h3>
      <p>${data[x][i + 1].title}</p>
    `;
  }
}
