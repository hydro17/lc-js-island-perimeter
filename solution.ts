
var islandPerimeter = function (grid: number[][]): number {
  let islandPerim = 0;
  let stack: number[][] = [];

  const gridWithBorder = addBorderTo2DArray(grid);

  for (let i = 1; i < gridWithBorder.length - 1; i++) {
    for (let j = 1; j < gridWithBorder[i].length - 1; j++) {
      if (gridWithBorder[i][j] === 1) stack.push([i, j]);

      islandPerim = getIslandPerimeter(stack, islandPerim, gridWithBorder);
    }
  }

  return islandPerim;
};

const markIslandPiece = (i: number, j: number, grid: number[][], islandPerim: number, stack: number[][]): number => {
  if (grid[i][j] === 2) return islandPerim;
  if (grid[i][j] === 0) return ++islandPerim;

  grid[i][j] = 2;

  stack.push([i - 1, j]);
  stack.push([i, j + 1]);
  stack.push([i + 1, j]);
  stack.push([i, j - 1]);

  return islandPerim;
}

function getIslandPerimeter(stack: number[][], islandPerim: number, grid: number[][]) {
  while (stack.length > 0) {
    const [i, j] = stack.pop();
    islandPerim = markIslandPiece(i, j, grid, islandPerim, stack);
  }

  return islandPerim;
}

const addBorderTo2DArray = (grid) => {
  if (grid.length === 0 || grid[0].length === 0) return grid;

  const newGrid = [...grid];

  const topRow = new Array(grid[0].length).fill(0);
  const bottomRow = [...topRow];

  newGrid.unshift(topRow);
  newGrid.push(bottomRow);

  const gridWithBorder = newGrid.map((row) => {
    row.unshift(0);
    row.push(0);
    return row;
  });

  return gridWithBorder;
};

//----- tests -----
const island: number[][] = [
  [0, 0, 1, 1, 0],
  [0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

console.log(islandPerimeter(island));
