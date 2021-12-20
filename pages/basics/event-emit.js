import React, {useState} from 'react';
import EventEmitChild    from "../../components/event-emit-child";

//event emit used to child to parent data communication between components
function EventEmit() {
    let [dt, setdt] = useState('state')
    const getData   = (data) => {
        setdt(data)
        return data
    }

    return (
        <div>
            <h1>{dt}</h1>
            <EventEmitChild onEventEmit={getData}/>
        </div>
    );
}

export default EventEmit;
