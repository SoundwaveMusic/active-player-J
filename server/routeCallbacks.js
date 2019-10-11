const schema = require('../database/data/schemaHelpers');

module.exports = {
  test: (req, res) => {
    res.send('It works!');
  },
  play: (req, res) => {
    console.log(req.params.songid);
    schema.songGetterAsync(req.params.songid)
      .then((results) => res.send(results))
      .catch((err) => res.send(err));
  },
};
