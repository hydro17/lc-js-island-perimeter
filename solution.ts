
var islandPerimeter = function (grid: number[][]): number {
  let islandPerim = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) islandPerim = markIslandPieces(i, j, grid, 0);
    }
  }

  return islandPerim;
};

const markIslandPieces = (i: number, j: number, grid: number[][], islandPerim: number): number => {
  if (grid[i][j] === 2) return islandPerim;
  if (grid[i][j] === 0) return ++islandPerim;

  grid[i][j] = 2;

  if (i - 1 >= 0) islandPerim = markIslandPieces(i - 1, j, grid, islandPerim);
  else islandPerim++;

  if (j + 1 < grid[i].length) islandPerim = markIslandPieces(i, j + 1, grid, islandPerim);
  else islandPerim++;

  if (i + 1 < grid.length) islandPerim = markIslandPieces(i + 1, j, grid, islandPerim);
  else islandPerim++;

  if (j - 1 >= 0) islandPerim = markIslandPieces(i, j - 1, grid, islandPerim);
  else islandPerim++;

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
