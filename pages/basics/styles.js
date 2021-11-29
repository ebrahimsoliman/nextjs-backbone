import React, {useState} from 'react';

function Styles() {

    const [isValid, setIsValid] = useState(false)

    function fun(e) {
        if (e.target.value.length < 3) {
            setIsValid(false)
        }
        else {
            setIsValid(true)
        }
    }

    return (
        <div>
            <input style={{color: !isValid ? 'red' : 'black'}}
                   type="text"
                   onInput={fun}/>
        </div>
    );
}

export default Styles;
