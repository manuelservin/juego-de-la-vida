import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { handleSelect } from "../../utils/services";
import { CellBox } from "./CellStyles";


export default function Cell( { cellId, col, isAlive, row, dragged}) {
  const { data, setData} = useContext(AppContext);

  return (
    <CellBox
      isAlive={ isAlive }
      id={cellId}
      onClick={() => handleSelect(data, row, col, setData)}
      onMouseEnter={() => dragged && handleSelect(data, row, col, setData)}



     
     
    />
  );
}