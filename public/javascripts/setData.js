export function setData() {
  console.log("setData");

  fetch("/data.json")
    .then(res => res.json())
    .then(data => console.log(data[0][0]));
}
