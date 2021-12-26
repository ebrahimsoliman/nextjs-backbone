import React, {useEffect} from 'react';

import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {login, signUp} from "../../store/modules/authentication/actions";
import {useForm} from "react-hook-form";
import {Box, Button, ButtonGroup, Grid, TextField} from "@mui/material";


function Logincom() {
    const form = useForm();
    const router = useRouter()
    const dispatch = useDispatch()
    const onReset = () => {
        form.reset();
    };
    const onFill = () => {
        let formval = {

            identifier: "ebrahimahmed97090@gmail.com",
            password: "Aa123456"
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
        dispatch(login({
            identifier: form.getValues().identifier,
            password  : form.getValues().password
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
                            <TextField fullWidth {...form.register('identifier')}
                                       id="standard-basic"
                                       label="Email"
                                       variant="standard"/>
                        </Grid>
                        <Grid item
                              xs={10}>
                            <TextField fullWidth {...form.register('password')}
                                       id="standard-basic"
                                       label="Password"
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

export default Logincom;





