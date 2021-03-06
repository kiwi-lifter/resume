// bio info object 
var bio = {
	"name" : "Garrick McCaskill",
	"role" : "Front End Developer",
	"contacts" : {
		"email" : "example@gmail.com",
		"mobile" : "022 example 118",
		"github" : "kiwi-lifter",
		"location" : "Auckland, New Zealand"
	},
	"biopic" : "http://placehold.it/200x200",
	"message" : "{... creative code ...... digital design ...} ",
	"skills" : ["HTML", "javascript", "CSS", "Git", "Grunt"],
	"display" : function(){
		/* update HTML code with profile info */
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var mobileNum = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var emailContact = HTMLemail.replace("%data%", bio.contacts.email);
		var gitHub = HTMLgithub.replace("%data%", bio.contacts.github);
		var location = HTMLlocation.replace("%data%", bio.contacts.location);
		var profilePic = HTMLbioPic.replace("%data%", bio.biopic);
		var message = HTMLwelcomeMsg.replace("%data%", bio.message);
		
		/* display profile info */
		$("#header").prepend(formattedName+formattedRole+message);
		$("#photoID").append(profilePic);

		$("#topContacts, #footerContacts").append(mobileNum);
		$("#topContacts, #footerContacts").append(emailContact);
		$("#topContacts, #footerContacts").append(gitHub);
		$("#topContacts, #footerContacts").append(location);

		// if there are any skills 
		if ( bio.skills.length > 0 ){
			// append skills starter html
			$("#skillList").append(HTMLskillsStart);
			// get number of skills in skills array
			var skillsLength = bio.skills.length;
			// loop through skills array, update and display skills ul
			for (i = 0; i < skillsLength; i++) {
				var mySkills = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(mySkills);
			} // end for
		} // end if
	} //end display function
}; // end bio object

// employment history object
var work = {
	"jobs" : [  { "employer" : "example 1 employer",
						"title" : "example title",
						"dates" : "example 2013 - 2016",
						"location" : "Tokyo, Japan",
						"description" : "example description, example description,example description," + 
							"example description,example description,example description."		
						},
				 { "employer" : "example 2 employer",
						"title" : "example title",
						"dates" : "example 2010 - 2012",
						"location" : "Seoul, South Korea",
						"description" : "example description, example description,example description," + 
							"example description,example description,example description."		
						},
				 { "employer" : "example 3 employer",
						"title" : "example title",
						"dates" : "example 2005 - 2009",
						"location" : "Perth, Australia",
						"description" : "example description, example description,example description," + 
							"example description,example description,example description."		
						}				
	],// end jobs array
	"display" : function(){
		
		// create number to add unique #id for collapse targets in jobs list
		var i=0;
		// loop through jobs array in work object, retrieve job objects info and display in html
		work.jobs.forEach(function(job) {	
			
			// increment i by 1
			i++; 
			
			// update HTML code with employment info and display
			var formattedEmployer = '<div class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" data-parent="#workExperience" href="#job'+i+'">'+job.employer;
			var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
			var formattedDates = '<div id="job'+i+'" class="panel-collapse collapse"><div class="panel-body">'+HTMLworkDates.replace("%data%", job.dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
			var endJobDiv = '</div><!-- end panel-body --></div><!-- end job'+i+' div -->';
			
			// concat these two variables otherwise the html <a> tag breaks for some reason
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			
			// same issue as above, target <div> breaks if not concatanated first
			var formattedCollapseInfo = formattedDates+formattedLocation+formattedWorkDescription+endJobDiv;
	
					
			$("#workExperience").append(HTMLworkStart);// create new div for job
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedCollapseInfo);	
		});// end for job in
	}// end display function
}; // end work object

