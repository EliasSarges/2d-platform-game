function createBidimensionalArray(array, lengthColumns = 1) {
  let bidimensionalArray = [];

  for (let index = 0; index < array.length; index += lengthColumns) {
    const row = array.slice(index, index + lengthColumns);
    bidimensionalArray.push(row);
  }

  return bidimensionalArray;
}

const createCollisonBlocks = (arrayBlocks, size) => {
  const collisionBlocks = [];

  arrayBlocks.forEach((row, y) => {
    row.forEach((column, x) => {
      if (column !== 292) {
        return;
      }

      const collisionBlock = new CollisionBlock({
        position: {
          x: x * size,
          y: y * size,
        },
        size,
      });

      collisionBlocks.push(collisionBlock);
    });
  });

  return collisionBlocks;
};
