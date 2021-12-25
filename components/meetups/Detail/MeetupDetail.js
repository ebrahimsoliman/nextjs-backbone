import {
    Grid,
    Typography
} from "@mui/material";

function MeetupDetail(props) {

    return (
        <Grid container
              rowSpacing={2}>
            <Grid xs={10}>
                <div>
                    <img
                        src={props.image}
                        alt={props.title}/>
                </div>
                <div>
                    <Typography variant="h3"
                                style={{wordBreak: "break-word"}}>{props.title}</Typography>
                    <Typography variant="body1"
                                style={{wordBreak: "break-word"}}>{props.address}</Typography>
                    <Typography variant="body1"
                                style={{wordBreak: "break-word"}}>{props.description}</Typography>
                </div>
            </Grid>
        </Grid>
    );
}

export default MeetupDetail;
