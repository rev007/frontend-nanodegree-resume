var bio = {
	"name": "Darryn Goldsmith",
	"role": "UX Designer / Web Developer",
	"contacts": {
		"location": "Clinton, MA",
		"mobile": "(617) 839-6752",
		"email": "inventive321@gmail.com",
		"github": "rev007",
		"website": "DarrynGoldsmith.com"
	},
	"welcomeMessage": "UX Developer with diverse background in user experience, programming and expertise gained from 15+ years of research and problem-solving. Advocates for web interaction design best practices, with a focus on consistency and usability. Adept at developing interactive front-end designs and maintainable, scalable, responsive, and cross-browser code.",
	"skills": [
							"User Research", "HTML5", "CSS3", "JavaScript",
							 "Git", "Illustrator", "Wireframes", "Typography"
	],
	"biopic" : "images/darryn.jpg"
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace('%data%', bio.name);
  var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
  var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
  var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
  var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
  var formattedWebsite = HTMLwebsite.replace('%data%', bio.contacts.website);
  var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

  $('#header').prepend(formattedRole);
  $('#header').prepend(formattedName);
  $('#header').append(formattedBioPic);
	$('#topContacts').append(formattedLocation);
	$('#topContacts').append(formattedMobile);
	$('#topContacts').append(formattedEmail);
	$('#topContacts').append(formattedGithub);
	$('#topContacts').append(formattedWebsite);

  $('#header').append(formattedWelcomeMsg);
	$('#footerContacts').append(formattedMobile);
  $('#footerContacts').append(formattedEmail);
	$('#footerContacts').append(formattedGithub);
	$('#footerContacts').append(formattedWebsite);
	$('#footerContacts').append(formattedLocation);

};

// name will display using international format if button is pressed
function inName(name) {
	name = name.trim().split(' ');
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + ' ' + name[1];

}

var education = {
	"schools": [
		{
			"name": "University of New Hampshire",
			"location": "Durham, NH",
			"degree": "Bachelors of Science",
			"majors": ["Electrical Engineering"],
			"dates": "2000",
			"url": "http://unh.edu"
		}
	],
	"onlineCourses": [
        {
            "title": "Front-End Developer Nanodegree",
            "school": "Udacity",
            "dates": "2017",
            "url": "https://profiles.udacity.com/p/8804555838"
        },
		{
			"title": "Introduction to UX Design",
			"school": "American Graphics Institute",
			"dates": "2014",
			"url": "https://www.agitraining.com/ux/classes"
		},
		{
			"title": "Design & Development Achievements",
            "school": "Treehouse",
			"dates": "2013",
			"url": "https://teamtreehouse.com/darryngoldsmith"
		}
	]
};

education.display = function() {

	education.schools.forEach(function(school) {
		// create new div for each school
		$('#education').append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace('#', school.url).replace('%data%', school.name);
		var formattedDegree = HTMLschoolDegree.replace('%data%', school.degree);
		var formattedDates = HTMLschoolDates.replace('%data%', school.dates);
		var formattedLocation = HTMLschoolLocation.replace('%data%', school.location);

		$('.education-entry:last').append(formattedName + formattedDegree);
		$('.education-entry:last').append(formattedDates);
		$('.education-entry:last').append(formattedLocation);

		//concatenate double majors
		var majorsList = "";
		school.majors.forEach(function(major) {
			if (majorsList.length > 0) {
				majorsList += ', ' + major;
			} else {
				majorsList = major;
			}
		});
		var formattedMajor = HTMLschoolMajor.replace('%data%', majorsList);
		$('.education-entry:last').append(formattedMajor);
	});

	// add the header to start listing online classes
	$('#education').append(HTMLonlineClasses);

	education.onlineCourses.forEach(function(course) {
		// create new div for each online course
		$('#education').append(HTMLschoolStart);

		// var formattedTitle = HTMLonlineTitle.replace('%data%', course.title);
        var formattedTitle = HTMLonlineTitle.replace('#', course.url).replace('%data%', course.title);
        var formattedSchool = HTMLonlineSchool.replace('%data%', course.school);
		var formattedDates = HTMLonlineDates.replace('%data%', course.dates);

		// make the web address clickable but viewed as a www address
		// var str = course.url;
		// str = str.replace("www.", "http://");
		// var formattedURL = HTMLonlineURL.replace('#', str).replace('%data%', course.url);

		$('.education-entry:last').append(formattedTitle + formattedSchool);
        $('.education-entry:last').append(formattedDates);
		// $('.education-entry:last').append(formattedURL);
		$('.education-entry:last').append("<br>");
	});

};

