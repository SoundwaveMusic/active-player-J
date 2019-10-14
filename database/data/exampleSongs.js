const faker = require('faker');

module.exports = [
  {
    id: 141,
    length: 571,
    timestamp: 0,
    isliked: Math.floor(Math.random() * 2),
    songfile: 'https://sound-clout.s3-us-west-1.amazonaws.com/01+Wakin+On+A+Pretty+Day.mp3',
    title: 'Wakin on a Pretty Day',
    artist: 'Kurt Vile',
    album: 'Wakin on a Pretty Daze',
    thumbnail: 'https://sound-clout.s3-us-west-1.amazonaws.com/SummerDaze.jpeg',
  },
  {
    // songid: Math.floor(Math.random() * 999),
    length: Math.floor(Math.random() * (500 - 100) + 100),
    timestamp: 0,
    isliked: Math.floor(Math.random() * 2),
    songfile: faker.internet.url(),
    title: faker.random.words(),
    artist: faker.name.findName(),
    album: faker.commerce.productName(),
    thumbnail: faker.image.imageUrl(),
  },
];
