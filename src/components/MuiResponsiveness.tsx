import { Box } from "@mui/material";

export default function ResponsivenessPage() {
    return <Box sx={{
        height: 300,
        width: {
            xs: 100,
            sm: 200,
            md: 300,
            lg: 400,
            xl: 500
        },
        bgcolor: 'primary.main'
    }}></Box>
}