import React, {
    useEffect,
    useState
} from 'react';

import dynamic from 'next/dynamic'

const Odometer = dynamic(import('react-odometerjs'),
                         {
                             ssr    : false,
                             loading: () => 0
                         });

function Odo() {
    const [i, setI] = useState(0)
    useEffect(() => {
                  setTimeout(() => {
                                 setI(1150000)
                             },
                             1000)})

    return (
        <div>
            <Odometer value={i}
                      format="(.ddd),dd"/>

        </div>
    );
}

export default Odo;

