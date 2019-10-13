const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cb = require('./routeCallbacks');

const app = express();
const port = 3020;

const jsonParser = bodyParser.json()

app.use(express.static(path.join(__dirname, '../public')));

app.get('/play/:songid', cb.getPlay);

app.get('/:playlist', cb.getPlaylist);

app.post('/timestamp/:songid', jsonParser, cb.timestampEntry);

app.post('/playlist/:playlist', jsonParser, cb.playlistEntry);

app.listen(port);
