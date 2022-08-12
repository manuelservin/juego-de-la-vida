import React, { useState, createContext, useEffect } from "react";

export const AppContext = createContext();

//trabajo con el contexto para mejorar la legibilidad y escalabilidad de mi código

export const AppProvider = (props) => {
  // Funcion generadora del grid, con todas las celulas seteadas en false

  const generateEmptyGrid = (x, y) => {
    const rows = [];

    for (let i = 0; i < x; i++) {
      // creo un nuevo array para las columnas, el from recibe dos parametros, la cantidad  y el valor que quiero que tengan
      rows.push(Array.from(Array(y), () => 0));
    }

    return rows;
  };



  // lo trabajo como objeto porque esta forma se trabaja mas facil cuando se actualicen ambos estados

  const [data, setData] = useState({
    generation: 0,
    grid: generateEmptyGrid(30, 50)
  });

  const [cols, setCols] = useState(50);

  const [rows, setRows] = useState(30);
  


  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        cols,
        setCols,
        rows,
        setRows,
        generateEmptyGrid,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};