'use client'
import { Chip, Stack , Avatar} from "@mui/material";
import FaceIcon from "@mui/icons-material/Face"
import React, { useState } from "react";

export default function ChipPage(){
    const [chips, setChips] = useState(['chip 1', 'chip 2', 'chip 3'])
    const handleDelete = (chipToDelete:string)=>{
        setChips((chips)=>chips.filter((chip)=> chip !== chipToDelete))
    }

    return <Stack spacing={1} direction={'row'}>
            <Chip label='chip' color="primary" size="small"/>
            <Chip variant="outlined" label='chip outlined' icon={<FaceIcon/>} color="secondary" size="small"/>
            <Chip avatar={<Avatar>V</Avatar>} variant="outlined" label='chip outlined' color="secondary" size="small"/>
            <Chip label='click' color="success" onClick={()=>alert('clicked')} />
            <Chip label='delete' color="error" onClick={()=>alert('clicked')} onDelete={()=>alert('delete handler')} />

                {chips.map(chip=>(
                    <Chip key={chip} label={chip} onDelete={()=>handleDelete(chip)}/>
                ))}
    </Stack>
}