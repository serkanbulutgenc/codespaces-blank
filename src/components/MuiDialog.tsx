'use client'
import { Button , Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import { useState } from "react";

export default function DialogPage(){
    const [open, setOpen] = useState<boolean>(false)

    return <>
    <Button onClick={()=>setOpen(true)}>
        Open Dialog
    </Button>

    <Dialog open={open}
    onClose={()=>setOpen(false)} 
    aria-labelledby="dialog-title"
    aria-describedby="dialog-description">
        <DialogTitle id="dialog-title">Submit th test?</DialogTitle>
        <DialogContent>
            <DialogContentText id='dialog-description'>
                Are you sure you want to submit the test?
            </DialogContentText>
            <DialogActions>
                <Button autoFocus onClick={()=>setOpen(false)}>Submit</Button>
                <Button>Cancel</Button>
            </DialogActions>
        </DialogContent>
    </Dialog>
    </>
}