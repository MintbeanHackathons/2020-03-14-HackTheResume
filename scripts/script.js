var context = {
  header: {
    name: "Kayla",
    title: "Full Stack Developer",
    email: "knoronha@",
    mobile: "226",
    location: "Toronto,ON",
    git: {
      link: "https://github.com/K-Noronha",
      title: "Github.com/K-Noronha"
    }
  },
  summary:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
,
  experience: [
    {
      position: "Developer",
      date: "Jan 19 - Present",
      achievements: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
      ]
    },
    {
      position: "Developer2",
      date: "Jan 17 - Dec 18",
      achievements: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
      ]
    }
  ]
  };


//Compliles the template
var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);

//Gets the resulting HTML
var updatedhtml = template(context);

//Updates the DOM
document.getElementById("content-placeholder").innerHTML = updatedhtml;
