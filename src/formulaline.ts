export function addFormulaLine() {
    const formulaLine = document.createElement("div") as HTMLDivElement;
    const formulaInput = document.createElement("input") as HTMLInputElement;
    const graphBtn = document.createElement("button") as HTMLButtonElement;

    formulaLine.className = "formulaLine";

    formulaInput.id = "equationInput";
    formulaInput.type = "text";
    formulaInput.required = true;
    formulaInput.placeholder = "e.g., x*x, x**x"
    formulaInput.value = "x**x";

    graphBtn.id = "graphButton";
    graphBtn.innerText = "Graph";

    formulaLine.appendChild(formulaInput);
    formulaLine.appendChild(graphBtn);

    return formulaLine;
}