const container = document.getElementById("container");
const btnNew = document.getElementById("new");
const btnClear = document.getElementById("clear");

const makeRows = (rows, cols) => {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
};

makeRows(16, 16);

document.addEventListener("mouseover", (e) => {
  if (e.target.className == "grid-item") {
    e.target.style.backgroundColor = "black";
  }

  //   setTimeout(() => {
  //     e.target.style.backgroundColor = "";
  //   }, 600);
});

const newGrid = (e) => {
  let size = prompt("How many squares per side for new grid? (Up to 100)");
  makeRows(size, size);
  clearGrid();
};

const clearGrid = () => {
  let gridTiles = container.querySelectorAll("div");
  gridTiles.forEach((gridTile) => (gridTile.style.backgroundColor = ""));
};

btnNew.addEventListener("click", newGrid);
btnClear.addEventListener("click", clearGrid);
