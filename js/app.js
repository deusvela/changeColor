const button = document.getElementById("btn");
const changeTextColor = document.querySelector(".color");
const colors = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F"];

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

function getRandomColor() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += colors[getRandomNumber()]
    }
    return hexColor;
}

button.addEventListener("click", () => {
    document.body.style.backgroundColor = changeTextColor.textContent = changeTextColor.style.color = getRandomColor();
})
