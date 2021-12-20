import React   from 'react';
import {Alert} from "react-bootstrap";

function Lists() {
    let arr = [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
    ]
    


    return (
        <div>
            <h1>Lists</h1>
            {arr.map((element,
                      index) => (
                <Alert key={index}
                       variant={element}>
                    This is a {element} alert—check it out!
                </Alert>
            ))}
        </div>
    );
}

export default Lists;
