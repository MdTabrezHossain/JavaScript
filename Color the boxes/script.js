// selecting all the .box(divs) inside the .container(div)
let boxes = document.querySelector(".container").children;

// converting the HTML collection (boxes) into array for iteration
Array.from(boxes).forEach(e => {
    e.style.backgroundColor = generateRandomColor();    // setting the color of each .box(div)
});

function generateRandomColor() {
    // initializing the colorCode with hash symbol 
    let colorCode = "#";

    // initializing the hexValues with all hexadecimal values
    const hexValues = "0123456789ABCDEF";

    // Generating a 6-digit hexadecimal color code
    for (let i = 0; i < 6; i++) {

        // appending a random character from hexValues in colorCode
        colorCode += hexValues[Math.floor(Math.random() * 16)];
    }

    // returning the generated hexadecimal color code
    return colorCode;

}
