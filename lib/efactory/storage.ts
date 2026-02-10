import { promises as fs } from "fs";
import path from "path";

export async function readJson<T>(relativePath: string, fallback: T): Promise<T> {
  const p = path.join(process.cwd(), relativePath);
  try {
    const raw = await fs.readFile(p, "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export async function writeJson<T>(relativePath: string, data: T): Promise<void> {
  const p = path.join(process.cwd(), relativePath);
  const dir = path.dirname(p);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(p, JSON.stringify(data, null, 2), "utf8");
}
