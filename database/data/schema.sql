-- schema for postgreSQL
DROP DATABASE [IF EXISTS] songs;

CREATE DATABASE [IF NOT EXISTS] songs;

CREATE TABLE song (
  song_id INTEGER PRIMARY KEY,
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

-- schema for cassandra
CREATE TABLE song (
  song_id int PRIMARY KEY,
  songLength int,
  isLiked smallint,
  songFile varchar,
  title varchar,
  artist varchar,
  album varchar,
  thumbnail varchar
)

CREATE TABLE playlist (
  playlist_id uuid PRIMARY KEY,
  songId int,
  listSongId int
)






-- DROP DATABASE IF EXISTS soundCloutPlayer;

-- CREATE DATABASE soundCloutPlayer;

-- USE soundCloutPlayer;

-- CREATE TABLE songs
--   id INT NOT NULL AUTO_INCREMENT,
--   songId INT NOT NULL,
--   length INT NOT NULL,
--   timestamp INT DEFAULT 0,
--   isliked TINYINT DEFAULT 0,
--   songFile VARCHAR(150),
--   title VARCHAR(150),
--   artist VARCHAR(60),
--   album VARCHAR(60),
--   thumbnail VARCHAR(150),
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE upNext (
--   position INT AUTO_INCREMENT,
--   songId INT,
--   FOREIGN KEY (songId) 
--     REFERENCES songs(id)
--     ON UPDATE CASCADE,
--   UNIQUE KEY (position)
-- );

-- CREATE TABLE previousPlays (
--   position INT AUTO_INCREMENT,
--   songId INT,
--   FOREIGN KEY (songId) 
--     REFERENCES songs(id)
--     ON UPDATE CASCADE,
--   UNIQUE KEY (position)
-- );
