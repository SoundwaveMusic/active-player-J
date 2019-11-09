const faker = require('faker');
const schema = require('./data/schemaHelpers');
const exampleSongs = require('./data/exampleSongs');
const fs = require("fs");

let songOption = [
  'https://sound-clout.s3-us-west-1.amazonaws.com/Fleas.mp3',
  'https://sound-clout.s3-us-west-1.amazonaws.com/01+Wakin+On+A+Pretty+Day.mp3',
  `https://sound-clout.s3-us-west-1.amazonaws.com/09+Bugs+Don't+Buzz.mp3`,
  'https://sound-clout.s3-us-west-1.amazonaws.com/Midnight_Prophet.mp3',
  'https://sound-clout.s3-us-west-1.amazonaws.com/Princess.mp3',
  'https://sound-clout.s3-us-west-1.amazonaws.com/Scratching_Teeth.mp3',
  'https://sound-clout.s3-us-west-1.amazonaws.com/The_Getaway.mp3',
  'https://sound-clout.s3-us-west-1.amazonaws.com/Grant_Green.mp3',
  'https://sound-clout.s3-us-west-1.amazonaws.com/Inkling.mp3',
  'https://sound-clout.s3-us-west-1.amazonaws.com/Glory_Be.mp3',
  'https://sound-clout.s3-us-west-1.amazonaws.com/Timeless.mp3'
]

function getSong () {
  let songInfo = [];
  let randomIndex = faker.random.number({ min:0, max: 10 })
  songInfo.push (
    faker.random.number({ min: 100, max: 900 }),
    Math.floor(Math.random() * 2),
    songOption[randomIndex],
    `"${faker.random.words()}"`,
    faker.name.findName(),
    faker.commerce.productName(),
    faker.image.imageUrl()
    ) 
  return songInfo
}

function getPlayList (id) {
  let list = [];
  for (let j = 0; j < 5; j++) {
    let playlist = []
    let songId = faker.random.number({ min: 1, max: 10000000 })
    playlist.push(id, songId)
    list.push(playlist)
  }
  return list
}

  let dataSet1 = 10000000;
  let dataSet2 = 10000000;
  let songsData = fs.createWriteStream("songsData.csv");
  songsData.on('error', (e) => {
    console.log(e);
  })
  songsData.on('finish', () => {
    console.log('songsData file successfully processed')
    console.timeEnd()
  })

  let playListsData = fs.createWriteStream("playListsData.csv");
  playListsData.on('error', (e) => {
    console.log(e);
  })
  playListsData.on('finish', () => {
    console.log('playListsData file successfully processed')
  })

  writeSongFile();
  console.log('write starts')
  console.time()
  writePlayListFile();

  function writeSongFile() {
    let ok1 = true;
    do {
      let song = getSong().join(',') + "\n"
      dataSet1 -= 1;
      if (dataSet1 === 0) {
        songsData.write(song);
        songsData.end()
      } else {
        ok1 = songsData.write(song);
      }
    } while (dataSet1 > 0 && ok1);
    if (dataSet1 > 0) {
      songsData.once('drain', writeSongFile);
    }
  }

  function writePlayListFile() {
    let ok2 = true;
    do {
      let firstSet = getPlayList(dataSet2)
      dataSet2 -= 1;
      firstSet.forEach(row => {
        let playlist = row.join(',') + "\n"
        if (dataSet2 === 0) {
          playListsData.write(playlist);
        } else {
          ok2 = playListsData.write(playlist);
        }
      })
    } while (dataSet2 > 0 && ok2);
    if (dataSet2 > 0) {
      playListsData.once('drain', writePlayListFile);
    }
  }


    // const sampleSong = exampleSongs[i] || randomSong;
    // schema.songSaverAsync(sampleSong)
    //   // .then((results) => schema.playlistSaverAsync(results.insertId, 'upNext'))
    //   .then((results) => console.log('upNextGeneratorAsync result', results))
    //   .catch((err) => console.log('upNextGeneratorAsync err', err));

    //COPY song(songLength, isLiked, songFile, title, artist, album, thumbnail) FROM '~/programing/hrext-Junior/soundclout-active-player-module/database/songsData.csv' DELIMITER ',';

