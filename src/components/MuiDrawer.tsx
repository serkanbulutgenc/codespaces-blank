'use client'

import { Drawer, Box, Typography, AppBar, Toolbar } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import MenuIcon from "@mui/icons-material/Menu"
import { useState } from "react"


export default function DrawerPage() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return <>
        <AppBar position="static" elevation={0}>
            <Toolbar>
                <IconButton size="large" color="inherit" aria-label="logo" onClick={() => setIsDrawerOpen(true)}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h5" component={'h1'}>AppName</Typography>
            </Toolbar>
        </AppBar>

        <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            <Box width={250} p={2} textAlign={'center'} role='presentation'>
                <Typography variant="h6" component={'div'}>
                    Drawer
                </Typography>
            </Box>
        </Drawer>
    </>
}