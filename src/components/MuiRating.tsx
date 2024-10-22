'use client'
import {Stack, Rating} from "@mui/material"
import React, { useState } from "react"
import FavoriteIcon from "@mui/icons-material/Favorite"
import  FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"


export default function RatingPage(){
    const [value, setValue] = useState<number|null>(null)
    console.log({value})

    const handleChange = (event:React.ChangeEvent<{}>, newValue:number|null)=>{
        setValue(newValue)
    }

    return <Stack spacing={2}>
        <Stack spacing={2}>
        <Rating value={value} onChange={handleChange} precision={0.5} size="medium" />
        </Stack>

        <Stack spacing={2}>
        <Rating color="success" value={value} onChange={handleChange} precision={0.5} size="large" icon={<FavoriteIcon fontSize="inherit" color="error"/>}  emptyIcon={<FavoriteBorderIcon fontSize="inherit"/>}/>
        </Stack>
        <Stack spacing={2}>
        <Rating readOnly highlightSelectedOnly value={3} onChange={handleChange} precision={0.5} size="large" icon={<FavoriteIcon fontSize="inherit" color="error"/>}  emptyIcon={<FavoriteBorderIcon fontSize="inherit"/>}/>
        </Stack>
    </Stack>
}