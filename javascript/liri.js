require("dotenv").config();


const dotenv = require('dotenv').config();
const keys = require('./keys');
const request = require('request');
const Twitter = require('twitter');
const Spotify = require('node-spotify-api');
const fs = require('file-system');

var spotify = new Spotify({
  id: keys.spotify.id,
  secret: keys.spotify.secret
});

const client = new Twitter(keys.twitter);

const params = {
	screen_name: 'madsmorris14',
	count: 20,
};
//Twitter
var tweets = function(){
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!!error) {
    console.log(error);
  } else {
  	for (var i = 0; i < tweets.length; i++) {
  		console.log(tweets[i].created_at + " " + tweets[i].text)
  	};
  }
});
};

// Spotify

var songs = function() {
  var q = process.argv[3];
    if (q === undefined) {
      q = 'I want it that way'
    };
  spotify.search({type: 'track', query: q, limit: 1}, function(err, data) {
    if(err) {throw err;}    
    console.log(data);
    if(q !== null){
      console.log(data.tracks.items[0].album.artists[0].name); 
      console.log(data.tracks.items[0].name);
      console.log(data.tracks.items[0].album.name);
      console.log(data.tracks.items[0].external_urls.spotify);
    }
  });
};


//OMDB


function movieRequest () {
  var movie = process.argv[3];
  var url = "http://www.omdbapi.com/?apikey=" + keys.omdb.apiKey + "&t=" + movie;
  console.log("url: ", url)
  request(url, function(error, response, body) {
    var resBody = JSON.parse(body);
  if (!error) {
    console.log("Title: " + resBody.Title);
    console.log("Year Released: " + resBody.Released);
    console.log("imdbRating: " + resBody.imdbRating);
    console.log("Rotten Tomatoes Rating: " + resBody.Ratings[1].Value);
    console.log("Country: " + resBody.Country);
    console.log("Language: " + resBody.Language);
    console.log("Plot: " + resBody.Plot);
    console.log("Cast: " + resBody.Actors);
  }
});
}

function init() {
  var arg = process.argv[2];
  if (arg === 'movie-this') {
    movieRequest();
  }
  else if (arg === 'spotify-this-song') {
    songs();
  }
  else if (arg === 'my-tweets') {
    tweets();
  };  
}

init();