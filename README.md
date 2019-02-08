# Where To Start
## Find your entrypoint to your new favorite band

Where To Start is an app that gives a user the ideal entrypoint, either song or album,
 to a recording artist.

It works by searching the last.fm API for top albums or top songs by a particular artists
and gives the user an easy and concise entrypoint to their catalog.  

The user will also be able to add a list of their favorite artists.  

The app will suggest similar artists and entrypoints based on what the user has listed.

## User Stories

A user searches for a music artist, and where to start displays the top recommended album
and top several songs from that artists

A user logs in the server and is able to:

A user adds, views, edits, or deletes artists from a list of their favorites. 

A user hits the "find your next favorite artists" button and a list of similar artists with
their entrypoints is returned

A user creates a playlist of songs that can be CRUD'd.  The user hits the "find similar songs"
button and a list of similar tracks is returned

## MVP

Create a CRUDable list of favorite artists.  

Show a list of similar artists to the ones favorited.  

For each artist, show several albums and tracks that are good entrypoints to their catalog

## Stretch Goals

Integrate Spotify's API to be able to play tracks or albums from the app

Show comments that last.fm users have left on that album or track

Dynamically create playlists based on what is already in the user's library

## Useful Endpoints from Last.fm:

Where to start uses the Last.fm API hosted at http://ws.audioscrobbler.com/2.0/
 to find entrypoints to artists with deep catalogs

artist.getSimilar
artist.getTopAlbums
artist.getTopTracks
artist.getTopTags
artist.getInfo

tag.getSimilar
tag.getTopAlbums
tag.getTopTracks
tag.getInfo

album.getTopTags
album.getInfo

track.getSimilar
track.getTopTags
track.getInfo

## Wireframes:

![alt text](./public/wireframes/Home.jpg "Home Wireframe")
![alt text](./public/wireframes/Artist.jpg " Wireframe")
![alt text](./public/wireframes/Login.jpg "Login Wireframe")
![alt text](./public/wireframes/Playlist.jpg "Playlist Wireframe")






























This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
