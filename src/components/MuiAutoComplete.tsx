'use client'
import { Stack, Autocomplete, TextField } from "@mui/material"
import { useState } from "react"

type Skill={
    id:number,
    label:string
}


export default function AutocompletePage(){
    const skills = ["Html", "Css", "Javascript", "Typescript", "Python"]
    const skillsOptions = skills.map((skill, index)=>{return {
        id:index+1,
        label:skill
    } })

    const [value, setValue] = useState<string|null>(null)

    const [skill, setSkill] = useState<Skill|null>(null)

    console.log(value)
    console.log(skill)

return <Stack spacing={2} width={'250px'}>
        <Autocomplete 
        options={skills} 
        value={value}
        onChange={(event:any, newValue: string|null)=>setValue(newValue)}
        renderInput={(params)=><TextField {...params} label='Skills'/>}
        freeSolo />

        <Autocomplete 
        options={skillsOptions} 
        value={skill}
        onChange={(event:any, newValue: Skill|null )=>setSkill(newValue)}
        renderInput={(params)=><TextField {...params} label='Skills'/>}
         />
    </Stack>
}