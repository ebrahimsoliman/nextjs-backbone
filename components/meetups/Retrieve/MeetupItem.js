import {useRouter} from "next/router";
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography
}                  from '@mui/material';


function MeetupItem(props) {
    const router = useRouter();

    function showDetailsHandler() {
        router.push('meetups/' + props.id);
    }

    return (
        <Card title={props.title}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.image}
                    alt="green iguana"
                />

                <CardContent>
                    <Typography gutterBottom
                                variant="h5"
                                component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2"
                                color="text.secondary">
                        {props.address}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={showDetailsHandler}
                        size="small"
                        color="primary">
                    Show Details
                </Button>
            </CardActions>

        </Card>


    );
}

export default MeetupItem;
