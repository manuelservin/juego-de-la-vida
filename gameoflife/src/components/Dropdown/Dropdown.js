import React, { useState } from 'react'
import DropdownOption from './DropdownOption';

const options = [
  { value: 'oscillators', label: 'oscillators' },
  { value: 'spaceships', label: 'spaceships' },
  { value: 'still', label: 'still lifes' },
];

const Dropdown = ({pattern, selectedPattern}) => {

  const handleChange = (newValue) =>{
    selectedPattern(newValue)
  }
  console.log(pattern)
  return (
    <div>
        <select 
        onChange={(e) => handleChange(e.target.value)}
        value={pattern}
      >
         <option value="" selected disabled hidden>Patrón</option>
       {options.map((el)=>(
        <DropdownOption key={el.value} value={el.value} label={el.label}/>
       ))}
      </select>



    </div>
  )
}

export default Dropdown