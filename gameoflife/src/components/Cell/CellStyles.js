import styled from 'styled-components';


export const CellBox = styled.div`

width: 18px;
  height: 18px;
  margin: 1px;
  border-radius: 50%;
  border: 1px solid #30475e;

  background-color: ${({ isAlive }) => (isAlive ? '#23a7da' : '#fffff')};
  
  &:hover { 
    background-color: #96e1ff;
    cursor: pointer;
  }


`