
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { operations } from "../../utils/constants";
import { play } from "../../utils/services";
import Button from "../Button/Button";

import {useSaveStatus} from '../../hooks/useSaveStatus'


const Menu = () => {
  const {
    data,
    setData,
    rows,
    setRows,
    cols,
    setCols,
    generateEmptyGrid,
  } = useContext(AppContext);

  const [speed, setSpeed] = useState(2);
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(false);
 

  const [savedStatus, setSavedStatus] = useSaveStatus("savedStatus", {});




console.log(speed)




  // Play
  useEffect(() => {
    let interval;
    if (active) {
      interval = setInterval(() => {
        play(data, operations, setData, rows, cols);
      }, 600 /speed);
    }
    return () => clearInterval(interval);
  }, [active, data, speed]);

  // Steps
  useEffect(() => {
    if (step) {
      play(data, operations, setData, rows, cols);
      setStep(false);
    }
  }, [step]);

  const handleRestart = () => {
    setActive(false);
    setData({
      generation: 0,
      grid: generateEmptyGrid(rows, cols)
    });
  };

  // guardo la info en el localstorage
  const handleDataStorage = () => {
    setSavedStatus(data);
  };

  //Tomo del localStorage el ultimo patron guardado
  const handleLoadLastPattern = () => {
    setData(savedStatus);
  };

  return (
    <div>
       
      <Button  onClick={() => setActive(true)}>
          Iniciar
        </Button>
        <Button  onClick={() => setStep(true)}>
          Next
        </Button>
        <Button  onClick={() => setActive(false)}>
          Detener
        </Button>
        <Button  onClick={handleRestart}>
          Reiniciar
        </Button>
        <Button
          onClick={handleDataStorage}
        >
          Guardar
        </Button>

        
        <Button
          onClick={handleLoadLastPattern}
        >
          Ultimo patrón
        </Button>
        <input type='range'
              
                style={{ width: "20%" }}
                min={2}
                max={6}
                step={1}
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
            />
        <h2>Generación # {data.generation}</h2>


    </div>
  )
}

export default Menu