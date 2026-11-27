import { mkdir, writeFile } from "node:fs/promises";
import { text } from "./text.ts";

const dir = process.env.OUT_DIR || "/output";
await mkdir(dir, { recursive: true });
await writeFile(`${dir}/entry.txt`, text, "utf8");
