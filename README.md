# liri-node-app
LIRI is a command line node app that takes in parameters and returns data based on one of three commands:

  * `my-tweets`

  * `spotify-this-song`

  * `movie-this`

## How To Use Liri Bot

- Clone https://github.com/Morrisma14/liri-node-app
- Run command 'npm install' in Terminal or GitBash
- Run command 'node liri.js' or one of the commands below.

## What Each Command Does

1. `node javascript/liri.js my-tweets`

  * Displays my last 20 tweets and when they were created in terminal/bash window.

2. `node javascript/liri.js spotify-this-song 'song name'`

  * Shows the following information about the song in terminal/bash window.
    * Artist(s)
    * The song's name
    * A preview link of the song from Spotify
    * The album that the song is from

3. `node javascript/liri.js movie-this 'movie name'`

  * Shows the following information in terminal/bash.

    * Title of the movie.
    * Year the movie came out.
    * IMDB Rating of the movie.
    * Country where the movie was produced.
    * Language of the movie.
    * Plot of the movie.
    * Actors in the movie.
    * Rotten Tomatoes Rating.
    * Rotten Tomatoes URL.

  * If no movie is passed through, it will default to "Mr. Nobody"

## Tech used
- Node.js
- Twitter NPM Package - https://www.npmjs.com/package/twitter
- Spotify NPM Package - https://www.npmjs.com/package/spotify
- Request NPM Package - https://www.npmjs.com/package/reques
