import React            from 'react';
import DeleteMeetupList from "../../../components/meetups/Delete/DeleteMeetupList";
import DeleteMeetupForm from "../../../components/meetups/Delete/DeleteMeetupForm";
import {deleteMeetup}   from "../../../store/modules/meetups/actions";
import {useDispatch}    from "react-redux";

function Index() {
    const dispatch = useDispatch()

    async function deleteMeetupHandler(id) {
        dispatch(deleteMeetup(id))

    }

    return (<div>
        <DeleteMeetupList/>
        <DeleteMeetupForm onDeleteMeetup={deleteMeetupHandler}/>
    </div>)

}

export default Index;
