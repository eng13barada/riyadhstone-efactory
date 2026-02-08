const fs = require('fs');
const path = require('path');

const API_URL = "http://127.0.0.1:7860/sdapi/v1/txt2img";
const OUTPUT_DIR = path.join(__dirname, 'public', 'assets', 'images');

const ASSETS = [
    {
        filename: 'hero_tower.jpg',
        prompt: "Low angle majestic shot of a Riyadh skyscraper facade clad in golden-beige limestone, vertical fins, warm sunset lighting hitting the stone texture, luxury architectural photography, 8k, hyper-realistic, deep blue sky contrast."
    },
    {
        filename: 'texture_creamy_honed.jpg',
        prompt: "Close-up of Cream Riyadh Limestone slab, honed matte finish, subtle natural fossil veins, soft lighting, high-end material texture, seamless."
    },
    {
        filename: 'texture_golden_hammered.jpg',
        prompt: "Close-up of Yellow Riyadh Stone, bush-hammered finish, rough surface, pitted texture, casting micro-shadows, structural and raw look."
    },
    {
        filename: 'retail_facade_night.jpg',
        prompt: "Luxury retail storefront facade (like Cartier/Prada) clad in warm Riyadh stone, dramatic night uplighting emphasizing stone texture, glass curtain walls, elegant atmosphere."
    },
    {
        filename: 'factory_slab.jpg',
        prompt: "Industrial shot of a massive raw Riyadh stone slab in a factory setting, showing the raw edge and thickness, engineering context."
    }
];

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function generateImage(asset) {
    console.log(`Generating ${asset.filename}...`);
    
    // 10-minute timeout (600,000ms)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 600000);

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: asset.prompt,
                steps: 15,
                width: 512,
                height: 512,
                sampler_name: "Euler a", 
                cfg_scale: 7
            }),
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const base64Image = data.images[0];
        const buffer = Buffer.from(base64Image, 'base64');
        const filePath = path.join(OUTPUT_DIR, asset.filename);

        fs.writeFileSync(filePath, buffer);
        console.log(`Saved ${asset.filename}`);
    } catch (error) {
        if (error.name === 'AbortError') {
            console.error(`Timeout generating ${asset.filename} after 10 minutes`);
        } else {
            console.error(`Error generating ${asset.filename}:`, error);
        }
        clearTimeout(timeoutId);
    }
}

async function main() {
    for (const asset of ASSETS) {
        await generateImage(asset);
    }
    console.log("All assets generated.");
}

main();
