const Promise = require('bluebird');
const db = require('../index');

module.exports = Promise.promisifyAll({
  songSaver: (song, cb) => {
    const stmt = `insert into songs (length, timestamp, isliked, songfile, title, artist, album, thumbnail) 
               values (?, ?, ?, ?, ?, ?, ?, ?)
              `;
    const songVals = [
      song.length,
      song.timestamp,
      song.isliked,
      song.songfile,
      song.title,
      song.artist,
      song.album,
      song.thumbnail,
    ];
    db.queryAsync(stmt, songVals)
      .then((results) => cb(null, results))
      .catch((err) => cb(err));
  },
  playlistSaver: (songid, playlist, cb) => {
    const stmt = `insert into ${playlist} (songid) 
               values (?)
              `;
    const songVal = [songid];
    db.queryAsync(stmt, songVal)
      .then((results) => cb(null, results))
      .catch((err) => cb(err));
  },
  songGetter: (songid, cb) => {
    const stmt = 'SELECT * FROM songs WHERE id = ?';
    const songVal = [songid];
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
});

/* Limit to first song:

                ORDER BY position ASC
                LIMIT 1
                
*/