// create projects object for projects details
var projects = {
	"projects" :[	{ 	"title" : "example 1 project",
						"dates" : "2016",
						"description" : "Udacity Front End Web Developer nano degree - portfolio.",
						"images" : ["http://placehold.it/175x175", "http://placehold.it/175x175", "http://placehold.it/125x125"]
						/**
						"images" : [ 	"large" : ["http://placehold.it/175x175", "http://placehold.it/175x175"],
											"small" : "http://placehold.it/125x125"
										}
									]
									**/
					},
					{ 	"title" : "example 2 project",
						"dates" : "2015",
						"description" : "Udacity Front End Web Developer nano degree - resume.",
						"images" : ["http://placehold.it/175x175", "http://placehold.it/175x175", "http://placehold.it/125x125"]
						/**
						"images" : [ 	{ "large" : ["http://placehold.it/175x175", "http://placehold.it/175x175"],
											"small" : "http://placehold.it/125x125"
										}
									]
									**/
					},
					{ 	"title" : "example 3 project",
						"dates" : "2015",
						"description" : "Udacity Front End Web Developer nano degree - resume.",
						"images" : ["http://placehold.it/175x175", "http://placehold.it/175x175", "http://placehold.it/125x125"]
						/**
						"images" : [ 	{ "large" : ["http://placehold.it/175x175", "http://placehold.it/175x175"],
											"small" : "http://placehold.it/125x125"
										}
									]
									**/
					},
					{ 	"title" : "example 4 project",
						"dates" : "2015",
						"description" : "Udacity Front End Web Developer nano degree - resume.",
						"images" : ["http://placehold.it/175x175", "http://placehold.it/175x175", "http://placehold.it/125x125"]
						/**
						"images" :	[ 	{ "large" : ["http://placehold.it/175x175", "http://placehold.it/175x175",
											"small" : "http://placehold.it/125x125"
										}
									]
									**/
					},
					{ 	"title" : "example 5 project",
						"dates" : "2015",
						"description" : "Udacity Front End Web Developer nano degree - resume.",
						"images" : ["http://placehold.it/175x175", "http://placehold.it/175x175", "http://placehold.it/125x125"]
						/**
						"images" : [ 	{ "large" : ["http://placehold.it/175x175", "http://placehold.it/175x175"],
											"small" : "http://placehold.it/125x125"
										}
									]
									**/
					}
	],
	"display" : function display(){
			
		// track project for modal div id targets
		var countProjects = 0;
		
		// get details for each project and display
		projects.projects.forEach(function(project){	
			
			// project modal div id number incremented by 1
			countProjects++;
			// display project link button and small image
			// html for project button 
			var projectLink = '<a href="#project'+countProjects+'" data-toggle="modal">';
			// display html		
			$("#projects").append(HTMLprojectStart);	
			
			// get url for small image from images array
			
			var projectImages = HTMLprojectImage.replace("%data%", project.images[2]);
			$(".project-entry:last").append(projectLink+projectImages);

			/**
			// get url for small image from images array
			project.images.forEach(function(image){
				// get small image url and html for projects list
				var projectImages = HTMLprojectImage.replace("%data%", image.small);
				$(".project-entry:last").append(projectLink+projectImages);
			}); //end forEach images small
			**/	
			
			// var to hold large images url link
			var projectLargeImages ="";
			/**
			// display project modal with title, date, description, 2 large images
			project.images.forEach(function(image){
				
				var imagesLength = image.large.length;
				var count;
				// loop through large images array 
				for (count = 0; count < imagesLength; count++) {
					// create html img tags with urls from the large images array
					projectLargeImages = projectLargeImages + '<img src="' + image.large[count] + '" class="img-thumbnail">';					
				}// end for
				
		
			}); // end forEach images large
			**/
			
			projectLargeImages = '<img src="' + project.images[0] + '" class="img-thumbnail">' + '<img src="' + project.images[1] + '" class="img-thumbnail">';
				
			// html content for project modal
			var modalStart = '<div id="project'+countProjects+'" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="project '+countProjects+'" aria-hidden="true">';
			var modalTitleAndCloseButton = '<div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" id="gridModalLabel">'+project.title+'</h4></div>';
			var modalContent = '<div class="modal-body"><div class="container-fluid bd-example-row"><div class="row"><div class="col-md-8"><p>'+project.dates+'</p><p>'+project.description+'</p></div><div class="col-md-4">'+projectLargeImages+'</div></div></div></div>';
			var modalEnd = '<div class="modal-footer"><button type="button" class="close-button" data-dismiss="modal">Close</button></div></div></div></div><!-- end bootstrap modal div for project '+countProjects+'-->';
			// append project modals html
		
			$(".container").prepend(modalStart+modalTitleAndCloseButton+modalContent+modalEnd);
		
		});// end forEach project 
		
	}// end display function
		
}; // end projects object

