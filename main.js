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
  let gridSize = 100;

  for(i = 0; i < gridSize*gridSize; i++){
    const square=document.createElement("div");
    square.id="grid-square";
    square.addEventListener("mouseover", function() {this.style.backgroundColor = "red"})
    document.getElementById("squares").appendChild(square);
  }
}
// function to change color when hover
