import React          from 'react';
import EventEmitChild from "../../components/event-emit-child";

//event emit used to child to parent data communication between components
function EventEmit() {
    const getData = (data) => {
        console.log(data)
        return data

    }
    return (
        <div>
            <EventEmitChild onEventEmit={getData}/>

        </div>
    );
}

export default EventEmit;
