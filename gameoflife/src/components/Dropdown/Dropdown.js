import React from 'react'
import DropdownOption from './DropdownOption';
import { Select } from './DropdownStyles';

const options = [
  { value: 'oscillators', label: 'oscillators' },
  { value: 'spaceships', label: 'spaceships' },
  { value: 'still', label: 'still lifes' },
];

const Dropdown = ({pattern, selectedPattern}) => {

  const handleChange = (newValue) =>{
    selectedPattern(newValue)
  }
  return (
    <div>
        <Select 
        onChange={(e) => handleChange(e.target.value)}
        value={pattern}
        defaultValue={'default'}

      >
         <option value="default"  disabled hidden>Pattern</option>
       {options.map((el)=>(
        <DropdownOption key={el.value} value={el.value} label={el.label}/>
       ))}
      </Select>



    </div>
  )
}

export default Dropdown