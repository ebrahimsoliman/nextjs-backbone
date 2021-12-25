import NewMeetupForm from "../../../components/meetups/Create/NewMeetupForm";
import Head          from "next/head";
import {Fragment}    from "react";

function newMeetupPage() {
    return (<Fragment>
        <Head>
            <title>Add Meetups</title>
        </Head>
        <NewMeetupForm/></Fragment>)
}

export default newMeetupPage;
