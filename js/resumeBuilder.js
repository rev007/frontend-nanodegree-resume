var bio = {
	"name": "Darryn Goldsmith",
	"role": "UX Designer & Web Developer",
	"contacts": {
		"mobile": "978-238-9647",
		"email": "inventive321@gmail.com",
		"github": "rev007",
		"twitter": "@WaltDoubler",
		"location": "Clinton, MA"
	},
	"welcomeMessage": "Hi. I'm Darryn! When I'm not designing things I enjoy reading, painting and contributing to Jason Ogle's User Defenders podcast.",
	"skills": [
							"Illustrator", "Photoshop", "Sketch", "Balsamiq Mockups",
							 "Xcode", "Interface Design", "HTML5", "CSS3", "JavaScript"
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
  var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
  var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

  $('#header').prepend(formattedRole);
  $('#header').prepend(formattedName);
  $('#header').append(formattedBioPic);
  $('#topContacts').append(formattedMobile);
  $('#topContacts').append(formattedEmail);
  $('#topContacts').append(formattedGithub);
  $('#topContacts').append(formattedTwitter);
  $('#topContacts').append(formattedLocation);
  $('#header').append(formattedWelcomeMsg);
	$('#footerContacts').append(formattedMobile);
  $('#footerContacts').append(formattedEmail);
	$('#footerContacts').append(formattedGithub);
	$('#footerContacts').append(formattedTwitter);
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
			"title": "Introduction to UX Design",
			"school": "American Graphics Institute",
			"dates": "2014",
			"url": "www.agitraining.com"
		},
				{
			"title": "Wireframes to Responsive Design",
			"school": "Treehouse",
			"dates": "2013",
			"url": "www.teamtreehouse.com"
		},
		{
			"title": "Front-End Developer Nanodegree",
			"school": "Udacity",
			"dates": "2016",
			"url": "www.udacity.com"
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

		var formattedTitle = HTMLonlineTitle.replace('%data%', course.title);
		var formattedSchool = HTMLonlineSchool.replace('%data%', course.school);
		var formattedDates = HTMLonlineDates.replace('%data%', course.dates);

		// make the web address clickable but viewed as a www address
		var str = course.url;
		str = str.replace("www.", "http://");
		var formattedURL = HTMLonlineURL.replace('#', str).replace('%data%', course.url);

		$('.education-entry:last').append(formattedTitle + formattedSchool);
		$('.education-entry:last').append(formattedDates);
		$('.education-entry:last').append(formattedURL);
	});

};

var work = {
	"jobs": [
		{
			"employer": "GreenVine",
			"title": "UX Designer",
			"location": "Clinton, MA",
			"dates": "March 2013 - Present",
			"description": "Designed interfaces, created prototypes, and conducted task driven user testing to make understanding end user requirements a constant priority. Managed interaction and visual designs for Football Squares The Game app."
		},
		{
			"employer": "GreenVine",
			"title": "App Developer",
			"location": "Clinton, MA",
			"dates": "March 2013 - Present",
			"description": "Self-taught Objective-C and the MVC design pattern to publish Football Squares The Game app. Researched and implemented solutions for complex interactive animations within the Core Animation framework."
		},
		{
			"employer": "Independent",
			"title": "Web Developer",
			"location": "Clinton, MA",
			"dates": "February 2016 - Present",
			"description": "Self-taught HTML and CSS. Currently working on a responsive website for a small business and finishing an online certificate program."
		},
		{
			"employer": "metroPCS",
			"title": "Radio Frequency Engineer",
			"location": "Chelmsford, MA",
			"dates": "July 2007 - August 2016",
			"description": "Reduced dropped calls, enhanced call quality, and collaborated across teams to improve National Quality Index scores by 15%. Created drive-testing databases for entire New England market."
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
			'description': 'Football Squares The Game is an MVP app that was designed and developed for the iPad. The app allows players to reposition their squares during the big game if trivia questions are answered correctly.',
			'images': ['images/party.png', 'images/trivia.png']
		},
		{
			'title': 'Web Design',
			'dates': 'February 2016 - Present',
			'description': 'This is a redesign of the Northboro Canine Rehab website. A before and after photo will be displayed soon.',
			'images': ['images/before.png', 'images/soon.png']
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
