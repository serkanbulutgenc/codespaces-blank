import { IconButton, Tooltip } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"

export default function TooltipPage() {
    return (
        <Tooltip title='Delete' placement="right" arrow enterDelay={300} leaveDelay={200}>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </Tooltip>
    )
}