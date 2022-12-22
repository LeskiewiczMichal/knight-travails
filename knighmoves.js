class Coordinates {
  constructor(x, y, before) {
    this.x = x;
    this.y = y;
    this.before = before;
  }
}

const knightMoves = (start, destination) => {
  let moves = 0;
  const queue = [];
  // add starting position of a knight to the queue
  queue.push(new Coordinates(start[0], start[1], null));
  const visitedNodes = [];

  // all possible x and y moves combintions
  const xPossibleMoves = [-2, -2, -1, -1, 1, 1, 2, 2];
  const yPossibleMoves = [-1, 1, 2, -2, 2, -2, 1, -1];

  // if coords are not on the gameboard return -1
  if (
    destination[0] < 1 ||
    destination[0] > 8 ||
    destination[1] < 1 ||
    destination[1] > 8 ||
    start[0] < 1 ||
    start[0] > 8 ||
    start[1] < 1 ||
    start[1] > 8
  ) {
    return -1;
  }

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      // shift first coord off the queue
      const coordinate = queue.shift();
      // if coord is the destination path is all coord before from the starting position
      // movescount is a string representation of moves
      if (coordinate.x === destination[0] && coordinate.y === destination[1]) {
        const path = [coordinate];
        while (path[0].before !== null) {
          path.unshift(path[0].before);
        }
        const movesCount = `The shortes path has ${moves} moves`;
        return { movesCount, path };
      }

      // for each possible move of a knight add a coord to the queue
      // if knight would have been out of the gameboard, don't add the move
      // if coord was already visited don't add the move
      // else push the move to the queue and visitedCoords
      for (let j = 0; j < xPossibleMoves.length; j++) {
        const newX = coordinate.x + xPossibleMoves[j];
        const newY = coordinate.y + yPossibleMoves[j];
        if (newX < 9 && newX > 0 && newY < 9 && newY > 0) {
          const newCoordinates = new Coordinates(newX, newY, coordinate);
          if (!visitedNodes.includes(newCoordinates)) {
            queue.push(newCoordinates);
            visitedNodes.push(newCoordinates);
          }
        }
      }
    }
    // keeps track of moves made by knight
    moves += 1;
  }
};
