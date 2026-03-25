const Jimp = require('jimp');
const path = require('path');

async function makeCircle(inputPath, outputPath) {
    try {
        console.log(`Reading image from ${inputPath}...`);
        const image = await Jimp.read(inputPath);

        console.log('Resizing and cropping...');
        // Resize to a reasonable size for favicon (e.g., 256x256)
        image.resize(256, 256);

        // Create a circle mask
        image.circle();

        console.log(`Writing to ${outputPath}...`);
        await image.writeAsync(outputPath);
        console.log('Done!');
    } catch (err) {
        console.error('Error:', err);
        process.exit(1);
    }
}

const input = process.argv[2];
const output = process.argv[3];

if (!input || !output) {
    console.log('Usage: node make_circle.js <input> <output>');
    process.exit(1);
}

makeCircle(input, output);
