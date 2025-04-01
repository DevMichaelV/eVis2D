import { addVarline } from './varline'
import { addFormulaLine } from './formulaline'

const defaultColor: string = "#C0C0C0";
const canvas = document.getElementById('graphCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')! as CanvasRenderingContext2D;
const formulaBuilder = document.getElementById('formulaBuilder') as HTMLDivElement;

// Function to change canvas size
function resizeCanvas(): void {
    const margin: number = 30;
    const minWidth: number = 340;
    if (window.innerWidth <= minWidth) {
        canvas.width = minWidth
    } else {
        canvas.width = window.innerWidth - (margin * 2)
    }
    canvas.height = canvas.width * 0.6667;
}


// Function to draw the x- and y-axes
function drawAxes(): void {
    const xColor: string = (document.getElementById("xColor") as HTMLInputElement)?.value ?? defaultColor;
    const yColor: string = (document.getElementById("yColor") as HTMLInputElement)?.value ?? defaultColor;

    // X-axis
    ctx.beginPath();
    ctx.strokeStyle = xColor;
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();

    // Y-axis
    ctx.beginPath();
    ctx.strokeStyle = yColor;
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
}

function getVars() {
    const varLines: NodeListOf<Element> = document.querySelectorAll(".varLine");
    const vars: { [key: string]: number } = {};

    varLines.forEach((varLine) => {
        const textField: HTMLInputElement = varLine.querySelector('input[type="text"]')!;
        const numField: HTMLInputElement = varLine.querySelector('input[type="number"]')!;
        const name: string = textField.value;
        const value: number = Number(numField.value);
        vars[name] = value;
    });
    console.log(vars);
}

// Function to graph the equation
function graphEquation(equation: string): void {
    const lineColor: string = (document.getElementById("lineColor") as HTMLInputElement)?.value?? defaultColor;
    getVars();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawAxes();
 
    ctx.beginPath();
    ctx.strokeStyle = lineColor;
 
    const xStep = 0.1;
    for (let x = -10; x <= 10; x += xStep) {
        const y = eval(equation.replace(/x/g, `(${x})`));
        const canvasX = (x * 20) + (canvas.width / 2);
        const canvasY = (y * -20) + (canvas.height / 2);
 
        if (x === -10) {
            ctx.moveTo(canvasX, canvasY);
        }
        else {
            ctx.lineTo(canvasX, canvasY);
        }
    }
    ctx.stroke();
}

// Add initial Variable line
formulaBuilder.appendChild(addVarline());

// Add the Formula Line
formulaBuilder.appendChild(addFormulaLine());

// Add an event listener to the "Graph" button
const equationInput = document.getElementById('equationInput') as HTMLInputElement;
const graphButton = document.getElementById('graphButton') as HTMLButtonElement;
graphButton.addEventListener('click', () => {
    const equation: string = equationInput.value;
    graphEquation(equation);
});


window.onload = () => {
    resizeCanvas();
    drawAxes();
}

window.onresize = () => {
    resizeCanvas();
    drawAxes();
}