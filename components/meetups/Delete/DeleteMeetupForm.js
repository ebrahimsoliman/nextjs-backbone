/*`import {
 Button,
 Form,
 Input
 }                     from 'antd';*/
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {useForm} from "react-hook-form";
import {Box, Button, Grid} from "@mui/material";
import {deleteMeetup} from "../../../store/modules/meetups/actions";


function DeleteMeetupForm(props) {
    const form = useForm();
    const router = useRouter()
    const meetup = useSelector((state => state.meetupsReducer.meetup))
    const dispatch = useDispatch()
    const onReset = () => {
        form.reset();
    };

    function submitHandler() {
        dispatch(deleteMeetup(meetup.id))
    }

    return (
        <Box>
            <form>
                <Grid container
                      spacing={2}>
                    <Grid item
                          xs={10}>
                        <Button onClick={() => {
                            submitHandler();
                        }}>Submit</Button></Grid> </Grid>
            </form>
        </Box>
    );
}

export default DeleteMeetupForm;
