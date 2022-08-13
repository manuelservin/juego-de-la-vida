import React, { useState, useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import Cell from '../Cell/Cell';
import { Grid } from './MainGridStyles';



const generateCells =(rows,cols, arr,dragged) => {
  
    let grid = [];
  
 //Hago la grilla visible
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
      
          let cellId = `${i}_${j}`;
          // utilizo booleano para conocer su estado
          // isAlive = arr && arr[i][j] ? 1 : 0;
          // isAlive =grid[i][j]
          
          grid.push(
            <Cell key={cellId} 
            {...{
              row: i,
              col:j,
              isAlive: arr && arr[i][j] ? 1 : 0,
              dragged,
             
          }
        }
            
            />
          );
        }
      }
      
    
      return grid;
    };


const MainGrid = () => {
    const { data, cols, rows } = useContext(AppContext);
    const [dragged, setDragged] = useState(false);




  const cellsArray = generateCells(rows, cols, data.grid, dragged);


  return (
    <Grid  
    onMouseDown={() => setDragged(true)}
                onMouseUp={() => setDragged(false)}
                onMouseLeave={() => setDragged(false)}
    
    cols={cols} >
      {cellsArray

      
      }
    </Grid>
  );
}

export default MainGrid