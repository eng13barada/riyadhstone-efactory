import fs from "node:fs";
import path from "node:path";

const DATA_DIR = path.join(process.cwd(), "data");

export async function readJson<T>(collection: string, name: string): Promise<T | null> {
  try {
    const filePath = path.join(DATA_DIR, collection, `${name}.json`);
    if (!fs.existsSync(filePath)) return null;

    const raw = fs.readFileSync(filePath, "utf8");
    return JSON.parse(raw) as T;
  } catch (error) {
    console.error(`[E-Factory] readJson failed: ${collection}/${name}`, error);
    return null;
  }
}

export async function writeJson<T>(collection: string, name: string, data: T): Promise<boolean> {
  try {
    const dirPath = path.join(DATA_DIR, collection);
    if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });

    const filePath = path.join(dirPath, `${name}.json`);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
    return true;
  } catch (error) {
    console.error(`[E-Factory] writeJson failed: ${collection}/${name}`, error);
    return false;
  }
}

export async function listCollection(collection: string): Promise<string[]> {
  try {
    const dirPath = path.join(DATA_DIR, collection);
    if (!fs.existsSync(dirPath)) return [];

    const files = fs.readdirSync(dirPath);
    return files.filter((f) => f.endsWith(".json")).map((f) => f.replace(/\.json$/, ""));
  } catch (error) {
    console.error(`[E-Factory] listCollection failed: ${collection}`, error);
    return [];
  }
}

/** Backward-compatible aliases (in case any file imports old names) */
export const readJSON = readJson;
export const writeJSON = writeJson;
