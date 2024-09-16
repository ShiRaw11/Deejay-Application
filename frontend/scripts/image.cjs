// scripts/generateImageList.js

const fs = require('fs');
const path = require('path');

// Correctly navigate from the scripts directory to the photos directory
const imageDir = path.join(__dirname, '..', 'public', 'photos'); // Corrected path
// Define the path for the output JSON file
const outputFile = path.join(__dirname, '..', 'src', 'images.json');

// Supported image file extensions
const imageExtensions = ['.png', '.jpg', '.jpeg', '.svg'];

// Read the contents of the image directory
fs.readdir(imageDir, (err, files) => {
    if (err) {
        console.error(`Failed to list contents of directory: ${err}`);
        return;
    }

    // Filter and map files to relative paths for the web application
    const images = files
        .filter((file) => imageExtensions.includes(path.extname(file).toLowerCase()))
        .map((file) => `/photos/${file}`); // Adjust path for React

    // Write the image paths to the JSON file
    fs.writeFile(outputFile, JSON.stringify(images, null, 2), (err) => {
        if (err) {
            console.error(`Failed to write image list: ${err}`);
            return;
        }
        console.log(`Image list generated: ${outputFile}`);
    });
});
