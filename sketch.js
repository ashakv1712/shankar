var canvas;
var backgroundImage;
var database, gameState;
var form, player, playerCount;


function preload() {
  backgroundImage = loadImage("./assets/background.gif");

}

function setup() {
  canvas = createCanvas(500, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
   
    game.end();
  }
}