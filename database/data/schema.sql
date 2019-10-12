DROP DATABASE IF EXISTS soundClout;

CREATE DATABASE soundClout;

USE soundClout;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  length INT NOT NULL,
  timestamp INT DEFAULT 0,
  isliked TINYINT DEFAULT 0,
  songfile VARCHAR(150),
  title VARCHAR(150),
  artist VARCHAR(60),
  album VARCHAR(60),
  thumbnail VARCHAR(150),
  PRIMARY KEY (id)
);

CREATE TABLE upnext (
  songid INT,
  position INT AUTO_INCREMENT,
  FOREIGN KEY (songid) 
    REFERENCES songs(id)
    ON UPDATE CASCADE,
  UNIQUE KEY (position)
);

CREATE TABLE previousplays (
  songid INT,
  position INT AUTO_INCREMENT,
  FOREIGN KEY (songid) 
    REFERENCES songs(id)
    ON UPDATE CASCADE,
  UNIQUE KEY (position)
);
