import {MAX_COLS, MAX_ROWS} from "../constants";

export const generateCells = () => {
  const cells = [];

  for (let row=0; row < MAX_ROWS; row++) {
    cells.push([]);
    for (let col=0; col < MAX_COLS; col++) {
      cells[row].push({
        value: -1, 0, 
      })
    }
  }
};