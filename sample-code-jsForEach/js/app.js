console.log('Sanity Check: app.js is linked correctly!');

$(document).ready(function(){

  // select a template script, and pull out the handlebars and html inside it
  var source = $('#developer-li-template').html();
  // console.log('template script source:', source);

  // compile the handlebars template
  var template = Handlebars.compile(source);
  // console.log(template);

  // use the template function from handlebars to create an HTML string
  // the template function takes in an object where:
    // each key is a variable the html template expects
    // each key's value is the data we want that variable to have
  data.developers.forEach(function(developer){
    var developerHtml = template({ github_username: developer.github_username,
      first_name: developer.first_name,
      last_name: developer.last_name
     });
    // console.log('generated html string:', developerHtml);

    // append html to the view
    $("#developers-list").append(developerHtml);
  });

  var sourceClassNumber = $('#developer-class-template').html();
  var templateClassNumber = Handlebars.compile(sourceClassNumber);

  console.log('cohort is ' + data.cohort);
  var devClassNumber = template({class_number: data.cohort})
});
