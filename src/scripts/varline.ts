import { nanoid } from 'nanoid';
import { fontIcons } from './icons';

export function addVarline(): HTMLDivElement {
    const id = String(nanoid(10)) as string;
    const varLine = document.createElement("div") as HTMLDivElement;
    const varNameInput = document.createElement("input") as HTMLInputElement;
    const varValueInput = document.createElement("input") as HTMLInputElement;
    const delvarBtn = document.createElement("button") as HTMLButtonElement;
    const addvarBtn = document.createElement("button") as HTMLButtonElement;

    varLine.id = "vLine-" + id;
    varLine.classList.add("grid-container", "varLine");
    console.log("Adding", varLine.id)

    varNameInput.setAttribute("data-name", id);
    varNameInput.name = "vName-" + id;
    varNameInput.type = "text";
    varNameInput.placeholder = "varName";
    varNameInput.required = true;

    varValueInput.setAttribute("data-value", id);
    varValueInput.name = "vVal-" + id;
    varValueInput.type = "number";
    varValueInput.placeholder = "varValue";
    varValueInput.required = true;

    delvarBtn.appendChild(fontIcons.plugMinus.node[0]);
    delvarBtn.title = "Remove variable";
    delvarBtn.className = "delVarBtn";
    delvarBtn.onclick = () => { removeVarline(varLine) };

    addvarBtn.appendChild(fontIcons.plugPlus.node[0]);
    addvarBtn.title = "Add new variable";
    addvarBtn.className = "addVarBtn";
    addvarBtn.onclick = () => {
        const parent = document.getElementById(varLine.id) as HTMLElement;
        // Add the new varLine right after this varLine
        if (parent && parent.classList.contains("varLine")) {
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