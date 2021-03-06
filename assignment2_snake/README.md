# README

> :snake: The greedy snake game implemented with Canvas

## Usage

```sh
npm install # run all the dependencies
npm run watch # run webpack for client-side code
npm run server # run server
```

Note that if you modify the `server.js`, you don't have to re-run `npm run server`. It's automatically reloaded.

Go to `http://localhost:3000` to see the game.

## Features

### Basic
* Create and maintain a data structure of links/segments for the snake
* Create and maintain data structure for level features (walls and **obstacles**)
* Make the snake move on the screen with keyboard input for directions
* Create food for the snake to eat and place food randomly on the level
* Detect when the snake walks over food and grow the snake
* Detect when snake eats itself or hits walls and end the game
* Implement and show a Score on the Heads-Up-Display (HUD)

### Bonus

* Spoiled food that stays on the level for some amount of time. When eaten this causes the snake to shrink.
* High-score list or the last high-score from the current session (session and persistent storage)
* Game over layer with a restart button
