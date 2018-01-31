createGrid();



// function to create grid
function createGrid() {
  let gridSize = 16;

  for(i = 0; i < gridSize*gridSize; i++){
    const square=document.createElement("div");
    square.id="grid-square";
    square.addEventListener("mouseover", function() {this.style.backgroundColor = "red"})
    document.getElementById("squares").appendChild(square);
  }
}
// function to change color when hover
