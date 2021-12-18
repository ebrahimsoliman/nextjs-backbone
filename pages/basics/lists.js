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
        <div><h1>Lists</h1>
            {arr.map((variant,
                      idx) => (
                <Alert key={idx}
                       variant={variant}>
                    This is a {variant} alert—check it out!
                </Alert>
            ))}
        </div>
    );
}

export default Lists;
