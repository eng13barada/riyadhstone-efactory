import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

export async function readJSON<T>(collection: string, name: string): Promise<T | null> {
    try {
        const filePath = path.join(DATA_DIR, collection, `${name}.json`);
        if (!fs.existsSync(filePath)) return null;
        
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(fileContent) as T;
    } catch (error) {
        console.error(`Error reading ${collection}/${name}`, error);
        return null;
    }
}

export async function writeJSON<T>(collection: string, name: string, data: T): Promise<boolean> {
    try {
        const dirPath = path.join(DATA_DIR, collection);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }
        
        const filePath = path.join(dirPath, `${name}.json`);
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        console.error(`Error writing ${collection}/${name}`, error);
        return false;
    }
}

export async function listCollection(collection: string): Promise<string[]> {
    try {
         const dirPath = path.join(DATA_DIR, collection);
         if (!fs.existsSync(dirPath)) return [];
         
         const files = fs.readdirSync(dirPath);
         return files.filter(f => f.endsWith('.json')).map(f => f.replace('.json', ''));
    } catch (error) {
         console.error(`Error listing ${collection}`, error);
         return [];
    }
}
export { readJSON as readJson };
export { writeJSON as writeJson };
