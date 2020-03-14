const app = {};

// asynchronous fetch of local JSON data
app.getData = async () => {
    await fetch("./resources/resume.json")
    .then(response => response.json())
    .then(data => {
        // call helper function to display all user data
        app.displayAllUserData(data);
    })
    .catch(error => console.error(error));
}

// insert basic user information to HTML element for contact information
app.displayContactData = (userData, targetProperty) => {
    const { firstName, lastName, email, github, location } = userData[targetProperty];

    const htmlToAppend = `
    <h1>${firstName} ${lastName}</h1>
    <ul>
    <li>${location.city}, ${location.country}</li>
    <li>${email}</li>
    <li><a href=${github}>Github</a></li>
    </ul>
    `; 
    
    // insert basic user info into HTML element
    document.querySelector(`#${targetProperty}`).innerHTML = htmlToAppend;
}

// append education information to HTML element for education
app.displayEducationData = (userData, targetProperty) => {
    // create a copy of education array from user object
    const education = [...userData[targetProperty]];

    // iterate over education array to get information about each institution and accreditation 
    education.forEach(institution => {
        // destructure institution object to increase code readability
        const { institutionName, area, accreditation, startDate, endDate, location} = institution;
        
        const htmlToAppend = `
            <h2>${institutionName}</h2>
            <h3>${location['city']}, ${location['country']}</h3>
            <h4>${area} ${accreditation} </h4>
            <h5>${startDate} - ${endDate}</h5>
        `;

        document.querySelector(`#${targetProperty}`).insertAdjacentHTML("beforeend", htmlToAppend);
    });
}

// insert HTML containing information about skills to skills HTML element
app.displaySkillsData = (userData, targetProperty) => {
    const skills = [...userData[targetProperty]];

    skills.forEach((skill, index) => {
        // destructure skill name and skills (keywords) from each skill object
        const { name, keywords } = skill;
        
        // map over array of skill keywords and make each skill a list element
        const skillsList = keywords.map(keyword => {
            return `<li>${keyword}</li>`;
        });

        // insert each list element into ul
        const htmlToAppend = `
            <h3>${name}</h3>
            <ul id="skill-${index}">${skillsList}</ul>
        `;

        document.querySelector(`#${targetProperty}`).insertAdjacentHTML("beforeend", htmlToAppend);
    })

}

// helper method to call all display methods to show formatted user information
app.displayAllUserData = (userData) => {
    app.displayContactData(userData, "contact");
    app.displayEducationData(userData, "education");
    app.displaySkillsData(userData, "skills");
}

// initialize method to get JSON data
app.init = () => {
    app.getData();
}

// wait for document to finish loading before called initialize method
if (document.readyState === "complete") {
	app.init();
} else {
	document.addEventListener("DOMContentLoaded", app.init);
};
