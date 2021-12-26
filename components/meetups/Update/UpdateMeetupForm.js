/*`import {
 Button,
 Form,
 Input
 }                     from 'antd';*/
import {
    useDispatch,
    useSelector
}                     from "react-redux";
import {useEffect}    from "react";
import {useRouter}    from "next/router";
import {updateMeetup} from "../../../store/modules/meetups/actions";
import {useForm} from "react-hook-form";
import {
    Box,
    Button,
    ButtonGroup,
    Grid,
    TextField
} from "@mui/material";

function UpdateMeetupForm(props) {
    const form     = useForm();
    const router   = useRouter()
    const meetup   = useSelector((state => state.meetupsReducer.meetup))
    const dispatch = useDispatch()
    const onReset  = () => {
        form.reset();
    };
    const onFill   = () => {
        let formval = {
            title  : meetup.attributes.title,
            image  : meetup.attributes.image,
            address: meetup.attributes.address,
            description: meetup.attributes.description,
        }
        for (const key in
            formval) {
            form.setValue(key,
                          formval[key]);
        }

    };
    useEffect(() => {
        onFill()
    })

    function onSubmit() {
        dispatch(updateMeetup(meetup.id,
                              {
                                  title      : form.getValues().title,
                                  image      : form.getValues().image,
                                  address    : form.getValues().address,
                                  description: form.getValues().description,
                              }))
    }
    return (
        <Box>
            <form>
                <Grid container
                      spacing={2}>
                    <Grid item
                          xs={10}><TextField fullWidth {...form.register('title')}
                                             id="standard-basic"
                                             label="Title"
                                             variant="standard"/>
                    </Grid>
                    <Grid item
                          xs={10}>
                        <TextField fullWidth {...form.register('image')}
                                   id="standard-basic"
                                   label="Image"
                                   variant="standard"/>
                    </Grid>
                    <Grid item
                          xs={10}>
                        <TextField fullWidth {...form.register('address')}
                                   id="standard-basic"
                                   label="Address"
                                   variant="standard"/>
                    </Grid>
                    <Grid item
                          xs={10}>
                        <TextField fullWidth {...form.register('description')}
                                   id="standard-basic"
                                   label="Description"
                                   multiline
                                   variant="standard"/>
                    </Grid>
                    <Grid item
                          xs={10}>
                        <ButtonGroup><Button onClick={() => {
                            onFill();
                        }}>Fill</Button>

                            <Button onClick={() => {
                                onReset();
                            }}>Reset</Button>

                            <Button onClick={() => {
                                onSubmit();
                            }}>Submit</Button></ButtonGroup></Grid> </Grid>
            </form>
        </Box>
    );
}

export default UpdateMeetupForm;
