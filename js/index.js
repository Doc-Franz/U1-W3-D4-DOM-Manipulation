// Generare le celle

const numberOfCells = 76;
const totalNumbers = [];

const createCells = () => {
  const tombola = document.getElementById("tombola");

  for (let i = 0; i < numberOfCells; i++) {
    const cellNumber = document.createElement("div");
    cellNumber.className = "cell";

    const cellNumber1 = document.createElement("h1");
    cellNumber1.innerText = i + 1;
    cellNumber1.style.padding = "10px";
    cellNumber1.style.margin = "0";
    totalNumbers.push(cellNumber);

    tombola.appendChild(cellNumber);
    cellNumber.appendChild(cellNumber1);
  }
};

console.log(totalNumbers);

// Generazione di un numero random

const btn = document.querySelector("#random-number");
let previousNumber = 0;
const alreadyExtractedNumbers = [];

btn.onclick = function (e) {
  const numberSelected = Math.floor(Math.random() * numberOfCells);

  const previousCell = totalNumbers[previousNumber];
  previousCell.style.color = "black";

  const selectedCell = totalNumbers[numberSelected];
  selectedCell.style.color = "red";
  selectedCell.style.backgroundColor = "white";
  previousNumber = numberSelected;
};

// Caricamento della pagina

window.onload = () => {
  createCells();
  //   selectRandomNumber();
};
