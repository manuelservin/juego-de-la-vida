


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
    [2, 2],
    [2, 3],
    [2, 4],
    [3, 7],
    [3, 8],
    [3, 9],
    [4, 6],
    [4, 7],
    [4, 8],
    [6, 11],
    [6, 12],
    [7, 11],
    [9, 13],
    [8, 14],
    [9, 14]
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