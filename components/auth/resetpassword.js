import React, {useEffect} from 'react';

import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {resetPassword} from "../../store/modules/authentication/actions";
import {useForm} from "react-hook-form";
import {Box, Button, ButtonGroup, Grid, TextField} from "@mui/material";


function ResetPassword() {
    const form = useForm();
    const router = useRouter()
    const dispatch = useDispatch()
    const onReset = () => {
        form.reset();
    };
    const onFill = () => {
        let formval = {

            password: '654321aA',
            passwordConfirmation: '654321aA'

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

    function onSubmit() {
        dispatch(resetPassword({
            code: router.query.code,
            password: form.getValues().password,
            passwordConfirmation: form.getValues().passwordConfirmation
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
                            <TextField fullWidth {...form.register('password')}
                                       id="standard-basic"
                                       label="Email"
                                       variant="standard"/>
                        </Grid><Grid item
                                     xs={10}>
                        <TextField fullWidth {...form.register('passwordConfirmation')}
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

export default ResetPassword;









