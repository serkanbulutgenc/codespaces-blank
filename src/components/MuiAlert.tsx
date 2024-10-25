'use client'
import { Alert, Stack, AlertTitle, Button } from "@mui/material"
import CheckIcon from "@mui/icons-material/Check"

export default function AlertPage() {
    return <Stack spacing={2}>
        <Alert severity="error">This is an error alert</Alert>
        <Alert severity="warning">This is a warning alert</Alert>
        <Alert severity="info">This is an info alert</Alert>
        <Alert severity="success">This is a succes alert</Alert>

        <Alert severity="error" variant="outlined">This is an error alert</Alert>
        <Alert severity="warning" variant="outlined">This is a warning alert</Alert>
        <Alert severity="info" variant="outlined">This is an info alert</Alert>
        <Alert severity="success" variant="outlined">This is a succes alert</Alert>

        <Alert severity="error" variant="filled" onClose={()=>alert('Close')} >
            <AlertTitle>Error</AlertTitle>
            This is an error alert</Alert>
        <Alert severity="warning" variant="filled">
            <AlertTitle>Warning</AlertTitle>
            This is a warning alert</Alert>
        <Alert severity="info" variant="filled">
            <AlertTitle>Info</AlertTitle>
            This is an info alert</Alert>
        <Alert severity="success" variant="filled" icon={<CheckIcon fontSize="inherit"/>} action={<Button color='inherit'>Undo</Button>}>
            <AlertTitle>Success</AlertTitle>
            This is a succes alert</Alert>
    </Stack>
}