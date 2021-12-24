import React, {useState} from 'react';
import {
    Button,
    Typography
}                        from "@mui/material";

function Conditions() {
    const [show, setShow] = useState(true)

    function f() {
        setShow(!show)
    }

    return (
        <div>
            <Typography variant={'h1'}>Conditions</Typography>
            <Button onClick={f}>toggle</Button>
            {show ? <Typography variant={'body1'}>shown</Typography> : <Typography variant={'body1'}>hidden</Typography>}
             {/*{show && <Typography variant={'body1'}>shown</Typography>}*/}

        </div>

    );
}

export default Conditions;
