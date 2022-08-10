import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import Cell from '../Cell/Cell';
import { Grid } from './MainGridStyles';



const generateCells =(rows,cols, arr) => {
    let isAlive = false;
    let grid = [];
    console.log(rows,cols,arr)
 //Hago la grilla visible
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
      
          let cellId = `${i}_${j}`;
          // utilizo booleano para conocer su estado
          isAlive = arr && arr[i][j] ? 1 : 0;
    
          grid.push(
            <Cell isAlive={isAlive} key={cellId} cellId={cellId} row={i} col={j} />
          );
        }
      }
      console.log(grid, rows, cols)
    
      return grid;
    };


const MainGrid = () => {
    const { data, cols, rows } = useContext(AppContext);
    console.log(data, rows, cols);
 

  const cellsArray = generateCells(rows, cols, data.grid);

  return (
    <Grid  cols={cols} cellsArray={cellsArray}>
      {cellsArray}
    </Grid>
  );
}

export default MainGrid