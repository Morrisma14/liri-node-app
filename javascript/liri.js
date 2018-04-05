require("dotenv").config();

var client = new Twitter(keys.twitter);

const dotenv = require('dotenv').config();
const keys = require('./keys');
const request = require('request');
const Twitter = require('twitter');


const client = new Twitter(keys.twitter);

//Grabbing commands 
var arg = process.argv[2];

// Twitter
//setting the parameters for the response
const params = {
	screen_name: 'madsmorris14',
	count: 20,
};
//grabbing Tweets from Twitter API
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
//my-tweets
if (arg === 'my-tweets') {
	tweets();
};