var work = {
	"jobs": [
        {
            "employer": "Independent",
            "title": "Web Developer",
            "location": "Clinton, MA",
            "dates": "February 2016 - Present",
            "description": "Self-taught Web design. Working on websites for two small businesses. Fixed unprofitable mobile design. Refined visual design and content. Technologies: Illustrator, HTML, CSS, JavaScript, GIT, Grunt"
        },
		{
			"employer": "GreenVine",
			"title": "UX Designer",
			"location": "Clinton, MA",
			"dates": "March 2013 - August 2016",
			"description": "Designed interfaces, mockups and prototypes. Managed interaction and visual designs. Published app on Apple. Conducted user testing. Made user needs constant priority. Technologies: Xcode, Illustrator, Silverback, Balsamiq, Final Cut Pro"
		},
		{
			"employer": "GreenVine",
			"title": "App Developer",
			"location": "Clinton, MA",
			"dates": "March 2013 - August 2016",
			"description": "Self-taught Objective-C and researched best design animation practices. Published app on Apple. Implemented complex animations. Improved frame rates by 100%. Technologies: Xcode, Objective-C, Core Animation, Logic Pro X"
		},
		{
			"employer": "metroPCS",
			"title": "Radio Frequency Engineer",
			"location": "Chelmsford, MA",
			"dates": "July 2007 - August 2016",
			"description": "Collaborated across teams within startup culture to achieve fastest build of Boston market in telecom history. Improved Quality Index by 15%. Cut rehome project by two weeks."
		}
	]
};

work.display = function() {

	work.jobs.forEach(function(job) {

		// create new div for work experience
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$('.work-entry:last').append(formattedEmployerTitle);

		var formmatedDates = HTMLworkDates.replace('%data%', job.dates);
		$('.work-entry:last').append(formmatedDates);

		var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
		$('.work-entry:last').append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace('%data%', job.description);
		$('.work-entry:last').append(formattedDescription);

	});

};

var projects = {
	'projects': [
		{
			'title': 'Mobile App Design',
			'dates': 'March 2013 - Present',
			'description': 'Football Squares The Game is an app that was designed and developed for the iPad. The app allows players to reposition their squares during the big game if trivia questions are answered correctly.',
			'images': ['images/party.png', 'images/trivia.png']
		},
		{
			'title': 'Web Design',
			'dates': 'February 2016 - Present',
			'description': 'This is a before and after redesign of the Northboro Canine Rehab website.',
			'images': ['images/before.png', 'images/after.jpg']
		}
	]
};

// encapsulate a method to an existing object literal
projects.display = function() {

	projects.projects.forEach(function(item) {

		// create new div for each project
		$('#projects').append(HTMLprojectStart);

		var HTMLprojectTitle = '<a href="#">%data%</a>';
		var HTMLprojectDates = '<div class="date-text">%data%</div>';
		var HTMLprojectDescription = '<p><br>%data%</p>';
		var HTMLprojectImage = '<img src="%data%">';

		// var project = projects.projects[item]
		var formattedTitle = HTMLprojectTitle.replace('%data%', item.title);
		var formattedDates = HTMLprojectDates.replace('%data%', item.dates);
		var formattedDescription = HTMLprojectDescription.replace('%data%', item.description);

		$('.project-entry:last').append(formattedTitle);
		$('.project-entry:last').append(formattedDates);
		$('.project-entry:last').append(formattedDescription);

		//iterate through the images array
		if (item.images.length > 0) {
			item.images.forEach(function(image) {
				var formattedImage = HTMLprojectImage.replace('%data%', image);
				$('.project-entry:last').append(formattedImage);
			});
		}

	});

};

bio.display();
work.display();
projects.display();
education.display();

// create a button to internationalize your name
// $('#main').append(internationalizeButton);

// add the map
// $('#mapDiv').append(googleMap);
