createGrid();
document.getElementById("shakeButton").addEventListener("click", function() {shake()});
document.getElementById("createNewGridButton").addEventListener("click", function() {createGrid()})



function shake() {
   while (squares.firstChild) {
      squares.removeChild(squares.firstChild);
   }
}


// function to create grid
function createGrid() {
  let newGridSize = document.getElementById("gridSizeForm").value;
  let squareWidth = 960 / newGridSize;
  for(i = 0; i < newGridSize * newGridSize; i++){
    const square=document.createElement("div");
    square.id="grid-square";
    square.addEventListener("mouseover", function() {this.style.backgroundColor = "red"})
    document.getElementById("squares").appendChild(square);
    square.style.width = squareWidth + "px";
    square.style.height = squareWidth + "px";
  }
console.log(squareWidth);
}

// function to change color when hover
