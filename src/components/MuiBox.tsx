'use client'
import {Box} from "@mui/material"

export default function BoxPage(){
    return <><Box sx={{
        backgroundColor:'primary.main',
         color:'white',
          height:'100px',
          width:'100px',
          padding:'16px',
          '&:hover':{
            backgroundColor:'primary.light'
          }
        }}>Box 1</Box>
        
        <Box display='flex' height={'100px'} width={'100px'} bgcolor={'success.light'} p={2}>Box 2</Box>
        </>
}