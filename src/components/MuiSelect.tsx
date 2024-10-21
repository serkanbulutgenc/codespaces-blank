'use client'

import { Box, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";

export default function SelectPage() {

    const [countries, setCountries] = useState<string[]>([])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setCountries(typeof value === 'string' ? value.split(','): value)
    }

    return (
        <Box width={'250px'}>
            <TextField label='Select country' 
            select 
            value={countries} 
            onChange={handleChange} 
            fullWidth
            slotProps={{select:{multiple:true}}}
            helperText='Select your country'
            size="small"
            color="success"
            >
                <MenuItem value='IN' >India</MenuItem>
                <MenuItem value='US' >USA</MenuItem>
                <MenuItem value='AU' >Austraia</MenuItem>
                <MenuItem value='TR' >Turkey</MenuItem>
            </TextField>

        </Box>
    )
}