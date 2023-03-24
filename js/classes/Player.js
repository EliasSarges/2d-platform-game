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
  }

  draw() {
    context.fillStyle = "red";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    context.fillStyle = "red";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);

    if (this.sides.bottom < canvas.height) {
      this.position.y += 5;
      this.sides.bottom = this.position.y + this.height;
    }
  }
}
