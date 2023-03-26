const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 64 * 16;
canvas.height = 64 * 9;

const blockSize = 64;
const columns = 16;

const bidimensionalArray = createBidimensionalArray(collisionLevel1, columns);
const collisionBlocks = createCollisonBlocks(bidimensionalArray, blockSize);

const background = new Sprite({
  imgSrc: "./assets/backgroundLevel1.png",
  position: {
    x: 0,
    y: 0,
  },
});

const player = new Player();

const keys = {
  a: { pressed: false },
  d: { pressed: false },
};

function animate() {
  requestAnimationFrame(animate);

  background.draw();

  for (const block of collisionBlocks) {
    block.draw();
  }

  player.draw();
  player.update();

  if (keys.a.pressed) {
    player.velocity.x = -5;
    //
  } else if (keys.d.pressed) {
    player.velocity.x = 5;
    //
  } else {
    player.velocity.x = 0;
  }
}

animate();
