import React, { useContext } from 'react'


const DropdownOption = ({value, label}) => {
   
    return (
        <option  value={value} >
         {label}
        </option>
      );
}

export default DropdownOption