import React   from 'react';
import dynamic from 'next/dynamic'


const Odo = dynamic(
    () => import('../../../components/animations/odo'),
    {ssr: false}
)

function dometer() {
    return (
        <div>
            <Odo/>
        </div>
    );
}

export default dometer;
