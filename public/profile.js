/**

* Author: Leen Suleiman
* Date: 23/06/2026
* File: profile.js
* Description:
* Reads profile.json and dynamically fills
* the HTML page.
    */

fetch('profile.json')

.then(function (response) {
    return response.json();
})
.then(function (data) {
    displayProfile(data);
})
.catch(function (error) {
    console.log(error);
});

function displayProfile(data) {

document.getElementById(
    'full-name'
).textContent =
    data.fullName;
document.getElementById(
    'title'
).textContent =
    data.title;
document.getElementById(
    'bio'
).textContent =
    data.bio;
document.getElementById(
    'email'
).textContent =
    data.email;
document.getElementById(
    'profile-image'
).src =
    data.profileImage;
document.getElementById(
    'banner'
).style.backgroundImage =
    "url('" +
    data.bannerImage +
    "')";
displayEducation(
    data.education
);
createLanguages(
    data.languages
);
createTechnicalSkills(
    data.technicalSkills
);
createSoftSkills(
    data.softSkills
);
createLinks(
    data.links
);
createGallery(
    data.gallery
);

}

function displayEducation(education) {

const container =
    document.getElementById(
        'education'
    );
container.innerHTML =
    '<p><strong>College:</strong> '
    + education.college +
    '</p>' +
    '<p><strong>Department:</strong> '
    + education.department +
    '</p>' +
    '<p><strong>Year:</strong> '
    + education.year +
    '</p>';

}

function createLanguages(languages) {

const list =
    document.getElementById(
        'languages-list'
    );
languages.forEach(function (language) {
    const li =
        document.createElement(
            'li'
        );
    li.textContent =
        language;
    list.appendChild(
        li
    );
});

}

function createTechnicalSkills(skills) {

const list =
    document.getElementById(
        'technical-skills-list'
    );
skills.forEach(function (skill) {
    const li =
        document.createElement(
            'li'
        );
    li.textContent =
        skill;
    list.appendChild(
        li
    );
});

}

function createSoftSkills(skills) {

const list =
    document.getElementById(
        'soft-skills-list'
    );
skills.forEach(function (skill) {
    const li =
        document.createElement(
            'li'
        );
    li.textContent =
        skill;
    list.appendChild(
        li
    );
});

}

function createLinks(links) {

const container =
    document.getElementById(
        'links-list'
    );
links.forEach(function (link) {
    const a =
        document.createElement(
            'a'
        );
    a.href =
        link.url;
    a.textContent =
        link.label;
    a.target =
        '_blank';
    container.appendChild(
        a
    );
});

}

function createGallery(images) {

const gallery =
    document.getElementById(
        'gallery'
    );
images.forEach(function (image) {
    const img =
        document.createElement(
            'img'
        );
    img.src =
        image;
    img.alt =
        'Gallery Image';
    gallery.appendChild(
        img
    );
});

}