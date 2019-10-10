const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/test', (req, res) => {
  res.send('It works!');
});

app.listen(3020);
