const schema = require('../database/data/schemaHelpers');

module.exports = {
  play: (req, res) => {
    schema.songGetterAsync(req.params.songid)
      .then((results) => res.send(results))
      .catch((err) => res.send(err));
  },
  playlist: (req, res) => {
    schema.playlistGetterAsync(req.params.playlist)
      .then((results) => res.send(results))
      .catch((err) => res.send(err));
  },
  pause: (req, res) => {
    console.log('songid: ', req.params.songid);
    console.log('song timestamp: ', req.body.timestamp);
    schema.timestampUpdaterAsync(req.params.songid, req.body.timestamp)
      .then((results) => res.send(results))
      .catch((err) => res.send(err));
  },
};
