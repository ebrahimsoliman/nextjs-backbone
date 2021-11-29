import React, {useState} from 'react';

function Binding(props) {
    //use state to tell ui to re render whenever this value changes after event binding
    const [i, setI] = useState(1);
    const [x, setX] = useState('');
    let cls         = 'disabled';

    function increase() {
        setI(i + 1);
        console.log('click',
                    i)
    }

    function change(eve) {
        setX(eve.target.value);
    }

    return (
        <div>
            {/*data binding*/}
            <p className={cls}>this number {i} is bind and dynamic and you can change it by press here</p>
            {/*event binding*/}
            <button onClick={increase}>inc</button>
            <br/>
            {/*two binding*/}
            <input type="text"
                   value={x}
                   onInput={change}/>
            <p>{x}</p>
        </div>
    );
}

export default Binding;
