const db = require('../index');

module.exports = {
  songGenerator: (song, cb) => {
    // TBD: write code to generate a single song instance
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
      .then(results => cb(null, results))
      .catch(err => cb(err));
  },
  upNextGenerator: (songid, cb = (err, results) => console.log(err, results)) => {
    // TBD: write code to generate a single upNext play instance
    const stmt = `insert into upnext (songid) 
               values (?)
              `;
    const songVal = [songid];
    db.queryAsync(stmt, songVal)
      .then(results => cb(null, results))
      .catch(err => cb(err));
  },
};
