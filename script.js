const body = document.body;
const root = document.querySelector(":root");
const rootStyles = getComputedStyle(root);

let container = document.querySelector("#container");

let x = prompt("Enter grid size:");

root.style.setProperty("--gridSize", x)
let gridSize = rootStyles.getPropertyValue("--gridSize");

for (let i = 0; i < gridSize; i++) {
    let newDiv = document.createElement("div");
    newDiv.className = "square";
    container.append(newDiv);

    newDiv.addEventListener("mouseover", () => {
        newDiv.classList.add("hovered");
    });

}


