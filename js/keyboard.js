window.addEventListener("keydown", (event) => {
  const { code } = event;

  switch (code) {
    case "Space":
      if (player.velocity.y === 0) player.jump();
      break;

    case "KeyA":
      keys.left.pressed = true;
      break;

    case "KeyD":
      keys.right.pressed = true;
  }
});

window.addEventListener("keyup", (event) => {
  const { code } = event;

  switch (code) {
    case "KeyA":
      keys.left.pressed = false;
      break;

    case "KeyD":
      keys.right.pressed = false;
  }
});
