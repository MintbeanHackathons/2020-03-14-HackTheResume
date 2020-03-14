
var context = { "title": "My New Post", "body": "This is my first post!" }

var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);


var updatedhtml = template(context);


document.getElementById("content-placeholder").innerHTML = updatedhtml;