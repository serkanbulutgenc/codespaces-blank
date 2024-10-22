import { Box, Paper, Stack } from "@mui/material";


export default function PaperPage() {
    return <Paper elevation={3} sx={{padding:4}} >
        <Stack spacing={2} direction={'row'}>
            <Box sx={{
                width: 100,
                height: 100,
                bgcolor: 'primary.light',
                color: 'primary.dark',
                '&:hover': {
                    bgcolor: 'lightgreen'
                }
            }}>Box 1</Box>

            <Box sx={{
                width: 100,
                height: 100,
                bgcolor: 'primary.light',
                color: 'primary.dark',
                '&:hover': {
                    bgcolor: 'lightgreen'
                }
            }}>Box 2</Box>

            <Box sx={{
                width: 100,
                height: 100,
                bgcolor: 'primary.light',
                color: 'primary.dark',
                '&:hover': {
                    bgcolor: 'lightgreen'
                }
            }}>Box 3</Box>

        </Stack>
    </Paper>
}