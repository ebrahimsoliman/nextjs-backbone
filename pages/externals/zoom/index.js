import React from 'react';
import dynamic from 'next/dynamic'


const Zoom = dynamic(
    () => import('../../../components/zoom'),
    {ssr: false}
)

function Index() {

    return (
        <div>
            <Zoom/>
        </div>
    );
}

export default Index;
