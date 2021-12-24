import React        from 'react';
import Binding      from "../../components/bind/binding";
import {Typography} from "@mui/material";

function Bind() {
    return (
        <div>
            <Typography variant={'h1'}>Events and Data binding</Typography>
            <Binding/>
        </div>
    );
}

export default Bind;
