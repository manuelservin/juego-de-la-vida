


 export const operations = [
    [0, 1], // derecha
    [0, -1],//izquierda
    [1, -1],// arriba izquierda
    [-1, 1],// arriba derecha
    [1, 1],// arriba
    [-1, -1],//abajo
    [1, 0],// abajo derecha 
    [-1, 0]// abajo izquierda
  ];



const oscillators = [
   [0,0],
   [0,1],
   [1,0],
   [1,1],
   [2,2],
   [2,3],
   [3,2],
   [3,3],
  ];
   const spaceships = [
    [1, 3],
    [2, 1],
    [2, 3],
    [3, 2],
    [3, 3]
  ];

  const still = [
    [3, 3],
    [3,4],
    [4,3],
    [4,4]
   
  ]

  export const patterns = {
    oscillators,
    spaceships,
    still
  }