var bio = {
    "name": "Joe Schinasi",
    "role": "Front-End Web Developer",
    "contacts" : {
        "mobile_number": "323-377-9433",
        "email" : "jschinasi@outlook.com",
        "github" : "https://github.com/coderjs",
        "linkedin" : "https://www.linkedin.com/in/joe-schinasi-77a4551",
        "location" : "New York, NY"
    },
    "message": "Thank you for visiting my website.",
    "biopic": "images/JoeSM.png",
    "skills": ["HTML","CSS","JavaScript","jQuery"]
};

var work = {
    "jobs" : [
    {
        "employer" : "Bank of America",
        "title" : "IT Project Manager",
        "dates" : "2004 - 2015",
        "location" : "New York",
        "description" : "Agile and DevOps project manager for Global Information Security."
    },
    {
        "employer" : "Self Employed",
        "title" : "Entrepreneur",
        "dates" : "2003 - 2004",
        "location" : "Los Angeles",
        "description" : "Owner and operator of a real estate inspection company."
    }]
};

var projects = {
    "project" : [{
        "title" : "https://github.com/coderjs",
        "dates" : "2015",
        "description" : "My github repository - which includes work completed for this class.",
        "images" : ["images/frySM.jpg","images/bartSM.png"]
    },
    {
        "title" : "http://joeschinasi.com",
        "dates" : "2015",
        "description" : "My personal website, which will soon be redone using the skills I learned in this class.",
        "images" : ["images/JoeSM.png","images/ProfileSM.jpg"]
    }]
};

var education = {
    "schools" : [
    {
        "name" : "University of Chicago Laboratory High School",
        "location" : "Chicago, IL",
        "degree" : "High School Diploma",
        "majors" : "None",
        "dates" : 1991,
        "url" : "http://www.ucls.uchicago.edu/"
    },
    {
        "name" : "University of Wisconsin",
        "location" : "Madison, WI",
        "degree" : "Bachelor of Science",
        "majors" : "Journalism",
        "dates" : 1995,
        "url" : "http://www.wisc.edu"
    },
    {
        "name" : "San Diego State University",
        "location" : "San Diego, CA",
        "degree" : "Masters of Business Administration",
        "majors" : "Entrepreneurship",
        "dates" : 2001,
        "url" : "http://www.sdsu.edu"
    },
    {
        "name" : "UCLA Extension",
        "location" : "Los Angeles, CA",
        "degree" : "Certificate",
        "majors" : "Real Estate Investment Analysis",
        "dates" : 2008,
        "url" : "https://www.uclaextension.edu/"
    }],
    "onlineCourses" : [
    {
        "title": "Introduction to HTML and CSS",
        "school": "Udacity",
        "dates_attended":"Fall 2015",
        "url":"https://www.udacity.com/course/intro-to-html-and-css--ud304"
    },
    {
        "title": "Responsive Web Design Fundamentals",
        "school": "Udacity",
        "dates_attended":"Fall 2015",
        "url":"https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
    },
    {
        "title": "Responsive Images",
        "school": "Udacity",
        "dates_attended":"Fall 2015",
        "url":"https://www.udacity.com/course/responsive-images--ud882"
    },
    {
        "title": "JavaScript Basics",
        "school": "Udacity",
        "dates_attended":"Fall 2015",
        "url":"https://www.udacity.com/course/javascript-basics--ud804"
    },
        {
        "title": "Intro to jQuery",
        "school": "Udacity",
        "dates_attended":"Fall 2015",
        "url":"https://www.udacity.com/course/intro-to-jquery--ud245"
    },
    {
        "title": "How to Use Git and GitHub",
        "school": "Udacity",
        "dates_attended":"Fall 2015",
        "url":"https://www.udacity.com/course/how-to-use-git-and-github--ud775"
    }]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole).prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile_number);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedLinkedin = HTMLlinkedin.replace("%data%",bio.contacts.linkedin);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
    var formattedMessage = HTMLwelcomeMsg.replace('%data%',bio.message);

    $("#topContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLinkedin)
        .append(formattedLocation);

    $("#footerContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLinkedin)
        .append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedMessage);

    $("#header").append(HTMLskillsStart);
    for(skill in bio.skills) {
        var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
        $("#skills-h3").append(formattedSkills);
    }
};

work.display = function() {
    for(job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription);
    }
};

projects.display = function(){
    for(item in projects.project){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[item].title);
        var formattedDates = HTMLprojectDates.replace("%data%",projects.project[item].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[item].description);

        $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
        for (image in projects.project[item].images) {
            var formattedImage = HTMLprojectImage.replace("%data%",projects.project[item].images[image]);
            $(".project-entry:last").append(formattedImage);
        }
    }
};

education.display = function() {
    for(school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
        $(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
    }

    if(education.onlineCourses.length > 0) {
        $(".education-entry:last").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function (course) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace('#', course.url);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates_attended);

            $(".education-entry:last")
                .append(formattedOnlineTitle + formattedOnlineSchool)
                .append(formattedOnlineDates)
                .append('<br>');
        });
    }
};


function inName(name){
    console.log(name);
    var newName = name;
    newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();

    return newName;
}


work.display();
projects.display();
education.display();
bio.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
