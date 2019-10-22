const Promise = require('bluebird');
const db = require('../index');

module.exports = Promise.promisifyAll({
  songSaver: (song, cb) => {
    const stmt = `INSERT INTO songs (songId, length, timestamp, isliked, songFile, title, artist, album, thumbnail) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
              `;
    const songVals = [
      song.songId,
      song.length,
      song.timestamp,
      song.isliked,
      song.songFile,
      song.title,
      song.artist,
      song.album,
      song.thumbnail,
    ];
    db.queryAsync(stmt, songVals)
      .then((results) => cb(null, results))
      .catch((err) => cb(err));
  },
  playlistSaver: (songId, playlist, cb) => {
    const stmt = `INSERT INTO ${playlist} (songId) 
               VALUES (?)
              `;
    const songVal = [songId];
    db.queryAsync(stmt, songVal)
      .then((results) => cb(null, results))
      .catch((err) => cb(err));
  },
  songGetter: (songId, cb) => {
    const stmt = 'SELECT * FROM songs WHERE id = ?';
    const songVal = [songId];
    db.queryAsync(stmt, songVal)
      .then((results) => cb(null, results))
      .catch((err) => cb(err));
  },
  playlistGetter: (playlist, cb) => {
    const stmt = `SELECT * FROM ${playlist}`;
    db.queryAsync(stmt)
      .then((results) => cb(null, results))
      .catch((err) => cb(err));
  },
  likeUpdater: (songId, like, cb) => {
    const newStatus = like ? 0 : 1;
    const stmt = `UPDATE songs SET isliked = ${newStatus}
                  WHERE songId = ${songId}
                  `;
    db.queryAsync(stmt)
      .then((results) => cb(null, results))
      .catch((err) => cb(err));
  },
});
