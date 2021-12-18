import React, {useState} from 'react';
import {
    Button,
    Input
}                        from "antd";

function Binding(props) {
    //use state to tell ui to re render whenever this value changes after event binding
    const [i, setI] = useState(1);
    const [x, setX] = useState('5');
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
            <p className={cls}>this number {i} is bind and dynamic and you can change it by press
                {/*event binding*/}
                               here <Button onClick={increase}>increment</Button></p>
            <br/>
            {/*two binding*/}
            <p> Two Way Binding<Input type="text"
                      value={x}
                      onInput={change}/></p>
            <p>{x}</p>
        </div>
    );
}

export default Binding;
