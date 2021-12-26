import React, {useEffect} from 'react';

import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {forgetPassword} from "../../store/modules/authentication/actions";
import {useForm} from "react-hook-form";
import {Box, Button, ButtonGroup, Grid, TextField} from "@mui/material";


function Forgetpassword() {
    const form = useForm();
    const router = useRouter()
    const dispatch = useDispatch()
    const onReset = () => {
        form.reset();
    };
    const onFill = () => {
        let formval = {

            email: "ebrahimahmed97090@gmail.com",

        }
        for (const key in
            formval) {
            form.setValue(key,
                formval[key]);

        }
    };
    useEffect(() => {
        if (user) {
            router.push('/')
        }
    })

    const user = useSelector((state => state.authenticationReducer.user))

    function onSubmit(values) {
        dispatch(forgetPassword({
            email: form.getValues().email
        }))
    }

    if (!user) {
        return (
            <Box>
                <form>
                    <Grid container
                          spacing={2}>

                        <Grid item
                              xs={10}>
                            <TextField fullWidth {...form.register('email')}
                                       id="standard-basic"
                                       label="Email"
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
            </Box>);
    }
    if (user) {
        return (<p>nothing to do here</p>)
    }
}

export default Forgetpassword;
