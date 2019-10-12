const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cb = require('./routeCallbacks');

const app = express();

const jsonParser = bodyParser.json()

app.use(express.static(path.join(__dirname, '../public')));

app.get('/play/:songid', cb.play);

app.get('/:playlist', cb.playlist);

app.post('/pause/:songid', jsonParser, cb.pause);

app.listen(3020);
