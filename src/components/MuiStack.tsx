'use client'
import { Box, Stack, Typography, Divider } from "@mui/material"

export default function BoxPage() {
  return <Stack spacing={2}>
    <Box sx={{ padding: '10px' }}>
      <Typography variant='caption' component={'h4'} >Defult Stack </Typography>
      <Stack sx={{ border: '1px solid' }}>
        <Box sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          height: '100px',
          width: '100px',
          padding: '16px',
          '&:hover': {
            backgroundColor: 'primary.light'
          }
        }}>Box 1</Box>

        <Box display='flex' height={'100px'} width={'100px'} bgcolor={'success.light'} p={2}>Box 2</Box>
      </Stack>
    </Box>
    <Box sx={{ padding: '10px' }}>
      <Typography variant='caption' component={'h4'} >Row </Typography>
      <Stack sx={{ border: '1px solid' }} direction={'row'}>
        <Box sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          height: '100px',
          width: '100px',
          padding: '16px',
          '&:hover': {
            backgroundColor: 'primary.light'
          }
        }}>Box 1</Box>

        <Box display='flex' height={'100px'} width={'100px'} bgcolor={'success.light'} p={2}>Box 2</Box>
      </Stack>
    </Box>
    <Box sx={{ padding: '10px' }}>
      <Typography variant='caption' component={'h4'} >Row reverse </Typography>
      <Stack sx={{ border: '1px solid' }} direction={'row-reverse'}>
        <Box sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          height: '100px',
          width: '100px',
          padding: '16px',
          '&:hover': {
            backgroundColor: 'primary.light'
          }
        }}>Box 1</Box>

        <Box display='flex' height={'100px'} width={'100px'} bgcolor={'success.light'} p={2}>Box 2</Box>
      </Stack>
    </Box>

    <Box sx={{ padding: '10px' }}>
      <Typography variant='caption' component={'h4'} >With Divider </Typography>
      <Stack sx={{ border: '1px solid' }} direction={'row'} spacing={2} divider={<Divider orientation='vertical' flexItem/>}>
        <Box sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          height: '100px',
          width: '100px',
          padding: '16px',
          '&:hover': {
            backgroundColor: 'primary.light'
          }
        }}>Box 1</Box>

        <Box display='flex' height={'100px'} width={'100px'} bgcolor={'success.light'} p={2}>Box 2</Box>
      </Stack>
    </Box>
  </Stack>
}