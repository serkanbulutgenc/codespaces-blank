import { CircularProgress, LinearProgress, Stack } from "@mui/material";

export default function ProgressPage(){
    return <Stack spacing={2}>
            <CircularProgress/>
            <CircularProgress variant="determinate" value={60}/>
            <CircularProgress color="success"/><CircularProgress/>
            
            <LinearProgress/>
            <LinearProgress variant="determinate" value={60}/>
            <LinearProgress color="success"/>
    </Stack>
}