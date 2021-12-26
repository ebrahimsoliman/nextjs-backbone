import React        from 'react';
import {Typography} from "@mui/material";

function Prop(props) {
    return (
        <div>
            <Typography variant={'h2'}>{props.content}</Typography>
        </div>
    );
}

export default Prop;
