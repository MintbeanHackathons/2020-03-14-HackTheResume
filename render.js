function renderHello() {
  var template = document.getElementById('template').innerHTML;
  var rendered = Mustache.render(template, { resume });
  document.getElementById('target').innerHTML = rendered;
}