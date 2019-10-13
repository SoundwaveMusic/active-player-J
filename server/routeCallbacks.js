const schema = require('../database/data/schemaHelpers');

module.exports = {
  getPlay: (req, res) => {
    schema.songGetterAsync(req.params.songid)
      .then((results) => res.send(results))
      .catch((err) => res.send(err));
  },
  getPlaylist: (req, res) => {
    schema.playlistGetterAsync(req.params.playlist)
      .then((results) => res.send(results))
      .catch((err) => res.send(err));
  },
  timestampEntry: (req, res) => {
    schema.timestampUpdaterAsync(req.params.songid, req.body.timestamp)
      .then((results) => res.send(results))
      .catch((err) => res.status(200).send(err));
  },
  playlistEntry: (req, res) => {
    schema.playlistSaverAsync(req.body.songid, req.params.playlist)
      .then((results) => res.status(201).send(results))
      .catch((err) => res.send(err));
  },
};
