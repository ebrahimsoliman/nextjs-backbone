import React from 'react';
import {
    Alert,
    Box,
    Grid,
    Typography
} from "@mui/material";

function Lists() {
    let arr = [
        'success',
        'info',
        'warning',
        'error'
    ]


    return (<Box>

            <Typography variant={'h1'}>Lists</Typography>
            <Grid container
                  spacing={2}>

                {arr.map((element,
                          index) => (
                    <Grid item
                          xs={12}><Alert severity={element}>This is an {element} alert — check it out!</Alert></Grid>

                ))}</Grid>

        </Box>
    );
}

export default Lists;
