const express = require('express');
const path = require('path');
const livereload = require('livereload');
const connectLiveReload = require('connect-livereload');

const liveReloadServer = livereload.createServer();
//Only watches the .html file.
// liveReloadServer.watch('view');

//Watches the js files as well
liveReloadServer.watch('');

const app = express();
const port = process.env.PORT || 8000;

app.use(connectLiveReload());
app.use(express.static('src'));

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/view/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);