// create education info object

var education = {	
	"schools": [
		{
			"name": "Unitec Institute of Technology",
			"location": "Auckland, New Zealand",
			"degree": "1st Year Bachelor of Landscape Architecture",
			"majors": ["Landscape Architecture"],
			"dates": "2015",
			"url" : "http://www.unitec.ac.nz/career-and-study-options/landscape-architecture"
		}, 
		{
			"name": "Auckland University",
			"location": "Auckland, New Zealand",
			"degree": "Bachelor of Arts",
			"majors": ["Political Science", "Philosophy"],
			"dates": "1992 - 1996",
			"url" : "http://www.arts.auckland.ac.nz/en/about/subjects-and-courses/politics-and-international-relations.html"
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Developer Nano Degree",
			"school": "Udacity.com",
			"date": "2016",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"title": "example 1",
			"school": "example 1 institute",
			"date": "example 1 date",
			"url": "https://www.example.com"
		}
	],
	"display" : function(){
		
		// create number to add unique #id for collapse targets in schools list
		var i=0;
	
		// loop through schools array in education object, retrieve institute objects info and display in html
		education.schools.forEach(function(institute) {
		
			// increment i by 1
			i++; 
			// display education history 
			var formattedInstitute = '<div class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" data-parent="#education" href="#institute'+i+'">'+institute.name;
			var formattedDegree = HTMLschoolDegree.replace("%data%", institute.degree);
			var formattedDates = '<div id="institute'+i+'" class="panel-collapse collapse"><div class="panel-body">'+HTMLschoolDates.replace("%data%", institute.dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", institute.location);
			
			// if there are any majors 
			var majorsList = "";
			
			if (institute.majors.length > 0 ){

				var majorsLength = institute.majors.length;
				
				// loop through majors array, update and display majors ul
				for (i = 0; i < majorsLength; i++) {	
					majorsList = majorsList + '&emsp;' + institute.majors[i];
				} // end for
			
				var formattedMajor = HTMLschoolMajors.replace("%data%", majorsList);
			
			}
			// else no majors to display
			else{
				formattedMajor = "<br>";
			} // end if else
			
			var endInstituteDiv = '</div></div><!-- end institute'+i+' div -->';

			// target <div> breaks if not concatanated first
			var formattedInstituteCollapseInfo = formattedDates+formattedLocation+formattedMajor+endInstituteDiv;
			
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(formattedInstitute + formattedDegree);// append vars together else HTML <a> link breaks
			$(".education-entry:last").append(formattedInstituteCollapseInfo);
		
		}); // end forEach

		// check if there are any online courses in the object...
		if(education.hasOwnProperty('onlineCourses')){
			// ...if there is add the online courses html header
			$("#education").append(HTMLonlineClasses);
			
			// create number to add unique #id for collapse targets in online courses list
			var i=0;
			// loop through onlineCourses array in education object, retrieve school objects info, update and display html
			education.onlineCourses.forEach(function(course){
				
				// increment i by 1
				i++;
				// display online courses history 
				var formattedTitle = '<div class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" data-parent="#education"  href="#course'+i+'">'+course.title;
				var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
				var formattedDates = '<div id="course'+i+'" class="panel-collapse collapse"><div class="panel-body">'+HTMLonlineDates.replace("%data%", course.date);
				var formattedURL = HTMLonlineURL.replace("%data%", course.url);
				var endCourseDiv = '</div></div><!-- end course'+i+' div -->';
				
				$("#education").append(HTMLschoolStart);
				$(".education-entry:last").append(formattedTitle + formattedSchool); // concatenate vars to avoid HTML breaks
				$(".education-entry:last").append(formattedDates + formattedURL + endCourseDiv); // concatenate vars to avoid HTML breaks

			});// end forEach
		}// end if hasOwnProperty
	} //end function display
}; //end education object

// call object display functions for each resume section
bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

