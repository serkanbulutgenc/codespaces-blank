import { Typography } from "@mui/material";

export default function TypographyPage() {
    return (<>
        <Typography variant="h1">Header 1</Typography>
        <Typography variant="h2">Header 2</Typography>
        <Typography variant="h3">Header 3</Typography>
        <Typography variant="h4" component={'h1'} gutterBottom>Header 4</Typography>
        <Typography variant="h5">Header 5</Typography>
        <Typography variant="h6">Header 6</Typography>
        <Typography variant="subtitle1">Subtitle 1</Typography>
        <Typography variant="subtitle2">Subtitle 2</Typography>
        <Typography variant="body1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero eos aliquid ea maiores inventore. Magni, odit ea eum similique vel cum aliquid, libero, aspernatur hic recusandae itaque nam dolorum eaque.
        </Typography>
        <Typography variant="body2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus recusandae nulla cum necessitatibus culpa tempora, eveniet beatae ad, saepe explicabo iste? Beatae saepe ipsam enim voluptates nobis laudantium recusandae officia.</Typography>
    </>)
}