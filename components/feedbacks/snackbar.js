import React from 'react';
import {
    useSelector
}            from "react-redux";

function Snackbar() {
    const sb       = useSelector((state => state.uiReducer.snackbar))

    return (
        <div>
            <div>
                <Snackbar
                    open={sb.show}
                    message={sb.message}
                />
            </div>
        </div>
    );
}

export default Snackbar;
