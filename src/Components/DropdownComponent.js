import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import './DropdownStyles.css'

function DropdownComponent(props) {



  return (
        <FormControl  >
            <InputLabel className='dropdown' id="demo-simple-select-label">{props.name}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={props.value}
                label={props.label}
                onChange={props.onChange}
                className='dropdown'
            >
               {props.array.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
            </Select>
        </FormControl>
  )
}

export default DropdownComponent