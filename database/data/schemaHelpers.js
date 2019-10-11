const db = require('../index');

module.exports = {
  songGenerator: (song, cb) => {
    // TBD: write code to generate a single song instance
    const stmt = `insert into songs (length, timestamp, isliked, songfile, title, artist, album, thumbnail) 
               values (?, ?, ?, ?, ?, ?, ?, ?)
              `;
    let songVals = [
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
  upNext: () => {
    // TBD: write code to generate a single upNext play instance
  }
};

/*
insert into songs (length, timestamp, isliked, songfile, title, artist, album, thumbnail) values (189, 0, 1, "www.songFile", "A Song I like", "An Artist", "A Great Album", "www.thumbnailLoc");
*/