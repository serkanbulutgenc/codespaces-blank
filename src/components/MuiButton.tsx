'use client'
import { Button, Stack, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton} from "@mui/material";
import { DoneAll, Home  } from "@mui/icons-material";
import FormatBoldIcon from "@mui/icons-material/FormatBold"
import FormatItalicIcon from "@mui/icons-material/FormatItalic"
import FormatUnderLinedIcon from "@mui/icons-material/FormatUnderlined"
import React, { useState } from "react";

export default function ButtonPage(){
    const [formats,setFormats] = useState<string[]>([])
    const handleChangeFormats = (_event:React.MouseEvent<HTMLElement>, updatedFormats:string[])=>{
        setFormats(updatedFormats);
    }

    const [formats2,setFormats2] = useState<string|null>(null)
    const handleChangeFormats2 = (_event:React.MouseEvent<HTMLElement>, updatedFormats:string|null)=>{
        setFormats2(updatedFormats);
    }
    return (
        <Stack spacing={2}>
        <Stack direction={'row'} spacing={2}>
            <Button variant="text">Text</Button>
            <Button variant="contained" href="https://www.google.com">Contained(Google)</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>
        <Stack direction={'row'} spacing={2}>
            <Button variant={'contained'} color="primary">Primary</Button>
            <Button variant={'contained'} color="secondary">Secondary</Button>
            <Button variant={'contained'} color="error">Error</Button>
            <Button variant={'contained'} color="warning">Warning</Button>
            <Button variant={'contained'} color="success">Success</Button>
            <Button variant={'contained'} color="info">Info</Button>
        </Stack>

        <Stack display={'block'} direction={'row'} spacing={2}>
            <Button variant="contained" size="small" color="primary">Small</Button>
            <Button variant="contained" size="medium" color="primary">Medium</Button>
            <Button variant="contained" size="large" color="primary">Large</Button>
        </Stack>
        <Stack direction={'row'} spacing={2}>
            <Button variant="contained" startIcon={<Home/>} disableRipple onClick={()=>alert('Ok')}>Home</Button>
            <Button variant="contained" endIcon={<DoneAll/>} disableElevation >Done</Button>
            <IconButton aria-label="home" color="success" size="small">
                <Home/>
                </IconButton>
        </Stack>
        <Stack direction={'row'} spacing={2} display={'block'}>
            <ButtonGroup variant="contained" disableElevation>
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>
            <ButtonGroup variant="text">
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>
            <ButtonGroup variant="outlined">
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>
            <ButtonGroup variant="text" orientation="vertical" aria-label="alignment button group">
                <Button>Left</Button>
                <Button>Center</Button>
                <Button onClick={()=>alert('Right clicked')}>Right</Button>
            </ButtonGroup>
        </Stack>
        <Stack direction={'row'} spacing={2}>
            <ToggleButtonGroup aria-label='text-formatting' onChange={handleChangeFormats} value={formats}>
                <ToggleButton value={'bold'} aria-label='bold'><FormatBoldIcon/></ToggleButton>
                <ToggleButton value={'italic'} aria-label="italic"><FormatItalicIcon/></ToggleButton>
                <ToggleButton value={'underline'} aria-label="underline"><FormatUnderLinedIcon/></ToggleButton>
            </ToggleButtonGroup>

            <ToggleButtonGroup aria-label='text-formatting' onChange={handleChangeFormats2} value={formats2} exclusive size="small" color="success">
                <ToggleButton value={'bold'} aria-label='bold'><FormatBoldIcon/></ToggleButton>
                <ToggleButton value={'italic'} aria-label="italic"><FormatItalicIcon/></ToggleButton>
                <ToggleButton value={'underline'} aria-label="underline"><FormatUnderLinedIcon/></ToggleButton>
            </ToggleButtonGroup>
        </Stack>
        </Stack>
    )
}