import { addVarline } from './scripts/varline.ts';
import { fontIcons } from './scripts/icons.ts';
import { drawAxes, resizeCanvas, graphEquation } from './scripts/graph.ts';

//const { baseURL } = import.meta.env;
//const expressionBuilder = document.getElementById('expressionBuilder') as HTMLDivElement;
const customVars = document.getElementById("customVars") as HTMLDivElement;
const graphBtn = document.getElementById('graphBtn') as HTMLButtonElement;
const graphSettingsBtn = document.getElementById('graphSettingsBtn') as HTMLButtonElement;
const pageFooter = document.getElementById('pageFooter') as HTMLElement;

// Function to retrieve and embed the build timestamp
async function fetchTimestamp() {
    const buildTime = (await import('./scripts/timestamp.ts')).BUILD_TIMESTAMP;
    if (buildTime) {
        pageFooter.innerText = "Last built: " + buildTime + " (US/Central)";
    }
}

// Add initial Variable line
customVars.appendChild(addVarline());

// Add an event listener to the "Graph" button
const expressionInput = document.getElementById('expressionInput') as HTMLInputElement;
graphBtn.addEventListener('click', () => {
    const equation: string = expressionInput.value;
    graphEquation(equation);
});


window.onload = () => {
    graphSettingsBtn.appendChild(fontIcons.gear.node[0]);
    fetchTimestamp();
    resizeCanvas();
    drawAxes();
}

window.onresize = () => {
    resizeCanvas();
    drawAxes();
}