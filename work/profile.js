/**
 * Author: Leen Suleiman, Malak Hariri, Monia Sgaiar
 * Date: 24/06/2026
 * File: work/profile.js
 * Description:
 *   One-time Node.js generator script.
 *   Reads raw profile data from private/profile-data.json
 *   and writes a clean, ready-to-serve copy to public/profile.json.
 *   Run once with: node work/profile.js
 *
 * Imported modules:
 *   - fs:   File system module for reading and writing files.
 *   - path: Utility module for building accurate directory paths.
 *
 * AI Notice: AI was used to assist with structure and validation.
 */

const fs   = require('fs');
const path = require('path');

const SOURCE_PATH = path.join(__dirname, '..', 'private', 'profile-data.json');
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'profile.json');

/**
 * Reads the private data file, validates it as JSON,
 * and writes the result to the public folder.
 */
const generateProfile = () => {
    fs.readFile(SOURCE_PATH, 'utf8', (readError, rawData) => {
        if (readError) {
            console.error('Error reading private data:', readError.message);
            return;
        }

        let parsedData;
        try {
            parsedData = JSON.parse(rawData);
        } catch (parseError) {
            console.error('Invalid JSON in source file:', parseError.message);
            return;
        }

        const outputJson = JSON.stringify(parsedData, null, 2);

        fs.writeFile(OUTPUT_PATH, outputJson, 'utf8', (writeError) => {
            if (writeError) {
                console.error('Error writing public JSON:', writeError.message);
                return;
            }
            console.log('profile.json generated successfully at:', OUTPUT_PATH);
        });
    });
};

generateProfile();