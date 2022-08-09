import produce from "immer";
//utilizo esta libreria para ayudarme a no mutar el estado

// arrayOperations = Son numeros que se van a sumar o restar para generar coordenadas
// updaterFunction = funcion actualizadora del estado.
// rows y cols son los limites de la grilla

const play = ({grid, generation}, arrayOperations, updaterFunction, rows, cols) => {
  // Se utiliza produce, porque crea una copia del state la cual se puede mutar
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

export { play, handleSelect };