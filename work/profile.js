/**
 * Author: Leen Suleiman, malak hariri , monia sgaiar
 * Date: 22/06/2026
 * File: profile.js
 * Description:
 * Reads profile data from private/profile-data.json
 * and creates public/profile.json.
 *
 * Imported modules:
 * fs
 * path
 */

const fs = require('fs');
const path = require('path');

const privateFile = path.join(
    __dirname,
    '..',
    'private',
    'profile-data.json'
);

const publicFile = path.join(
    __dirname,
    '..',
    'public',
    'profile.json'
);

try {

    const profileData =
        fs.readFileSync(
            privateFile,
            'utf8'
        );

    fs.writeFileSync(
        publicFile,
        profileData,
        'utf8'
    );

    console.log(
        'profile.json created successfully'
    );

}
catch (error) {

    console.error(
        'Error:',
        error.message
    );

}