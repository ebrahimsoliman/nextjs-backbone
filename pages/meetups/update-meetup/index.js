import React            from 'react';
import UpdateMeetupList from "../../../components/meetups/Update/UpdateMeetupList";
import {useRouter}      from "next/router";
import {useDispatch}    from "react-redux";
import {updateMeetup}   from "../../../store/modules/meetups/actions";
import UpdateMeetupForm from "../../../components/meetups/Update/UpdateMeetupForm";

function Index() {
    const router   = useRouter()
    const dispatch = useDispatch()

    async function updateMeetupHandler(id,
                                       enteredMeetupData) {
        dispatch(updateMeetup(id,
                              enteredMeetupData))
            .then(() => {

                router.push('/')
            })
    }

    return (<div>
            <UpdateMeetupList/>
            <UpdateMeetupForm  onUpdateMeetup={updateMeetupHandler}/>
           </div>
    );
}

export default Index;
