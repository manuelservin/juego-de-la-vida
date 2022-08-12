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

background-color: #c1b1a3;
padding: 20px 15px;
border-radius: 8px ;
box-shadow: 10px 12px 23px 0px rgba(0,0,0,0.56);
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
color: #47403d;


`

export const ModalBody = styled.div`
display: flex;
flex-direction: column;
align-items: center ;
justify-content: center;
margin: 0 15px;

>input{
    border: none;
    padding: 7px 5px;
    border-radius: 4px ;
}

>input[type="range"]{
    accent-color: #65482e;

}

>input[type="number"] {
    margin: 10px 0;
    width: 100%;
    
}
>button{
    width: 100%;
    border: none;
    border-radius: 5px;
    background-color:#65482e  ;
    color: #ffff;
    font-size: 17px;

    padding: 8px 6px;
}

`