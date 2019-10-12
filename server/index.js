const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cb = require('./routeCallbacks');

const app = express();

const jsonParser = bodyParser.json()

app.use(express.static(path.join(__dirname, '../public')));

app.get('/play/:songid', cb.getPlay);

app.get('/:playlist', cb.getPlaylist);

app.post('/timestamp/:songid', jsonParser, cb.timestampEntry);

app.post('/playlist/:songid', jsonParser, cb.playlistEntry);

app.listen(3020);
