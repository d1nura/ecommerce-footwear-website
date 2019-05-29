export function setData() {
  console.log("setData");

  let leftArrow = document.querySelector("#leftArrow");
  let rightArrow = document.querySelector("#rightArrow");
  let sup = document.querySelector("sup");

  fetch("/data.json")
    .then(res => res.json())
    .then(data => {
      selectCover(0, data);
      selectShowBoxes(0, data);
      let no = 0;
      rightArrow.onclick = () => {
        console.log(no);
        if (no < 2) {
          no++;
          selectCover(no, data);
          selectShowBoxes(no, data);
          sup.innerText = parseInt(sup.innerText) + 1;
        }
      };
      leftArrow.onclick = () => {
        console.log(no);
        if (no > 0) {
          no--;
          selectCover(no, data);
          selectShowBoxes(no, data);
          sup.innerText = parseInt(sup.innerText) - 1;
        }
      };
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
