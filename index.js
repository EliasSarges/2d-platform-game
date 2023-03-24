const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 64 * 16;
canvas.height = 64 * 9;

const player = new Player();

function animate() {
  requestAnimationFrame(animate);

  context.clearRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);

  player.draw();
  player.update();
}

animate();
