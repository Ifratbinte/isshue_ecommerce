import React from 'react';
import Slider from '@material-ui/core/Slider';
  
const Range = () => {
  
  // Our States
  const [value, setValue] =  React.useState([2,95]);
  
  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };
  
  return (
    <div className='price-range'>
        <Slider
            value={value}
            onChange={rangeSelector}
            valueLabelDisplay="auto"
        />
        Your range of Price is between {value[0]} /- and {value[1]} /-
    </div>
  );
}
  
export default Range;