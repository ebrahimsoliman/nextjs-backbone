import React, {useState} from 'react';
import {
    useDispatch,
    useSelector
}                        from "react-redux";
import {
    Alert,
    Snackbar
}                        from "@mui/material";
import IconButton        from "@mui/material/IconButton";
import {Close}           from "@mui/icons-material";
import {snackbar}        from "../../store/modules/ui/actions";

function SnackBar() {
    const dispatch = useDispatch();

    const handleClose   = (event,
                           reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(snackbar({message    : '',
                              severity: '',
                              open    : false
                          }))
    };

    const sb     = useSelector((state => state.uiReducer.snackbar))
    const action = (<IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}>
        <Close fontSize="small"/>
    </IconButton>)

    return (
        <div>
            <div>
                <Snackbar
                    open={sb.show}
                    autoHideDuration={5000}
                    onClose={handleClose}>
                    <Alert action={action}
                           severity={sb.severity}
                           sx={{width: '100%'}}>
                        {sb.message}
                    </Alert>

                </Snackbar>
            </div>
        </div>
    );
}

export default SnackBar;
