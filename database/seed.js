const Promise = require('bluebird');
const schema = require('./data/schemaHelpers');

// note default properties: id, timestamp, and isliked
const sampleSong = {
  length: 167,
  songfile: 'www.acoolsongfile.com',
  title: 'A Cool Song',
  artist: 'Cool One',
  album: 'These are Great!',
  thumbnail: 'www.reallysmallpic.com',
};

const seedData = () => {
  schema.songGenerator(sampleSong, (err, results) => {
    if (err) console.log('err', err);
    console.log('results', results);
  });
};

seedData();
