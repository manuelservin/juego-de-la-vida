import React, { useState, useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import Cell from '../Cell/Cell';
import { Grid } from './MainGridStyles';



const generateCells =(rows,cols, arr,dragged) => {
    let isAlive = false;
    let grid = [];
   console.log(dragged)
 //Hago la grilla visible
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
      
          let cellId = `${i}_${j}`;
          // utilizo booleano para conocer su estado
          isAlive = arr && arr[i][j] ? 1 : 0;
          
          grid.push(
            <Cell key={cellId} row={i} col={j}  cellId={cellId}  isAlive={isAlive} dragged={dragged}/>
          );
        }
      }
      
    
      return grid;
    };


const MainGrid = () => {
    const { data, cols, rows } = useContext(AppContext);
    const [dragged, setDragged] = useState(false);
    console.log(dragged)

  const cellsArray = generateCells(rows, cols, data.grid, dragged);

  return (
    <Grid  
    onMouseDown={(e) => setDragged(true)}
                onMouseUp={(e) => setDragged(false)}
                onMouseLeave={(e) => setDragged(false)}
    
    cols={cols} >
      {cellsArray}
    </Grid>
  );
}

export default MainGrid