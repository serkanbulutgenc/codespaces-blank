'use client'

import {SpeedDial, SpeedDialAction, SpeedDialIcon} from "@mui/material"
import CopyIcon from "@mui/icons-material/FileCopyOutlined"
import PrintIcon from "@mui/icons-material/Print"
import ShareIcon from "@mui/icons-material/Share"
import EditIcon from  "@mui/icons-material/Edit"

export default function SpeedDialPage(){
    return (
        <SpeedDial sx={{position:'absolute', right:16, bottom:16}} ariaLabel="Speed Dial" icon={<SpeedDialIcon openIcon={<EditIcon/>} />}  >
            <SpeedDialAction icon={<CopyIcon/>} tooltipTitle="Copy" tooltipOpen />
            <SpeedDialAction icon={<PrintIcon/>} tooltipTitle="Print" />
            <SpeedDialAction icon={<ShareIcon/>} tooltipTitle="Share" />
        </SpeedDial>
    )
}