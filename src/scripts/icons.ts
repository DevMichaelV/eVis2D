// Function Imports
import { library, icon } from '@fortawesome/fontawesome-svg-core';

// UI Icon Imports
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

// Brand Icon Imports
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faItchIo } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faBluesky } from '@fortawesome/free-brands-svg-icons'

// Add all the imports to the library
library.add(
    faChevronDown, faChevronUp, faGear, faTrashCan,
    faPlus, faMinus,
    faGithub, faItchIo, faDiscord, faBluesky
);

// Retrieve the icon information
const chevronDown = icon(faChevronDown);
const chevronUp = icon(faChevronUp);
const gear = icon(faGear);
const trashcan = icon(faTrashCan);
const plugPlus = icon(faPlus);
const plugMinus = icon(faMinus);

const github = icon(faGithub);
const itchio = icon(faItchIo);
const discord = icon(faDiscord);
const bluesky = icon(faBluesky);


// Export the icon library
export const fontIcons = {
    chevronDown, chevronUp, gear, trashcan,
    plugPlus, plugMinus, 
    github, itchio, discord, bluesky
}


/*
To use:
import { fontIcons } from './icons';

document.body.appendChild(fontIcons.chevronDown.node[0]);
*/