
let cube = document.createElement("DIV");
let topFace = document.createElement("DIV");
let leftFace = document.createElement("DIV");
let rightFace = document.createElement("DIV");

cube.classList.add("cube");
topFace.classList.add("cubeFace");
topFace.classList.add("top");
leftFace.classList.add("cubeFace");
leftFace.classList.add("left");
rightFace.classList.add("cubeFace");
rightFace.classList.add("right");


cube.appendChild(topFace);
cube.appendChild(leftFace);
cube.appendChild(rightFace);
document.body.appendChild(cube);