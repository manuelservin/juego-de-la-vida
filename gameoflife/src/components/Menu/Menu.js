
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { operations, patterns } from "../../utils/constants";
import { gridPattern, play, ready, updateBoardDimensions} from "../../utils/services";
import Button from "../Button/Button";
import { FiPause, FiPlay ,FiRefreshCcw, FiSave } from "react-icons/fi";
import {toast, ToastContainer} from 'react-toastify'
import {AiOutlineReload} from 'react-icons/ai'
import {MdOutlineNavigateNext} from 'react-icons/md'
import {useSaveStatus} from '../../hooks/useSaveStatus'
import Custom from "../Custom/Custom";
import Dropdown from "../Dropdown/Dropdown";
import { MenuContainer, Navbar, Step } from "./MenuStyles";
import 'react-toastify/dist/ReactToastify.css';


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

useEffect(() => {
  updateBoardDimensions(setRows, setCols, setData, generateEmptyGrid);
  window.addEventListener("resize", updateBoardDimensions, false);
}, []);

const init = (data) => {
  console.log(data)
  const alive= ready(data);

  if(alive === 0 && active ===false) {
    return toast.error('there must be live cells on the board!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      });
      
  };
  setActive(!active)

}

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
                    onClick={() => init(data.grid)}
                >
                    {active ? <FiPause /> : <FiPlay />}{" "}
                   
                </Button>
        <Button  onClick={() => setStep(true)}>
          <MdOutlineNavigateNext/>
        </Button>
        <Button  onClick={handleRestart}>
        <FiRefreshCcw/>
        </Button>
        <Button
          onClick={handleDataStorage}
        >
           < FiSave/> 
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
       

        <Step>Step # {data.generation}</Step>

        <ToastContainer />
    </MenuContainer>
  )
}

export default Menu