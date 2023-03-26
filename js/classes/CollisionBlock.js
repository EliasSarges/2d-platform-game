class CollisionBlock {
  constructor({ position, size }) {
    this.position = position;
    this.width = size;
    this.height = size;
  }

  draw() {
    context.fillStyle = "rgba(255, 0, 0, 0.5)";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
