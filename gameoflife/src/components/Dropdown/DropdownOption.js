import React from 'react'
import { Option } from './DropdownStyles';


const DropdownOption = ({value, label}) => {
   
    return (
        <Option  value={value} >
         {label}
        </Option>
      );
}

export default DropdownOption



