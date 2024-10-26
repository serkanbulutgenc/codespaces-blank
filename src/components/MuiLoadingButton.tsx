import { LoadingButton } from "@mui/lab"
import { Stack } from "@mui/material"
import  SaveIcon  from "@mui/icons-material/Save"

export default function LoadingButtonPage(){
    return <Stack spacing={3} direction={'row'}>
        <LoadingButton variant="outlined">Submit</LoadingButton>
        <LoadingButton variant="outlined" loading>Submit</LoadingButton>
        <LoadingButton variant="outlined" loadingIndicator='Loading...' >Fetch data</LoadingButton>
        <LoadingButton variant="outlined" loadingIndicator='Loading...' loading>Fetch data</LoadingButton>
        <LoadingButton 
        variant="outlined" 
        loadingPosition="start"
        startIcon={<SaveIcon/>} >Save</LoadingButton>
        <LoadingButton 
        variant="outlined"
        loadingPosition="start"
         startIcon={<SaveIcon/>}
          loading>Save</LoadingButton>
    </Stack>
}