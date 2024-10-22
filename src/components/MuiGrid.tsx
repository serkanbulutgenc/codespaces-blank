'use client'
import { Box, Stack } from "@mui/material"
import Grid from "@mui/material/Grid2"

export default function GridPage() {
    return <>
        <Grid container my={4} rowSpacing={2} columnSpacing={1} >
            <Grid bgcolor={'primary.light'} p={2} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>Item 1</Grid>
            <Grid bgcolor={'primary.light'} p={2} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>Item 2</Grid>
            <Grid bgcolor={'primary.light'} p={2} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>Item 3</Grid>
            <Grid bgcolor={'primary.light'} p={2} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>Item 4</Grid>
        </Grid>

        <Grid container my={4} spacing={1}>
            <Grid bgcolor={'primary.light'} p={2}>Item 1</Grid>
            <Grid bgcolor={'primary.light'} p={2} size={{ xs: 6 }}>Item 2 (xs:auto)</Grid>
            <Grid bgcolor={'primary.light'} p={2}>Item 3</Grid>
            <Grid bgcolor={'primary.light'} p={2}>Item 4</Grid>
        </Grid>

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(Array(6)).map((_, index) => (
                <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                    <Box sx={{bgcolor:'primary.light', p:2}}>{index + 1}</Box>
                </Grid>
            ))}
        </Grid>
    </>
}