'use client'
import {BottomNavigation, BottomNavigationAction} from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import FavoriteIcon from "@mui/icons-material/Favorite"
import PersonIcon from "@mui/icons-material/Person"
import { useState } from "react"

export default function BottomNavigationPage(){
    const  [ value, setValue] = useState(0)

    return <BottomNavigation 
    sx={{ width:'100%', bottom:0, position:'absolute'}}
    value={value}
    onChange={(event, newValue)=>{setValue(newValue)}}>
        <BottomNavigationAction  label='Home' icon={<HomeIcon/>} />
        <BottomNavigationAction  label='Favorite' icon={<FavoriteIcon/>} />
        <BottomNavigationAction  label='Person' icon={<PersonIcon/>} />
    </BottomNavigation>
}