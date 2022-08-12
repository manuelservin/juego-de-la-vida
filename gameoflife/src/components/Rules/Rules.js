import React from 'react'
import Popup from 'reactjs-popup'
import { Container, Modal, ModalBody, ModalClose, ModalTitle } from '../Custom/CustomStyles'
import { Li, MoreInfo, Ol } from './RulesStyles'

const Rules = ({trigger}) => {
  return (
    <Popup className="popup-background" trigger={trigger} modal>
    {(close) => (
      <Container>

      <Modal>
      <ModalClose onClick={close}>
        &times;
      </ModalClose>
        <ModalTitle> Rules</ModalTitle>

        <ModalBody>
            <Ol>
                
          <Li>
          A dead cell with exactly 3 neighboring living cells is "born" (i.e. the next turn it will be alive).
            (i.e. the next turn it will be alive).
          </Li>
          <Li>
          A living cell with 2 or 3 living neighboring cells stays alive.
          </Li>
          <Li>
          A living cell with less than 2 living neighboring cells dies of "loneliness".
            "loneliness".
          </Li>
          <Li>
          A living cell with more than 3 living neighboring cells dies from "overpopulation".
            "overpopulation".
          </Li>
            </Ol>

        </ModalBody>
        <MoreInfo href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank"> More info</MoreInfo>





     
        

    
    </Modal>
    </Container>
    )}
  </Popup>
  )
}

export default Rules