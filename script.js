const body = document.body;
const root = document.querySelector(":root");
const rootStyles = getComputedStyle(root); /* access CSS :root style variables*/

let container = document.querySelector("#container");


let x = NaN;
while(x > 10000 || isNaN(x)) {
    x = prompt("Enter grid size (100x100 maximum):") ** 2; 
}

root.style.setProperty("--gridSize", x); /* changes --gridSize CSS variable to user input */
let gridSize = rootStyles.getPropertyValue("--gridSize"); /* obtains latest size for gridSize CSS variable */

function createGrid(size) { 
    for (let i = 0; i < size; i++) {

        let newDiv = document.createElement("div");
        newDiv.className = "square";
        container.append(newDiv);
    
        newDiv.addEventListener("mouseover", () => {
            newDiv.classList.add("hovered");
        });
    
    }
}

createGrid(gridSize);

let button = document.createElement("button");
button.textContent = "Reset/Change grid size";
body.append(button);

button.addEventListener("click", () => {
let newGridSize = prompt("Enter new grid size:") ** 2

    if(newGridSize > 10000) {

        alert("Grid size too large, maximum 100x100. Enter a different number.");

    } else if (isNaN(newGridSize)){

        alert("That's not a number...")
        
    } else {

        const delet = document.getElementsByClassName("square");
        while(delet.length > 0) {
            delet[0].parentNode.removeChild(delet[0]);
        };

        root.style.setProperty("--gridSize", newGridSize);
        createGrid(newGridSize);

    };
});



