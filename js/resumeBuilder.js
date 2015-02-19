/********************************/
/* RESUME BUILDER FOR PROJECT 2 */
/********************************/


// biographic information object
var bio = {
    "name": "Alberto Anguita",
    "role": "Computer scientist, researcher",
    "contacts": {
        "mobile": "625-725-961",
        "email": "alberto.anguita@gmail.com",
        "github": "albertoanguita",
        "twitter": "https://twitter.com/anguitaalberto",
        "location": "Madrid"
    },
    "welcomeMessage": "Hi!",
    "skills": ["Java", "Object oriented programming", "program design", "Ontologies", "RDF", "HTML", "Javascript"],
    "bioPic": "images/pic.jpg"
};

/**
 * function for displaying the bio information
 */
bio.display = function () {
    // the formatted name and role
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    // we prepend the role and name to the page header, so the name is the first element and the role the second
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    // after the name and role, we format the bioPic and welcome message and append them to the header
    $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
    $("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));

    // the topContacts element is appended with all the contact information, properly formatted
    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

    // the same is done to the footerContacts element, on the bottom of the page
    $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

    // if there are some skills, include the skills element in the header, and append all skills to it
    if (bio.skills.length >= 0) {
        $("#header").append(HTMLskillsStart);
    }
    for (var skill in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
    }
};

// education information object
var education = {
    "schools": [
        {
            "name": "UCM",
            "location": "Madrid",
            "degree": "Physics",
            "majors": ["Three years of the physics degree completed (2004)"],
            "dates": 2000,
            "url": "https://www.ucm.es/"
        },
        {
            "name": "UPM",
            "location": "Madrid",
            "degree": "Computer Science",
            "majors": ["Graduated in Computer Science (2006)", "PhD in Artificial Intelligence (2012)"],
            "dates": 2006,
            "url": "https://www.upm.es/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Introduction to Android programming",
            "school": "Miriada",
            "date": 2013,
            "url": "https://www.miriadax.net/web/android_programacion"
        },
        {
            "title": "Introduction to data science",
            "school": "Coursera",
            "date": 2013,
            "url": "https://www.coursera.org/course/datasci"
        },
        {
            "title": "Front-end web development nanodegree",
            "school": "Udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/nd001"
        }
    ]
};

/**
 * function for displaying the education information
 */
education.display = function () {
    // go through all schools to include them in the education element
    for (var school in education.schools) {
        // append an empty education-entry element at the end of the education element
        $("#education").append(HTMLschoolStart);

        // insert the formatted school name and degree in the new education-entry element
        var formattedSchoolNameAndDegree = HTMLschoolName.replace("%data%", education.schools[school].name);
        formattedSchoolNameAndDegree = formattedSchoolNameAndDegree.replace("#", education.schools[school].url);
        formattedSchoolNameAndDegree = formattedSchoolNameAndDegree + HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedSchoolNameAndDegree);

        // insert the dates and location in the education-entry element
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));

        // format (if any) the majors achieved in this school and append them
        var formattedMajors = "";
        if (education.schools[school].majors.length > 0) {
            // majors are formatted to form a single sentence
            formattedMajors = education.schools[school].majors[0];
            for (var major = 1; major < education.schools[school].majors.length; major++) {
                formattedMajors = formattedMajors + ", " + education.schools[school].majors[major];
            }
        }
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", formattedMajors));
    }

    // insert the online courses header after all regular courses introduced previously
    $("#education").append(HTMLonlineClasses);

    // go through all online courses to include them in the education element
    for (var onlineCourse in education.onlineCourses) {
        // append an empty education-entry element at the end of the education element
        $("#education").append(HTMLschoolStart);

        // insert the formatted title and school in the new education-entry element
        var formattedTitleAndSchool = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        formattedTitleAndSchool = formattedTitleAndSchool.replace("#", education.onlineCourses[onlineCourse].url);
        formattedTitleAndSchool = formattedTitleAndSchool + HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        $(".education-entry:last").append(formattedTitleAndSchool);

        // include the course date
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date));

        // append the course url
        formattedOnlineURL = HTMLonlineURL.replace("#", education.onlineCourses[onlineCourse].url);
        formattedOnlineURL = formattedOnlineURL.replace("%data%", education.onlineCourses[onlineCourse].url)
        $(".education-entry:last").append(formattedOnlineURL);
    }
};

// work experience information object
var work = {
    "jobs": [
        {
            "employer": "Decosoro Crespo Laboratory, UPM",
            "title": "Developer",
            "location": "Facultad de Informatica, UPM, Madrid",
            "dates": "2005-2006",
            "description": "Java developer of different IA related applications",
            "url": "http://decoroso.ls.fi.upm.es/en/index.html"
        },
        {
            "employer": "Biomedical Informatics Group, UPM",
            "title": "Researcher",
            "location": "Facultad de Informatica, UPM, Madrid",
            "dates": "Since 2006",
            "description": "Biomedical informatics researcher, managing different european-level research projects and completing my PhD",
            "url": "http://www.gib.fi.upm.es/"
        }
    ]
};

/**
 * function for displaying the work information
 */
work.display = function () {
    // each job goes to an independent work-entry element
    for (var job in work.jobs) {
        // add the empty work-entry element
        $("#workExperience").append(HTMLworkStart);

        // append the formatted employer and title information to the work-entry element
        var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        employer = employer.replace("#", work.jobs[job].url);
        var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        $(".work-entry:last").append(employer + title);

        // add dates, location and description to the work-entry element
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
    }
};

// projects information object
var projects = {
    "projects": [
        {
            "title": "ACGT",
            "dates": "2006-2010",
            "description": "European project on heterogeneous data integration for cancer research",
            "images": ["images/ACGT_1.jpg", "images/ACGT_2.jpg"]
        },
        {
            "title": "p-medicine",
            "dates": "2011-",
            "description": "European project on semantic technologies for the development of techniques for achieving personalized medicine",
            "images": ["images/pmed_1.png", "images/pmed_2.png"]
        }
    ]
};

/**
 * function for displaying the projects information
 */
projects.display = function () {
    // each project goes to an independent project-entry element
    for (var project in projects.projects) {
        // add the empty project-entry element
        $("#projects").append(HTMLprojectStart);

        // append the title, dates and description to the project-entry element
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));

        // append any project images to the end of the project-entry element
        for (var image in projects.projects[project].images) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
        }
    }
};

function locationizer(workObj) {
    var locations = [];
    for (var jobIndex in workObj.jobs) {
        locations.push(workObj.jobs[jobIndex].location);
    }
    return locations;
}


$("#mapDiv").append(googleMap);