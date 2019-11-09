-- schema for postgreSQL (songs/song)
DROP DATABASE [IF EXISTS] songs;

CREATE DATABASE [IF NOT EXISTS] songs;

CREATE TABLE song (
  song_id SERIAL PRIMARY KEY,
  songLength INTEGER,
  isLiked BOOLEAN NOT NULL,
  songFile VARCHAR (355),
  title VARCHAR (355),
  artist VARCHAR (355),
  album VARCHAR (355),
  thumbnail VARCHAR(355)
);

CREATE TABLE playlist (
  playlist_id serial PRIMARY KEY,
  songId INTEGER REFERENCES song(song_id),
  listSongId INTEGER REFERENCES song(song_id)
);

--insert into song (song_id, list_id, songlength, isliked, songfile, title, artist, album, thumbnail) values 
