My answer to Knight-travails algorithm problem.

knightMoves function that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.

You can think of the board as having 2-dimensional coordinates like this:
knightMoves([0,0],[1,2]) == [[0,0],[1,2]]
knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]
knightMoves([3,3],[0,0]) == [[3,3],[1,2],[0,0]]
