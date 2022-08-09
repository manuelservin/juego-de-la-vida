
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { operations } from "../../utils/constants";
import { play } from "../../utils/services";
import Button from "../Button/Button";


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

  const [speed, setSpeed] = useState("300");
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(false);


  // Play
  useEffect(() => {
    let interval;
    if (active) {
      interval = setInterval(() => {
        play(data, operations, setData, rows, cols);
      }, speed);
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

      

        <h2>Generación # {data.generation}</h2>


    </div>
  )
}

export default Menu