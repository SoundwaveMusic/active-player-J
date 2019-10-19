DROP DATABASE IF EXISTS soundClout;

CREATE DATABASE soundClout;

USE soundClout;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  songId INT NOT NULL,
  length INT NOT NULL,
  timestamp INT DEFAULT 0,
  isliked TINYINT DEFAULT 0,
  songFile VARCHAR(150),
  title VARCHAR(150),
  artist VARCHAR(60),
  album VARCHAR(60),
  thumbnail VARCHAR(150),
  PRIMARY KEY (id)
);

CREATE TABLE upNext (
  position INT AUTO_INCREMENT,
  songId INT,
  FOREIGN KEY (songId) 
    REFERENCES songs(id)
    ON UPDATE CASCADE,
  UNIQUE KEY (position)
);

CREATE TABLE previousPlays (
  position INT AUTO_INCREMENT,
  songId INT,
  FOREIGN KEY (songId) 
    REFERENCES songs(id)
    ON UPDATE CASCADE,
  UNIQUE KEY (position)
);
