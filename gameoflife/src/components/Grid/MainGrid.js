import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import Cell from '../Cell/Cell';
import { Grid } from './MainGridStyles';



const generateCells =(rows,cols, arr) => {
    let isAlive = false;
    let grid = [];
 //Hago la grilla visible
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
      
          let cellId = `${i}_${j}`;
          // utilizo booleano para conocer su estado
          isAlive = arr && arr[i][j] ? true : false;
    
          grid.push(
            <Cell isAlive={isAlive} key={cellId} cellId={cellId} row={i} col={j} />
          );
        }
      }
    
      return grid;
    };


const MainGrid = () => {
    const { data, cols, rows } = useContext(AppContext);

 

  const cellsArray = generateCells(rows, cols, data.grid);

  return (
    <Grid  cols={cols} cellsArray={cellsArray}  style={{
      display: "grid",
      gridTemplateColumns: `repeat(${cols}, 20px)`,
      width: "fit-content",
      margin: "0 auto",
    }}>
      {cellsArray}
    </Grid>
  );
}

export default MainGrid