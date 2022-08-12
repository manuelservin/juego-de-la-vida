import styled from 'styled-components';


export const CellBox = styled.div`

width: 18px;
  height: 18px;
  border: 1px solid #30475e;
  background-color: ${({ isAlive }) => (isAlive ? '#0a0a0a' : '#f4f4f4')};
  
  &:hover { 
    background-color: #96e1ff;
    cursor: pointer;
  }


`