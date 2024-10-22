'use client'

import {Box, FormControlLabel, Switch} from "@mui/material"
import React, { useState } from "react"

export default function SwitchPage(){
    const [value, setValue] = useState<boolean>(false)
    console.log({value})
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.checked)
    }

    return <Box>
        <FormControlLabel label='Dark mode' control={<Switch size="small" color="success" value={value} onChange={handleChange} />} />
    </Box>    
}