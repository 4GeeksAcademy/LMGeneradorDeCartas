/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let palos = ["♦", "♥", "♠", "♣"];
  let number = ["A", "K", "Q", "J", 12, 11, 10, 9, 8, 7, 6, 5, 4, 3];

  function randomIndex(arr) {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }

  let randomPalos = randomIndex(palos);
  let randomNumeros = randomIndex(number);

  let paloarr = document.querySelector("#palotop");
  let numero = document.querySelector("#num");
  let paloabj = document.querySelector("#palobut");

  paloarr.innerHTML = randomPalos;
  numero.innerHTML = randomNumeros;
  paloabj.innerHTML = randomPalos;

  if (randomPalos === "♦" || randomPalos === "♥") {
    paloarr.style.color = "red";
    paloabj.style.color = "red";
  }
};
