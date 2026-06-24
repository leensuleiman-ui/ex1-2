/**

* Author: Leen Suleiman, Malak Hariri, Monia Sgaiar
* Date: 24/06/2026
* File: work/profile.js
*
* Description:
* Reads profile data from private/profile-data.json
* and generates public/profile.json.
*
* Imported Modules:
* * fs
* * path
    */

const fs = require('fs');
const path = require('path');

/**

* Path to source file.
  */
  const privateFilePath = path.join(
  __dirname,
  '..',
  'private',
  'profile-data.json'
  );

/**

* Path to generated file.
  */
  const publicFilePath = path.join(
  __dirname,
  '..',
  'public',
  'profile.json'
  );

try {

```
const profileData = fs.readFileSync(
    privateFilePath,
    'utf8'
);

const parsedData = JSON.parse(
    profileData
);

fs.writeFileSync(
    publicFilePath,
    JSON.stringify(
        parsedData,
        null,
        4
    ),
    'utf8'
);

console.log(
    'profile.json created successfully'
);
```

}
catch (error) {

```
console.error(
    'Error creating profile.json:',
    error.message
);

process.exit(1);
```

}
