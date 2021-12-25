import React, {Component} from 'react';
import {Snackbar}         from "@mui/material";

class SnackBar
    extends Component {
    render() {
        return (
            <div>
                <Snackbar
                    open={true}
                    message="I love snacks"
                />
            </div>
        );
    }
}

export default SnackBar;
