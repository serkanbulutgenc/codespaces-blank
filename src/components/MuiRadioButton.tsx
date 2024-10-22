'use client'
import {Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText} from "@mui/material"
import { useState } from "react"


export default function RadioButtonPage(){

    const  [value, setValue] = useState<string|null>(null)
    console.log(value)
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value)
    }
    return <Box>
        <FormControl error>
            <FormLabel id='job-experience-group-label'>
                Years of experience
            </FormLabel>
            <RadioGroup row value={value}  onChange={handleChange} name="job-experience-group" aria-labelledby="job-experience-group-label">
                <FormControlLabel control={<Radio size="small" color="secondary"/>} label='0-2' value={'0-2'} />
                <FormControlLabel control={<Radio/>} label='3-5' value={'3-5'} />
                <FormControlLabel control={<Radio/>} label='6-10' value={'6-10'} />                
            </RadioGroup>
            <FormHelperText>Invalid Selection</FormHelperText>
        </FormControl>
    </Box>
}