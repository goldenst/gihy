//console.log('from app.js');


var topics = ['cars', 'trucks', 'boats', ' cats', 'dogs']
// q=query topic
var q;
var limit = 10;
var rating = 'pg';

var key = "HtScezf9iTOzBQNaOwLrlCPC7kjSYYBM";
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + key + "&q=towing&limit=10&offset=0&rating=G&lang=en";

var search;

// ################  cannot get value from buttons #############################
$("button").on('click', function () {
  search = $(this).attr("data-name");
  
});
console.log((this).attr);

console.log('search ' + search);

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  // console.log(queryURL);

  console.log(response.data);

  for (var j = 0; j < response.data.length; j++) {
    console.log(response.data[j].url)

    var gifDiv = $("<div>");

    // var p = $("<p>").text("Rating: " + response[j].rating);

    var gifImage = $("<img>");

    gifImage.attr("src", response.data[j].images.fixed_height.url);

    // gifDiv.append(p);
    gifDiv.append(gifImage);

    $("#gifsHere").prepend(gifDiv);
  }

});

// A $( document ).ready() block.
$(document).ready(function () {
  //console.log( "document . ready!" );

  function renderButtons() {

    // Delete the content inside the Topics-view div prior to adding 
    $("#topics-view").empty();
 
    // Loop through the array of Topics, then generate buttons for each movie in the array
    for (var i = 0; i < topics.length; i++) {

      var a = $("<button>");
      a.addClass("topic");
      a.attr("data-name", topics[i]);
      a.text(topics[i]);
      $("#topics-view").append(a);

      //console.log(topics)
    }
  }

  // This function handles events where the add movie button is clicked
  $("#add-topic").on("click", function (event) {

    event.preventDefault();

    // Write code to grab the text the user types into the input field
    var topic = $("#topic-input").val().trim();
    // Write code to add the new movie into the movies array
    topics.push(topic);
    // The renderButtons function is called, rendering the list of movie buttons
    renderButtons();
  });

  // Calling the renderButtons function to display the initial list of movies
  renderButtons();
 
});