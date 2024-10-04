const fs = require('fs');
const path = require('path');

const logsDirictory = path.join(__dirname, 'Logs');

if (fs.existsSync(logsDirictory)) {
    fs.readdirSync(logsDirictory).forEach(file => {
        console.log(`Delete file: ... ${file}`);
        fs.unlinkSync(path.join(logsDirictory, file));
    });
    fs.rmdirSync(logsDirictory);
    console.log('Logs deleted');
} 