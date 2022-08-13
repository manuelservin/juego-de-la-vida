import React, { useState, useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import { generateCells } from '../../utils/services';

import { Grid } from './MainGridStyles';





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

      {cellsArray}
      
    </Grid>
  );
}

export default MainGrid