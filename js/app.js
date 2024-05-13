// ton code ici

const app = {
  grid: document.querySelector(".grid"),
  buttonValidate: document.querySelector(".button-validate"),
  inputGrid: document.querySelector(".input-grille"),
  inputPixels: document.querySelector(".input-pixels"),
  paletteColors: document.querySelectorAll("footer section div"),
  gridSize: 8,
  pixelSize: 1,
  style: "plain",

  // create a new grid with input options
  validateHandler: function (e) {
    e.preventDefault();
    app.grid.textContent = "";
    app.createGrid(app.inputGrid.value);
  },

  // change pixel color on click
  changePixelColor: function (e) {
    e.target.className = "pixel";
    e.target.classList.add(app.style);
  },

  changeCurrentColor: function (e) {
    app.style = e.target.classList.value;
  },

  createGrid: function (size) {
    app.pixelSize = app.inputPixels.value;
    // set css grid rows and columns
    app.grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    app.grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    // create pixel divs
    for (let i = 0; i < size * size; i++) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("pixel");
      newDiv.style.height = `${app.pixelSize}px`;
      newDiv.style.width = `${app.pixelSize}px`;
      app.grid.appendChild(newDiv);
    }
  },

  // initialize events and first grid
  init: function (chooseGridSize) {
    app.grid.addEventListener("click", app.changePixelColor);
    app.buttonValidate.addEventListener("click", app.validateHandler);
    app.createGrid(chooseGridSize);
    for (color of app.paletteColors) {
      color.addEventListener("click", app.changeCurrentColor);
    }
  },
};

app.init(8);
