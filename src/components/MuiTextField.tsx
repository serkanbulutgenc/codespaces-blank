'use client'

import {Stack} from "@mui/material"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"
import { useState } from "react"


const TextFieldPage = ()=>{

    const [value, setValue] = useState<string|null>(null)

    return (
    <Stack  spacing={2}>
        <Stack direction={'row'} spacing={2}>
            <TextField label="outlined" variant="outlined"/>
            <TextField label="standard" variant="standard"/>
            <TextField label="filled" variant="filled"/>
        </Stack>

        <Stack direction={'row'} spacing={2}>
            <TextField label="Small secondary" variant="outlined" size="small" color="secondary"/>
        </Stack>

        <Stack direction={'row'} spacing={2}>
            <TextField label="Form Input" required value={value} onChange={(e)=>setValue(e.target.value)} error={!value} helperText={!value ? 'Reqiured ': 'Do not share your password.'}/>
            <TextField label="Password" type="password" required helperText="Don't share your password"/>
            <TextField label="Readonly" slotProps={{input:{readOnly:true}}} helperText="Readonly"/>
        </Stack>

        <Stack direction={'row'} spacing={2}>
        </Stack>
            <TextField label="Amount" slotProps={{input:{startAdornment:<InputAdornment position="start">$</InputAdornment>}}} />
            <TextField label="Weight" slotProps={{input:{endAdornment:<InputAdornment position="end">kg</InputAdornment>}}}  />
        
    </Stack>
    )
}

export default TextFieldPage