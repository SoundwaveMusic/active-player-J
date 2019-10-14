const schema = require('./data/schemaHelpers');
const exampleSongs = require('./data/exampleSongs');

const seedData = () => {
  for (let i = 0; i < 15; i += 1) {
    // If no song at that index, use the last song (uses faker data to fill in details)
    const sampleSong = exampleSongs[i] || exampleSongs[exampleSongs.length - 1];
    schema.songSaverAsync(sampleSong)
      .then((results) => schema.playlistSaverAsync(results.insertId, 'upnext'))
      .then((results) => console.log('upNextGeneratorAsync result', results))
      .catch((err) => console.log('upNextGeneratorAsync err', err));
  }
};

seedData();
