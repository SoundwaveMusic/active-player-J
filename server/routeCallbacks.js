const schema = require('../database/data/schemaHelpers');
const db = require('../database/index')


module.exports = {
  getSong: (req, res) => {
    db.query(`SELECT * FROM song INNER JOIN playlist ON song.song_id = playlist.listsongid WHERE playlist.songid = ${req.params.id}`, ((err, data) => {
      if(err) {
        res.send(500)
      } else {
        res.send(data.rows)
      }
    }))
  },
  likeEntry: (req, res) => {
    db.query(`UPDATE song SET isliked = ${req.body.isliked} WHERE song_id = ${Number(req.params.songId)}`, ((err, data) => {
      if(err) {
        console.log(err)
      } else {
        res.send(data.rows)
      }
    }))
  },
  playlistEntry: (req, res) => {
    db.query(`INSERT INTO playlist(songId, listSongId) VALUES (${req.body.listId}, ${Number(req.params.songId)})`, ((err,data) => {
      if(err) {
        console.log(err)
      } else {
        res.send(data.rows)
      }
    }))
  }, playlistDelete: (req, res) => {
    db.query(`DELETE FROM playlist WHERE playlist_id = ${req.params.listId}`, ((err,data) => {
      if(err) {
        console.log(err)
      } else {
        res.send(data.rows)
      }
    }))
  }
};
