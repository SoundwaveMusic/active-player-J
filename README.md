# Sound Clout Active Player Module

This features an animated player synced proportionally with a time-stamped location in a song. Its clickable components include a play/pause toggle button, fastforward/rewind buttons, shuffle/repeat buttons, hover volume control, album thumbnails, a like button, and a "up next" pop up menu.  The "up next" pop up menu also features a button to clear the list, a toggle to autoplay upcoming tracks, as well as like buttons and a pop-up options menu for each track.  The menu allows you to like, share, add or remove from "next up", add to a playlist, or start a radio station of related tracks.

## Related Projects

  - https://github.com/4-ever-young/soundclout-info-comments-module.git
  - https://github.com/4-ever-young/soundclout-active-player-module.git
  - https://github.com/4-ever-young/Sidebar-module.git

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Dependencies](#installing)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

- Node 6.13.1

## Installing Dependencies

From within the root directory:

```sh
npm install
```

## Development

From within the root directory, do each of the following:

- Run webpack to build bundle.js
```sh
npm run build
```
- Start the server at port 3020
```sh
npm start
```
- Create a copy of config.example.js
- Save the new file as config.js and enter your mysql password or '' if not using a password
- If using a mysql password: 
```sh
npm run db
```
- If not using a mysql password: 
```sh
npm run db-nopassword
```
