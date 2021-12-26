import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {Box, Button, ButtonGroup, Grid, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {createMeetup} from "../../../store/modules/meetups/actions";


function NewMeetupForm(props) {
    const form = useForm();
    const router = useRouter()
    const dispatch = useDispatch()
    const onReset = () => {
        form.reset();
    };
    const onFill = () => {
        let formval = {
            title: "Blueholding meetup",
            image: "https://source.unsplash.com/user/c_v_r/1600x900",
            address: "113 Galal eldesouky",
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
         and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
        for (const key in formval) {
            form.setValue(key, formval[key]);

        }};
    const onSubmit = () => {
        dispatch(createMeetup({
            title: form.getValues().title,
            image: form.getValues().image,
            address: form.getValues().address,
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
                        <ButtonGroup>
                            <Button onClick={() => {
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

export default NewMeetupForm;
