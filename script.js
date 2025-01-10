"use strict";

// To input items in localStorage
// const colorsArray = ["blue", "green", "white"];
// localStorage.setItem("colors", JSON.stringify(colorsArray));

// const numbersArray = [1, 2, 3];
// localStorage.setItem("numbers", JSON.stringify(numbersArray));

// To retrieve items from localStorage
// const colorsData = JSON.parse(localStorage.getItem("colors"));
// console.log(colorsData);

// const numbersData = JSON.parse(localStorage.getItem("numbers"));
// console.log(numbersData);

// To delete 1 item from localStorage
// localStorage.removeItem("colors");

// To delete all items from localStorage
// localStorage.clear();

// const ul = document.querySelector("ul");
// const input = document.getElementById("item");
// Array to store to-do items
// let itemsArray = localStorage.getItem("items")
//   ? JSON.parse(localStorage.getItem("items"))
//   : [];

// itemsArray.forEach(liMaker);

// function liMaker(text) {
//   const li = document.createElement("li");
//   li.textContent = text;
//   ul.appendChild(li);
// }

// function add() {
//   itemsArray.push(input.value);
//   localStorage.setItem("items", JSON.stringify(itemsArray));
//   liMaker(input.value);
//   input.value = "";
// }

// function del() {
//   localStorage.clear();
//   ul.innerHTML = "";
//   itemsArray = [];
// }

const colorBoxes = document.getElementsByClassName("color-boxes")[0];
const color = document.getElementById("color");
const hex = document.getElementById("hex");

let colorsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

colorsArray.forEach(divMaker);
function divMaker(text) {
  const div = document.createElement("div");
  div.className = "box";
  div.style.background = text.color_name;
  div.innerHTML =
    `<h2>` + text.color_name + `</h2>` + `<h2>` + text.hex_code + `</h2>`;
  colorBoxes.appendChild(div);
}

function add() {
  var color_info = {
    color_name: color.value,
    hex_code: hex.value,
  };

  colorsArray.push(color_info);
  localStorage.setItem("items", JSON.stringify(colorsArray));
  divMaker(colorsArray[colorsArray.length - 1]);
  color.value = "";
  hex.value = "";
}

function del() {
  localStorage.clear();
  colorsArray = [];
  colorBoxes.innerHTML = "";
}
