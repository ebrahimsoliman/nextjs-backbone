import React, {useState} from 'react';
import {
    Input,
    Typography
}                        from "@mui/material";

function Styles() {

    const [isValid, setIsValid] = useState(false)

    function fun(e) {
        if (e.target.value.length <= 3) {
            setIsValid(false)
        }
        else {
            setIsValid(true)
        }
    }

    return (
        <div><Typography variant={"h1"}>Dynamic Style</Typography>
            <Typography variant={"h4"}>Please Enter more than three chars</Typography><br/>
            <Input style={{
                color      : !isValid ? 'red' : 'black',
                borderColor: !isValid ? 'red' : 'black'
            }}
                   onInput={fun}
                   placeholder="Basic usage"/>
        </div>
    );
}

export default Styles;
