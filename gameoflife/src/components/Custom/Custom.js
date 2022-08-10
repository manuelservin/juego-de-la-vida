import React from 'react'
import { useState } from 'react'
import Popup from 'reactjs-popup'
import { Container, Modal, ModalBody, ModalClose, ModalTitle } from './CustomStyles'
const Custom = ({setData,
    rows,
    setRows,
    cols,
    setCols, generateEmptyGrid}) => {

  const [updateGrid, setUpdateGrid] = useState({
    rows,
    cols
  })

  console.log(updateGrid)

  const handleChange = (e) =>{
    setUpdateGrid({...updateGrid, [e.target.name]: e.target.value})
  }

  const apply = ({rows,cols})=>{
    console.log(rows,cols)
    setData({
        generation: 0,
        grid: generateEmptyGrid(Number(rows), Number(cols))
      });
      setCols(Number(cols));
      setRows(Number(rows));
  }
  return (

    <Popup
    trigger={<button className="button"> Open Modal </button>}
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

<button
            onClick={() => {
              apply(updateGrid)
              close();
            }}
          >
            aplicar
          </button>

          </ModalBody>




 
       
          

      
      </Modal>
      </Container>
    )}
  </Popup>
    
  )
}

export default Custom