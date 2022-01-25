// @ts-nocheck

let genNewColor = document.querySelector("#changeColor");
let containerColor = document.querySelector("#container");
let hex = document.querySelector(".hex");

genNewColor.addEventListener("click", () => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16); // RANDOM HEX COLOR
  containerColor.style.backgroundColor = "#" + randomColor;
  hex.innerHTML = "#" + randomColor;
});

/*
const setHex = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  containerColor.style.backgroundColor = "#" + randomColor;
  hex.innerHTML = "#" + randomColor;
};

genNewColor.addEventListener("click", setHex);
setHex();
*/
