window.addEventListener("keydown", (event) => {
  const { key } = event;

  switch (key.toLocaleLowerCase()) {
    case "w":
      if (player.velocity.y === 0) player.jump();
      break;

    case "a":
      keys.a.pressed = true;
      break;

    case "d":
      keys.d.pressed = true;
  }
});

window.addEventListener("keyup", (event) => {
  const { key } = event;

  switch (key.toLocaleLowerCase()) {
    case "a":
      keys.a.pressed = false;
      break;

    case "d":
      keys.d.pressed = false;
  }
});
