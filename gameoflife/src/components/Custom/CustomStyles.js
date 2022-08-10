import styled from 'styled-components';


export const Container = styled.div`
background: rgba(0,0,0,.5);
height: 100vh; 
width:100vw;
display:grid;
place-items: center;
`

export const Modal =styled.div`
display: flex;
flex-direction: column;

background-color: #f5f5f5;
padding: 20px 15px;
border-radius: 8px ;
`
export const ModalClose = styled.button`
 cursor: pointer;
  font-size: 20px;
  background: #ffffff;
  border: 1px solid #cfcece;
  place-self: flex-end;
  border-radius:50%;

`

export const ModalTitle = styled.h2`
font-weight: bold;
text-align: center;

`

export const ModalBody = styled.div`
display: flex;
flex-direction: column;
align-items: center ;
justify-content: center;
margin: 0 15px;

>input[type="number"] {
    margin: 10px 0;
    width: 100%;
}
>button{
    width: 100%;
}

`