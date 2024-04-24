// selecting all the .box(divs) inside the .container(div)
let boxes = document.querySelector(".container").children;

// converting the HTML collection (boxes) into array 
Array.from(boxes).forEach(e => {
    e.style.backgroundColor = generateRandomColor();    // changing the color of each .box(div)
});

function generateRandomColor() {
    let colorCode = "#";
    const hexValues = "0123456789ABCDEF";

    for (let i = 0; i < 6; i++) {
        colorCode += hexValues[Math.floor(Math.random() * 16)];
    }

    return colorCode;
}
