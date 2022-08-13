import produce from "immer";
import Cell from '../components/Cell/Cell'

//Separo las funciones en un archivo separado para mayor legibilidad
//utilizo esta libreria para ayudarme a no mutar el estado

// arrayOperations = Son numeros que se van a sumar o restar para generar coordenadas
// updaterFunction = funcion actualizadora del estado.
// rows y cols son los limites de la grilla


const generateCells =(rows,cols, arr,dragged) => {
  
  let grid = [];

//Hago la grilla visible
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
    
        let cellId = `${i}_${j}`;
        // utilizo booleano para conocer su estado
        
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


const play = ({grid, generation}, arrayOperations, updaterFunction, rows, cols) => {
  // Se utiliza produce, porque crea una copia del state la cual se puede mutar
  const alive= ready(grid);

  
  if(alive === 0) return;

  const newGrid = produce(grid, (gridCopy) => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          let neighbors = 0;
            arrayOperations.forEach(([x, y]) => {
              const newI = i + x;
              const newJ = j + y;
              //esta funcion lo que hace es decirme cuantos vecinos tengo en la iteracion actual
              if (newI >= 0 && newI < rows && newJ >= 0 && newJ < cols) {
                neighbors += grid[newI][newJ];
               
              }
            });
            
            // si tengo menos de dos o mas de 3 en la siguiente iteracion muere. reglas de soledad y sobrepoblacion
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][j] = 0; 
            } 
            // condicion para que nazca una nueva celula en el turno siguiente
            else if (grid[i][j] === 0 && neighbors === 3) {
              gridCopy[i][j] = 1;
            }
          }
        }
      });

  // se actualiza el state manualmente
  
  
  updaterFunction({
    generation: generation + 1,
    grid: newGrid
  });
};


// Funcion para activar o desactivar celulas

const handleSelect = ({grid, generation}, row, col, updaterFunction) => {
  const newGrid = produce(grid, (gridCopy) => {
    gridCopy[row][col] = gridCopy[row][col] ? 0 : 1;
  });

  updaterFunction({
     generation,
    grid: newGrid
  });
};


const gridPattern = ({grid},Coordinates, updater) => {
  const newGrid = produce(grid, (newState) => {
    Coordinates.forEach(([x, y]) => {
      newState[x][y] = 1;
    });
  });

  updater({
    generation: 0,
    grid: newGrid
  });
};


const updateBoardDimensions = (setRows, setCols, setData, generateEmptyGrid) => {

  let maxCols= Math.floor((window.innerWidth * 0.75) / 18)
  let maxRows= Math.floor((window.innerHeight * 0.65) / 18)
  setCols(maxCols);
  setRows(maxRows);
  setData({
    generation: 0,
    grid: generateEmptyGrid(maxRows, maxCols)
  })
};

const ready = (array)=>{
  let newArray = array.flat();
  
  let length = newArray.length;
  let alive= 0
  for(let i=0; i< length; i++){
    if(newArray[i] === 1){
      alive++;
    }
  }
  return alive;

}







export { play, generateCells ,handleSelect, gridPattern, updateBoardDimensions, ready};