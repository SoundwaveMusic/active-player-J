const faker = require('faker');
const fs = require("fs");
const Uuid = require("cassandra-driver").types.Uuid;

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

function getSong (id) {
let playList = [];
let randomIndex = faker.random.number({ min:0, max: 10 })
for (let i = 0; i < 5; i++) {
    let songInfo = []
    songInfo.push (
        Uuid.random(),
        id,
        faker.random.number({ min: 100, max: 900 }),
        Math.floor(Math.random() * 2),
        songOption[randomIndex],
        `"${faker.random.words()}"`,
        `"${faker.name.findName()}"`,
        `"${faker.commerce.productName()}"`,
        `"${faker.image.imageUrl()}"`
        ) 
    playList.push(songInfo)
}
return playList
}

let dataSet1 = 10000000;

let songsData = fs.createWriteStream("playlist.csv");
  songsData.on('error', (e) => {
    console.log(e);
  })
  songsData.on('finish', () => {
    console.log('songsData file successfully processed')
    console.timeEnd()
  })

writeSongFile();
console.log('write starts')
console.time()

function writeSongFile() {
let ok1 = true;
do {
    let playList = getSong(dataSet1)
    dataSet1 -= 1;
    playList.forEach((song, index) => {
        let csvSong = song.join(',') + "\n"
        if (dataSet1 === 0 && index === 4) {
        songsData.write(csvSong);
        songsData.end()
        } else {
        ok1 = songsData.write(csvSong);
        }
    })
} while (dataSet1 > 0 && ok1);
    if (dataSet1 > 0) {
        songsData.once('drain', writeSongFile);
    }
}