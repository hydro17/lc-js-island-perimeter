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

console.log(addBorderTo2DArray([[1, 2], [3, 4]]));
console.log(addBorderTo2DArray([[]]));
console.log(addBorderTo2DArray([]));
