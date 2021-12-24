import React, {useState} from 'react';
import EventEmitChild    from "../../components/event-emit-child";
import {Typography}      from "@mui/material";

//event emit used to child to parent data communication between components
function EventEmit() {
    let [dt, setdt] = useState('Data Before Event Emit')
    const getData   = (data) => {
        setdt(data)
        return data
    }

    return (
        <div>
            <Typography variant={'h1'}>{dt}</Typography>
            <EventEmitChild onEventEmit={getData}/>
        </div>
    );
}

export default EventEmit;
