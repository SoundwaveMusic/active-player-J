const schema = require('../database/data/schemaHelpers');

module.exports = {
  play: (req, res) => {
    console.log(req.params.songid);
    schema.songGetterAsync(req.params.songid)
      .then((results) => res.send(results))
      .catch((err) => res.send(err));
  },
  playlist: (req, res) => {
    schema.playlistGetterAsync(req.params.playlist)
      .then((results) => res.send(results))
      .catch((err) => res.send(err));
  }
};
