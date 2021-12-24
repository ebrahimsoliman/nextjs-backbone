import React    from 'react';
import {Button} from "@mui/material";


//props used to parent to child data communication between components
function EventEmitChild(props) {

    return (
        <Button onClick={()=>{props.onEventEmit('Data From Child')}}>send data to parent</Button>
    );
}

export default EventEmitChild;
