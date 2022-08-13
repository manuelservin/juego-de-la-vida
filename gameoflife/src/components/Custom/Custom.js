import React from 'react'
import { useState } from 'react'
import Popup from 'reactjs-popup'
import {IoMdOptions} from 'react-icons/io'
import Button from '../Button/Button'
import { Container, Modal, ModalBody, ModalClose, ModalTitle } from './CustomStyles'


const Custom = ({setData,
    setRows,
    setCols, 
    generateEmptyGrid,
    speed,
    setSpeed,

  }) => {

  const [updateGrid, setUpdateGrid] = useState({
    rows: 0,
    cols: 0
  })


  const handleChange = (e) =>{
    setUpdateGrid({...updateGrid, [e.target.name]: e.target.value})
  }

 
  const apply = ({rows,cols})=>{
    if(rows <= 1 || cols <= 1) return;
    setData({
        generation: 0,
        grid: generateEmptyGrid(Number(rows), Number(cols))
      });
      setCols(Number(cols));
      setRows(Number(rows));
  }
  return (

    <Popup
    trigger={<Button > <IoMdOptions/> </Button>}
    modal
    nested
  >
    {close => (
      <Container>

        <Modal>
        <ModalClose onClick={close}>
          &times;
        </ModalClose>
          <ModalTitle> Customize Grid</ModalTitle>

          <ModalBody>

<input type="number" name="rows" min='5' max='80' placeholder='Rows' onChange={handleChange}/>

<input type="number" name="cols" min='5' max='80' placeholder='Columns' onChange={handleChange} />

<label >Speed: </label>

<input type='range'
              
                style={{ width: "100%" }}
                min={2}
                max={7}
                step={1}
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
            />

<Button
            onClick={() => {
              apply(updateGrid)
              close();
            }}
          >
            apply
          </Button>

          </ModalBody>




 
       
          

      
      </Modal>
      </Container>
    )}
  </Popup>
    
  )
}

export default Custom