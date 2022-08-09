import React from 'react'
import { Btn } from './ButtonStyles';

const Button = ({children, onClick, name }) => {
    const handleClick = (e) => {
        onClick(e);
      };

  return (

     <Btn  onClick={handleClick} name={name}>
      {children}
    </Btn>
  )
}

export default Button