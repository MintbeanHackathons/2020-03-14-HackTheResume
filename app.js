
let resume ={
    "basics": {
      "name": "Richard Hendriks",
      "label": "Programmer",
      "image": "",
      "email": "richard.hendriks@mail.com",
      "phone": "(912) 555-4321",
      "url": "http://richardhendricks.example.com",
      "summary": "Richard hails from Tulsa. He has earned degrees from the University of Oklahoma and Stanford. (Go Sooners and Cardinal!) Before starting Pied Piper, he worked for Hooli as a part time software developer. While his work focuses on applied information theory, mostly optimizing lossless compression schema of both the length-limited and adaptive variants, his non-work interests range widely, everything from quantum computing to chaos theory. He could tell you about it, but THAT would NOT be a “length-limited” conversation!",
    },
    "work": [
      {
        "name": "Pied Piper",
        "location": "Palo Alto, CA",
        "description": "Awesome compression company",
        "position": "CEO/President",
        "url": "http://piedpiper.example.com",
        "startDate": "2013-12-01",
        "endDate": "2014-12-01",
        "summary": "Pied Piper is a multi-platform technology based on a proprietary universal compression algorithm that has consistently fielded high Weisman Scores™ that are not merely competitive, but approach the theoretical limit of lossless compression.",
        "highlights": [
          "Build an algorithm for artist to detect if their music was violating copy right infringement laws",
          "Successfully won Techcrunch Disrupt",
          "Optimized an algorithm that holds the current world record for Weisman Scores"
        ]
      }
    ],
    "volunteer": [
      {
        "organization": "CoderDojo",
        "position": "Teacher",
        "url": "http://coderdojo.example.com/",
        "startDate": "2012-01-01",
        "endDate": "2013-01-01",
        "summary": "Global movement of free coding clubs for young people.",
        "highlights": [
          "Awarded 'Teacher of the Month'"
        ]
      }
    ],
    "education": [
      {
        "institution": "University of Oklahoma",
        "area": "Information Technology",
        "studyType": "Bachelor",
        "startDate": "2011-06-01",
        "endDate": "2014-01-01",
        "gpa": "4.0",
        "courses": [
          "DB1101 - Basic SQL",
          "CS2011 - Java Introduction"
        ]
      }
    ],
    "awards": [
      {
        "title": "Digital Compression Pioneer Award",
        "date": "2014-11-01",
        "awarder": "Techcrunch",
        "summary": "There is no spoon."
      }
    ],
    "publications": [
      {
        "name": "Video compression for 3d media",
        "publisher": "Hooli",
        "releaseDate": "2014-10-01",
        "url": "http://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)",
        "summary": "Innovative middle-out compression algorithm that changes the way we store data."
      }
    ],
    "skills": [
      {
        "name": "Web Development",
        "level": "Master",
        "keywords": [
          "HTML",
          "CSS",
          "Javascript"
        ]
      },
      {
        "name": "Compression",
        "level": "Master",
        "keywords": [
          "Mpeg",
          "MP4",
          "GIF"
        ]
      }
    ],
    "languages": [
      {
        "language": "English",
        "fluency": "Native speaker"
      }
    ],
    "interests": [
      {
        "name": "Wildlife",
        "keywords": [
          "Ferrets",
          "Unicorns"
        ]
      }
    ],
    "projects": [
      {
        "name": "Miss Direction",
        "description": "A mapping engine that misguides you",
        "highlights": [ 
          "Won award at AIHacks 2016",
          "Built by all women team of newbie programmers",
          "Using modern technologies such as GoogleMaps, Chrome Extension and Javascript"
        ],
        "keywords": [
          "GoogleMaps", "Chrome Extension", "Javascript"
        ],
        "startDate": "2016-08-24",
        "endDate": "2016-08-24", 
        "url": "missdirection.example.com",
        "roles": [ 
          "Team lead", "Designer"
        ],
        "entity": "Smoogle",
        "type": "application"
      }
    ]
  }



function getResume(){
    let element
    let className
    
    var basics = document.getElementById("basics")
    for (const [key, value] of Object.entries(resume.basics)) {
        className = "basic_" + key
        element = document.createElement("P")
        element.textContent = value
        element.classList.add( className )
        basics.appendChild(element)
      }
      var work = document.getElementById("work")
      resume.work.forEach (elementArr => {
        for (const [key, value] of Object.entries(elementArr)) {
            className = "work" + key
            element = document.createElement("P")
            element.textContent = value
            element.classList.add( className )
            work.appendChild(element)
          }
      })

      var volunteer = document.getElementById("volunteer")
      resume.volunteer.forEach (elementArr => {
        for (const [key, value] of Object.entries(elementArr)) {
            className = "volunteer" + key
            element = document.createElement("P")
            element.textContent = value
            element.classList.add( className )
            volunteer.appendChild(element)
          }
      })

      var education = document.getElementById("education")
      resume.education.forEach (elementArr => {
        for (const [key, value] of Object.entries(elementArr)) {
            className = "volunteer" + key
            element = document.createElement("P")
            element.textContent = value
            element.classList.add( className )
            education.appendChild(element)
          }
      })

      var awards = document.getElementById("awards")
      resume.awards.forEach (elementArr => {
        for (const [key, value] of Object.entries(elementArr)) {
            className = "awards" + key
            element = document.createElement("P")
            element.textContent = value
            element.classList.add( className )
            awards.appendChild(element)
          }
      })
      var publications = document.getElementById("publications")
      resume.publications.forEach (elementArr => {
        for (const [key, value] of Object.entries(elementArr)) {
            className = "publications" + key
            element = document.createElement("P")
            element.textContent = value
            element.classList.add( className )
            publications.appendChild(element)
          }
      })

      var skills = document.getElementById("skills")
      resume.skills.forEach (elementArr => {
        for (const [key, value] of Object.entries(elementArr)) {
            className = "skills" + key
            element = document.createElement("P")
            element.textContent = value
            element.classList.add( className )
            skills.appendChild(element)
          }
      })
  
      var languages = document.getElementById("languages")
      resume.languages.forEach (elementArr => {
        for (const [key, value] of Object.entries(elementArr)) {
            className = "languages" + key
            element = document.createElement("P")
            element.textContent = value
            element.classList.add( className )
            languages.appendChild(element)
          }
      })     

      var interests = document.getElementById("interests")
      resume.languages.forEach (elementArr => {
        for (const [key, value] of Object.entries(elementArr)) {
            className = "interests" + key
            element = document.createElement("P")
            element.textContent = value
            element.classList.add( className )
            interests.appendChild(element)
          }
      })     


       var projects = document.getElementById("projects")
       resume.projects.forEach (elementArr => {
        for (const [key, value] of Object.entries(elementArr)) {
            className = "projects" + key
            element = document.createElement("P")
            element.textContent = value
            element.classList.add( className )
            projects.appendChild(element)
          }
      })     

}