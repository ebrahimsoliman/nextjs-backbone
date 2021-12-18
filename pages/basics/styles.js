import React, {useState} from 'react';
import {Input}           from "antd";

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
        <div><h1>Dynamic Style</h1>
            <p>Please Enter more than three chars</p>
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
