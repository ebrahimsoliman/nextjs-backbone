import React from 'react';
import Prop  from "../../components/props/prop";
//props used to parent to child data communication between components
function Props() {
    return (
        <div>
            <Prop content={'this content sent by props feature from parent to child component'}/>
        </div>
    );
}

export default Props;
