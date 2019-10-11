const express = require('express');
const path = require('path');
const cb = require('./routeCallbacks');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/play/:songid', cb.play);

app.get('/:playlist', cb.playlist);

app.listen(3020);
