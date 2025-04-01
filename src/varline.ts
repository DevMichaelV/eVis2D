import { nanoid } from 'nanoid'

export function addVarline(): HTMLDivElement {
    const id = String(nanoid(10)) as string;
    const varLine = document.createElement("div") as HTMLDivElement;
    const varNameInput = document.createElement("input") as HTMLInputElement;
    const varValueInput = document.createElement("input") as HTMLInputElement;
    const delvarBtn = document.createElement("button") as HTMLButtonElement;
    const addvarBtn = document.createElement("button") as HTMLButtonElement;
    
    varLine.id = "vLine-" + id;
    varLine.className = "varLine";
    console.log("Adding", varLine.id)

    varNameInput.setAttribute("data-name", id);
    varNameInput.type = "text";
    varNameInput.placeholder = "varName";
    varNameInput.required = true;
    
    varValueInput.setAttribute("data-value", id);
    varValueInput.type = "number";
    varValueInput.placeholder = "varValue";
    varValueInput.required = true;
    
    delvarBtn.innerText = "x";
    delvarBtn.title = "Remove variable";
    delvarBtn.className = "delVarBtn";
    delvarBtn.onclick = () => { removeVarline(varLine) };
    
    addvarBtn.innerText = "+";
    addvarBtn.title = "Add new variable";
    addvarBtn.className = "addVarBtn";
    addvarBtn.onclick = () => {
        const parent = document.getElementById(varLine.id) as HTMLElement;
        // Add the new varLine right after this varLine
        if (parent && parent.className === "varLine") {
            parent.parentElement?.insertBefore(addVarline(), parent.nextSibling)
        }
    };

    varLine.appendChild(varNameInput);
    varLine.appendChild(varValueInput);
    varLine.appendChild(delvarBtn);
    varLine.appendChild(addvarBtn);

    return varLine;
}

function removeVarline(varLine: HTMLDivElement) {
    const parent = varLine.parentElement as HTMLElement
    const lineCount = document.querySelectorAll(".varLine").length || 0;
    if (lineCount) {
        // If there is only one "varLine," do not remove the "varLine"
        if (lineCount <= 1) return

        // Otherwise, remove the "varLine"
        else {
            if (parent) parent.removeChild(varLine);
        }
    }
}