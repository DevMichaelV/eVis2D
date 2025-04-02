import fs from 'fs';

const timeStamp = new Intl.DateTimeFormat("en-US", { timeZone: "America/Chicago", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, }).format(new Date());

fs.writeFileSync('./src/timestamp.ts', `export const BUILD_TIMESTAMP: string = "${timeStamp}";`);