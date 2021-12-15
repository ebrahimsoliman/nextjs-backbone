import NewMeetupForm  from "../../../components/meetups/Create/NewMeetupForm";
import Head           from "next/head";
import {Fragment}     from "react";
import {useRouter}    from "next/router";
import {createMeetup} from "../../../store/modules/meetups/actions";
import {useDispatch}  from "react-redux";

function newMeetupPage() {
    const router   = useRouter()
    const dispatch = useDispatch()

    async function addMeetupHandler(enteredMeetupData) {
        dispatch(createMeetup(enteredMeetupData))
            .then(() => {
                router.push('/')
            })
    }

    return (<Fragment>
        <Head>
            <title>Add Meetups</title>
        </Head>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/></Fragment>)
}

export default newMeetupPage;
