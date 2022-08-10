import styled from 'styled-components';

export const Grid = styled.div`
margin-top: 15px;
display: grid;
gap: 3px;
width: fit-content;
margin: 0 auto;
grid-template-columns: repeat(${({ cols }) => (cols ? cols : '')}, 20px);
`