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
      .catch((err) => res.send(err));
  },
  playlistEntry: (req, res) => {
    console.log(req.params.songid, req.body.playlist);
    schema.playlistSaverAsync(req.params.songid, req.body.playlist)
      .then((results) => res.send(results))
      .catch((err) => res.send(err));
  },
};
