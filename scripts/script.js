
var context = { "name": "Kayla", "title": "Full Stack Developer", "email": "knoronha@", "mobile": "226"}

var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);


var updatedhtml = template(context);


document.getElementById("content-placeholder").innerHTML = updatedhtml;