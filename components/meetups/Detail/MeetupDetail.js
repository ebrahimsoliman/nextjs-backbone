import {
    Grid,
    Typography
}              from "@mui/material";

function MeetupDetail(props) {

    return (
        <Grid container
              rowSpacing={2}>
            <Grid xs={10}>
                <div>
                    <Image src={props.image}
                           alt={props.title}/>
                </div>
                <div>
                    <Typography variant="h3">{props.title}</Typography>
                    <Typography variant="body1">{props.address}</Typography>
                    <Typography variant='body1'>{props.description}</Typography>
                </div>
            </Grid>
        </Grid>
    );
}

export default MeetupDetail;
