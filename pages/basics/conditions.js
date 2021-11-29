import React, {useState} from 'react';

function Conditions() {
    const [show, setShow] = useState(true)

    function f() {
        setShow(!show)
    }

    return (
        <div>
            <button onClick={f}>toggle</button>
            {show ? <p>shown</p> : ''}

        </div>

    );
}

export default Conditions;
