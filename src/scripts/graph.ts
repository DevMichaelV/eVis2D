const canvas = document.getElementById('graphCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')! as CanvasRenderingContext2D;
const defaultColor: string = "#C0C0C0";

// Function to graph the equation
export function graphEquation(equation: string): void {
    const lineColor: string = (document.getElementById("lineColor") as HTMLInputElement)?.value ?? defaultColor;
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

// Function to draw the x- and y-axes
export function drawAxes(): void {
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

// Function to change canvas size
export function resizeCanvas(): void {
    const appWidth = document.getElementById("app")?.getBoundingClientRect().width;
    const borderWidth: number = 3;
    if (appWidth) {
        canvas.width = appWidth - (borderWidth * 2);
    } else {
        canvas.width = 500 - (borderWidth * 2);
    }

    // Set the height to a 16:9 ratio with the width
    canvas.height = canvas.width * 0.5625;
}

// Function to find all the custom variables
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