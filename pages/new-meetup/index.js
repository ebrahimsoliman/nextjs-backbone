import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head          from "next/head";
import {Fragment} from "react";
import {useRouter} from "next/router";

function newMeetupPage() {
const router = useRouter()
    async function addMeetupHandler(enteredMeetupData) {
        const response = await fetch('http://localhost:1337/meetups',
                                     {
                                         method : 'POST',
                                         body   :
                                             JSON.stringify(enteredMeetupData),
                                         headers: {'Content-Type': 'application/json'}
                                     })
        if (!response.ok) {
            console.log('warning')
        }
        else {
             router.push('/')
        }
    }

    return (<Fragment>
        <Head>
            <title>Add Meetups</title>
        </Head><NewMeetupForm onAddMeetup={addMeetupHandler}/></Fragment>)
}

export default newMeetupPage;
