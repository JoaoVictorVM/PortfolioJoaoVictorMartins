import { copyFile } from "node:fs/promises";
import { resolve } from "node:path";

const clientDir = resolve(process.cwd(), "dist", "client");
const source = resolve(clientDir, "index.html");
const target = resolve(clientDir, "404.html");

await copyFile(source, target);

console.log("postbuild: 404.html gerado a partir de index.html");
