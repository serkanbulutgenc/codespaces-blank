import { Box,Card, CardContent, Typography, CardActions, Button, CardMedia} from "@mui/material";


export default function CardPage(){
    return <Box width={250}>
        <Card>
            <CardMedia 
            component={'img'}
            height={140}
            src="https://dummyimage.com/350x250/33cc99/fff"
            alt="This is a media image."
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component={'div'}>Card Component</Typography>
                <Typography variant="body2" color="text.secondary"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint aut maiores placeat excepturi dolorum dolore atque veniam. </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
            </CardActions>
        </Card>
    </Box>
}