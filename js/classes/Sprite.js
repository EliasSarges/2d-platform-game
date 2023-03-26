class Sprite {
  constructor({ position, imgSrc }) {
    this.image = new Image();
    this.image.src = imgSrc;
    this.position = position;
    this.loaded = false;
    this.image.onload = () => {
      this.loaded = true;
    };
  }

  draw() {
    if (!this.loaded) return;
    context.drawImage(this.image, this.position.x, this.position.y);
  }
}
