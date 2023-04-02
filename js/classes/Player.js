class Player {
  constructor({ collisionBlocks }) {
    this.position = {
      x: 200,
      y: 200,
    };

    this.width = 25;
    this.height = 25;

    this.velocity = {
      x: 0,
      y: 0,
    };

    this.gravity = 1;

    this.collisionBlocks = collisionBlocks;

    this.color = "red";
  }

  draw() {
    context.fillStyle = this.color;
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.position.x += this.velocity.x;

    this.resetPositionOnHorizontalCollision();
    this.applyGravity();
    this.resetPositionOnVerticalCollision();
  }

  applyGravity() {
    this.velocity.y += this.gravity;
    this.position.y += this.velocity.y;
  }

  jump() {
    this.velocity.y = -20;
  }

  checkCollision(block) {
    const playerSides = {
      top: this.position.y,
      left: this.position.x,
      bottom: this.position.y + this.height,
      right: this.position.x + this.width,
    };

    const blockSides = {
      right: block.position.x + block.width,
      left: block.position.x,
      top: block.position.y,
      bottom: block.position.y + block.height,
    };

    const isColliding =
      playerSides.left <= blockSides.right &&
      playerSides.right >= blockSides.left &&
      playerSides.bottom >= blockSides.top &&
      playerSides.top <= blockSides.bottom;

    return { isColliding };
  }

  resetPositionOnHorizontalCollision() {
    for (const block of this.collisionBlocks) {
      const { isColliding } = this.checkCollision(block);

      const playerPositionOnRightOfTheBlock = block.position.x + block.width;
      const playerPositionOnLeftOfTheBlock = block.position.x - this.width;

      const collisionGap = 0.2;

      if (isColliding) {
        if (this.velocity.x < 0) {
          this.position.x = playerPositionOnRightOfTheBlock + collisionGap;
          break;
        }

        if (this.velocity.x > 0) {
          this.position.x = playerPositionOnLeftOfTheBlock - collisionGap;

          break;
        }
      }
    }
  }

  resetPositionOnVerticalCollision() {
    for (const block of this.collisionBlocks) {
      const { isColliding } = this.checkCollision(block);

      const playerPositionOnTopOfTheBlock = block.position.y - this.height;
      const playerPositionOnBottomOfTheBlock = block.position.y + block.height;

      const collisionGap = 0.2;

      if (isColliding) {
        if (this.velocity.y < 0) {
          this.velocity.y = 0;
          this.position.y = playerPositionOnBottomOfTheBlock + collisionGap;
          break;
        }

        if (this.velocity.y > 0) {
          this.velocity.y = 0;
          this.position.y = playerPositionOnTopOfTheBlock - collisionGap;
          break;
        }
      }
    }
  }
}
