'use client'

import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material"

import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import React, { useState } from "react"

export default function AccordionPage() {
    const [expanded, setExpanded] = useState<string | false>(false)
    const handleChange = (isExpanded: boolean, panel: string) => {
        setExpanded(isExpanded ? panel : false)
    }
    return <>
        <Accordion expanded={expanded === 'panel-1'} onChange={(event, isExpanded) => { handleChange(isExpanded, 'panel-1') }}>
            <AccordionSummary id="panel1-header" aria-controls="panel1-content" expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" component={'div'}>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt id ea, esse dolorum, nesciunt, ab et tenetur iusto fugit quia maxime fugiat minima. Autem magni nemo distinctio corrupti, praesentium molestiae.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel-2'} onChange={(event, isExpanded) => { handleChange(isExpanded, 'panel-2') }}>
            <AccordionSummary id="panel2-header" aria-controls="panel2-content" expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" component={'div'}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt id ea, esse dolorum, nesciunt, ab et tenetur iusto fugit quia maxime fugiat minima. Autem magni nemo distinctio corrupti, praesentium molestiae.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel-3'} onChange={(event, isExpanded) => { handleChange(isExpanded, 'panel-3') }}>
            <AccordionSummary id="panel3-header" aria-controls="panel3-content" expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" component={'div'}>Accordion 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt id ea, esse dolorum, nesciunt, ab et tenetur iusto fugit quia maxime fugiat minima. Autem magni nemo distinctio corrupti, praesentium molestiae.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </>
}