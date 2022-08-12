
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { operations, patterns } from "../../utils/constants";
import { gridPattern, play} from "../../utils/services";
import Button from "../Button/Button";
import { FiPause, FiPlay ,FiRefreshCcw, FiSave } from "react-icons/fi";
import {AiOutlineReload} from 'react-icons/ai'
import {GrFormNextLink} from 'react-icons/gr'
import {useSaveStatus} from '../../hooks/useSaveStatus'
import Custom from "../Custom/Custom";
import Dropdown from "../Dropdown/Dropdown";
import { MenuContainer, Navbar, Step } from "./MenuStyles";





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
  const [pattern, setPattern] = useState();


  const [savedStatus, setSavedStatus] = useSaveStatus("savedStatus", {});


const updateBoardDimensions = () => {
  setCols(Math.floor((window.innerWidth * 0.75) / 18));
  setRows(Math.floor((window.innerHeight * 0.65) / 18));
  setData({
    generation: 0,
    grid: generateEmptyGrid(Math.floor((window.innerHeight * 0.65) / 18), Math.floor((window.innerWidth * 0.75) / 18))
  })
};
console.log(Math.floor((window.innerWidth * 0.85) / 18))
console.log(Math.floor((window.innerWidth * 0.75) / 18))

useEffect(() => {
  updateBoardDimensions();
  window.addEventListener("resize", updateBoardDimensions, false);
}, [updateBoardDimensions]);



  // Play
  useEffect(() => {
    let interval;
    if (active) {
      interval = setInterval(() => {
        play(data, operations, setData, rows, cols);
      }, 600 /speed);
    }
    return () => clearInterval(interval);
  }, [active, data, speed, ]);

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

  const selectedPattern = (pattern) => {
     setPattern(pattern);
  
    switch (pattern) {
      case 'spaceships':
       
        gridPattern(data, patterns.spaceships, setData);

        break;
        case 'oscillators':
         
          gridPattern(data, patterns.oscillators, setData);
  
          break;
          case 'still':
          
            gridPattern(data, patterns.still, setData);
    
            break;
      default:
        generateEmptyGrid();

       
    
  };


  }
 

  return (
    <MenuContainer>

      <Navbar>

       <Button
                    onClick={() => setActive(!active)}
                >
                    {active ? <FiPause /> : <FiPlay />}{" "}
                   
                </Button>
        <Button  onClick={() => setStep(true)}>
          <GrFormNextLink/>
        </Button>
        <Button  onClick={handleRestart}>
        <FiRefreshCcw/>
        </Button>
        <Button
          onClick={handleDataStorage}
        >
           < FiSave/> Save
        </Button>

        
        <Button
          onClick={handleLoadLastPattern}
        >
         <AiOutlineReload/>
        </Button>
      
          <Dropdown
          
            name="pattern"
            selectedPattern={selectedPattern}
            selected={pattern}

          />

          <Custom  setData = {setData}
    rows={rows}
    setRows={setRows}
    cols={cols}
    setCols= {setCols} 
    generateEmptyGrid ={generateEmptyGrid}
    speed={speed}
    setSpeed = {setSpeed}
    />
      </Navbar>
       

        <Step>Generación # {data.generation}</Step>


    </MenuContainer>
  )
}

export default Menu