
const calculator = document.getElementById("calculator");
const display = document.getElementById("numDisplay");
const history = document.getElementById("history");

let currentEq = "";
let results = [];

calculator.addEventListener("click", (event) => {
    const isButton = event.target.nodeName === "BUTTON";
    if (!isButton) return;
    const clicked = event.target.id;
    console.log("Clicked: " + clicked);

    switch (clicked){
        case "equalBtn":
            solve(display.value);
            break;
        case "clearBtn":
            display.value = "";
            break;
        case "plusBtn":
            display.value += " + ";
            break;
        case "minusBtn":
            display.value += " - ";
            break;
        case "multBtn":
            display.value += " * ";
            break;
        case "divBtn":
            display.value += " / ";
            break;
        case "dotBtn":
            display.value += ".";
            break;
        case "1b":
            display.value += "1";
            break;
        case "2b":
            display.value += "2";
            break;
        case "3b":
            display.value += "3";
            break;
        case "4b":
            display.value += "4";
            break;
        case "5b":
            display.value += "5";
            break;
        case "6b":
            display.value += "6";
            break;
        case "7b":
            display.value += "7";
            break;
        case "8b":
            display.value += "8";
            break;
        case "9b":
            display.value += "9";
            break;
        case "0b":
            display.value += "0";
            break;
        case "clearHistory":
            history.innerHTML = "<h3>Equation History</h3><br>";
            results = [];
    }


})

function insertVal(n){
    display.innerHTML = n;
}

const fadeLeft = "animate__animated animate__fadeInLeft";
function solve(eq){
    if (eq)
    {
        const ans = eval(eq);
        console.log(`Solve called with value ${eq}`);

        history.innerHTML = "<h3>Equation History</h3><br>" 
            + results.join("") +  `<li class="${fadeLeft}">${eq} = ${ans}</li>`;
        results.push(`<li>${eq} = ${ans}</li>`)
        display.value = `${ans}`;
    }
}

