'use client'
import {Box, FormControlLabel, Checkbox, FormControl, FormGroup, FormLabel, FormHelperText} from "@mui/material"
import React, { useState } from "react"
import BookMarkIcon from "@mui/icons-material/Bookmark"
import  BookmarkBorderIcon  from "@mui/icons-material/BookmarkBorder"


export default function CheckBoxPaga(){

    const [acceptTnc, setAcceptTnc] = useState<boolean>(false)
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setAcceptTnc(event.target.checked)
    }

    const [skills, setSkills]=useState<string[]>([])
    const handleSkillsChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const index = skills.indexOf(event.target.value)
        if(index === -1){
            setSkills([...skills, event.target.value])
        }else{
            setSkills( skills.filter(skill=>{return skill!==event.target.value}) )
        }
    }

    return <Box>
        <Box>
            <FormControlLabel label='I accept terms and conditions.' control={<Checkbox checked={acceptTnc} color="secondary" onChange={handleChange}/>} />
        </Box>
        <Box>
            <Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookMarkIcon/>} checked={acceptTnc} onChange={handleChange}/>
        </Box>
        <Box>
            <FormControl error>
                <FormLabel>Skills</FormLabel>
                <FormGroup>
                    <FormControlLabel label="HTML" value={'html'} control={<Checkbox size="small" checked={skills.includes('html')} onChange={handleSkillsChange}/>} />
                    <FormControlLabel label="Javascript" value={'javascript'} control={<Checkbox checked={skills.includes('javascript')} onChange={handleSkillsChange}/>} />
                    <FormControlLabel label="Css" value={'css'} control={<Checkbox checked={skills.includes('css')} onChange={handleSkillsChange}/>} />
                </FormGroup>
                <FormHelperText>Invalid Selection</FormHelperText>
            </FormControl>
        </Box>
    </Box>
}