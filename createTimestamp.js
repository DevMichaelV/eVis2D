import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const options = {
    timeZone: "America/Chicago",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
 };
const formatter = new Intl.DateTimeFormat("en-US", options)
const timeStamp = formatter.format(new Date());
const filePath = path.resolve(path.dirname(__filename), "public", "last_built.txt");

fs.mkdirSync(path.dirname(filePath), { recursive: true });

fs.writeFileSync(filePath, `<span>Last built: ${timeStamp} (<a href="https://en.wikipedia.org/wiki/Central_Time_Zone" alt="Wikipedia/Central_Time_Zone" target="_blank">US/Central</a>)</span>` , "utf8");

console.log("Timestamp file created", filePath);