document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('tetris-grid');
  const gridWidth = 10;
  const gridHeight = 20;
  const cellWidth = 30;
  const cellHeight = 30;
  const tetriminoes = [
    [[1, 1, 1, 1]],
    [[1, 1], [1, 1]],
    [[1, 1, 0], [0, 1, 1]],
    [[0, 1, 1], [1, 1, 0]],
    [[1, 1, 1], [0, 1, 0]],
    [[1, 1, 1], [1, 0, 0]],
    [[1, 1, 1], [0, 0, 1]]
  ];

  const createGrid = () => {
    for (let row = 0; row < gridHeight; row++) {
      for (let col = 0; col < gridWidth; col++) {
        const cell = document.createElement('div');
        cell.style.width = `${cellWidth}px`;
        cell.style.height = `${cellHeight}px`;
        grid.appendChild(cell);
      }
    }
  };

  const drawTetrimino = (tetrimino, position) => {
    const startX = position.x;
    const startY = position.y;
    tetrimino.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell) {
          const cellX = startX + colIndex;
          const cellY = startY + rowIndex;
          const cellIndex = cellY * gridWidth + cellX;
          const cells = grid.querySelectorAll('div');
          cells[cellIndex].classList.add('tetrimino');
        }
      });
    });
  };

  const clearGrid = () => {
    const cells = grid.querySelectorAll('div');
    cells.forEach((cell) => {
      cell.classList.remove('tetrimino');
    });
  };

  const draw = () => {
    clearGrid();
    drawTetrimino(tetriminoes[0], { x: 4, y: 0 });
  };

  createGrid();
  draw();
});
