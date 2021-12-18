import React, {useState} from 'react';
import {Button}          from "antd";

function Conditions() {
    const [show, setShow] = useState(true)

    function f() {
        setShow(!show)
    }

    return (
        <div><h1>Conditions</h1>
            <Button onClick={f}>toggle</Button>
            {show ? <p>shown</p> : ''}

        </div>

    );
}

export default Conditions;
