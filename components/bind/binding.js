import React, {useState} from 'react';
import {
    Button,
    Input,
    Typography
}                        from "@mui/material";

function Binding(props) {
    //use state to tell ui to re render whenever this value changes after event binding

    const [i, setI] = useState(1);
    const [x, setX] = useState(20);
    let q           = 5;
    let cls         = 'disabled';

    function increase() {
        setI(i + 1);
    }

    function change(eve) {
        setX(eve.target.value);

    }

    return (
        <div>
            {/*data binding*/}
            <Typography variant={'body1'}
                        className={cls}>this number {i} is bind and dynamic and you can change it by press
                {/*event binding*/}
                                        here <Button onClick={increase}>increment</Button></Typography>
            <br/>
            {/*two binding*/}
            <Typography variant={'body1'}> Two Way Binding <Input type="text"
                                                              value={x}
                                                              onChange={change}/></Typography>
            <Typography variant={'body1'}>{i} {' '}{x}</Typography>
        </div>
    );
}

export default Binding;
