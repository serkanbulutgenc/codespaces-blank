'use client'
import {  Tab, Box } from "@mui/material"
import { TabPanel, TabContext, TabList } from "@mui/lab"
import React, { use, useState } from "react"
import  FavoriteIcon  from "@mui/icons-material/Favorite"

export default function TabPage(){
    const [value, setValue] = useState('1')
    const handleChange = (evetnt:React.SyntheticEvent, newValue:string)=>{
        setValue(newValue)
    }
    return <Box>
        <TabContext value={value}>
            <Box sx={{borderBottom:1, borderColor:'divider', width:'500px'}}>
            <TabList aria-label="TAbs example"  
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons='auto'
              >
                <Tab label='Tab one' 
                icon={<FavoriteIcon/>} 
                iconPosition="start" 
                value={'1'}
                />
                <Tab label='Tab two' value={'2'} disabled/>
                <Tab label='Tab three' value={'3'}/>
                <Tab label='Tab four' value={'4'}/>
                <Tab label='Tab five' value={'5'}/>
                <Tab label='Tab six' value={'6'}/>
            </TabList>
            </Box>
            <TabPanel value="1">Panel one</TabPanel>
            <TabPanel value="2">Panel two</TabPanel>
            <TabPanel value="3">Panel three</TabPanel>
            <TabPanel value="4">Panel four</TabPanel>
            <TabPanel value="5">Panel five</TabPanel>
            <TabPanel value="6">Panel six</TabPanel>
        </TabContext>
    </Box>
}