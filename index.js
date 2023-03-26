const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 64 * 16;
canvas.height = 64 * 9;

const background = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imgSrc: "./assets/backgroundLevel1.png",
});

const player = new Player();

const keys = {
  a: { pressed: false },
  d: { pressed: false },
};

function animate() {
  requestAnimationFrame(animate);

  background.draw();

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
