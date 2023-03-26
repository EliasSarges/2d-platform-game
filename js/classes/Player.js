class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };

    this.width = 100;
    this.height = 100;

    this.sides = {
      bottom: this.position.y + this.height,
    };

    this.velocity = {
      x: 0,
      y: 0,
    };

    this.gravity = 1;
  }

  draw() {
    context.fillStyle = "red";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    this.sides.bottom = this.position.y + this.height;

    if (this.sides.bottom + this.velocity.y < canvas.height) {
      this.velocity.y += this.gravity;
    } else {
      this.velocity.y = 0;
    }
  }

  jump() {
    this.velocity.y = -20;
  }
}
