import React      from 'react';
import {
    useSelector
}                 from "react-redux";
import {Snackbar} from "@mui/material";

function SnackBar() {
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

export default SnackBar;
