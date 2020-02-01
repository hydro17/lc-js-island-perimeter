
var islandPerimeter = function (grid: number[][]): number {
  let islandPerim = 0;
  let stack: number[][] = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) stack.push([i, j]);

      islandPerim = getIslandPerimeter(stack, islandPerim, grid);
    }
  }

  return islandPerim;
};

const markIslandPiece = (i: number, j: number, grid: number[][], islandPerim: number, stack: number[][]): number => {
  if (grid[i][j] === 2) return islandPerim;
  if (grid[i][j] === 0) return ++islandPerim;

  grid[i][j] = 2;

  if (i - 1 >= 0) stack.push([i - 1, j]);
  else islandPerim++;

  if (j + 1 < grid[i].length) stack.push([i, j + 1]);
  else islandPerim++;

  if (i + 1 < grid.length) stack.push([i + 1, j]);
  else islandPerim++;

  if (j - 1 >= 0) stack.push([i, j - 1]);
  else islandPerim++;

  return islandPerim;
}

function getIslandPerimeter(stack: number[][], islandPerim: number, grid: number[][]) {
  while (stack.length > 0) {
    const [i, j] = stack.pop();
    islandPerim = markIslandPiece(i, j, grid, islandPerim, stack);
  }

  return islandPerim;
}

//----- tests -----
const island: number[][] = [
  [0, 0, 1, 1, 0],
  [0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

console.log(islandPerimeter(island));
