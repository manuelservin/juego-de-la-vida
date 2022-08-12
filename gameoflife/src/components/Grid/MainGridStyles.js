import styled from 'styled-components';

export const Grid = styled.div`
margin-top: 15px;
display: grid;
width: fit-content;
background-color: #f4f4f4f4;
margin: 0 auto;
grid-template-columns: repeat(${({ cols }) => (cols ? cols : '')}, 18px);
`