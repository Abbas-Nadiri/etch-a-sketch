const body = document.body;

let container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
    let newDiv = document.createElement("div");
    newDiv.className = "square";
    container.append(newDiv);
}