const fs = require('fs');
const path = require('path');

const datafolder = path.join(__dirname, 'data');
if (!fs.existsSync(datafolder)) {
    fs.mkdirSync(datafolder);
    console.log("Data folder created:");
}

const dataFile = path.join(datafolder, 'data.txt');
if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, 'Hello, World!');
    console.log("Data file created with initial content.");
}
