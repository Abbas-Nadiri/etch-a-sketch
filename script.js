const body = document.body;
const root = document.querySelector(":root");
const rootStyles = getComputedStyle(root); /* access CSS :root style variables*/

let container = document.querySelector("#container");

let x = prompt("Enter grid size:") ** 2; 

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
    const delet = document.getElementsByClassName("square");
    while(delet.length > 0) {
        delet[0].parentNode.removeChild(delet[0]);
    };

    let newGridSize = prompt("Enter new grid size:") ** 2
    root.style.setProperty("--gridSize", newGridSize);
    createGrid(newGridSize);
})



