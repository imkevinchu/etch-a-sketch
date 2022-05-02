const container = document.getElementById("container");

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
    e.target.style.backgroundColor = "yellow";
  }
});
