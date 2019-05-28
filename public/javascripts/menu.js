export function menu() {
  console.log("menu..");

  let menuIcon = document.querySelector("#menuIcon");
  let menu = document.querySelector(".menu");

  menuIcon.onclick = () => {
    console.log("menuIcon");
    menu.classList.toggle("showMenu");
  };
}
