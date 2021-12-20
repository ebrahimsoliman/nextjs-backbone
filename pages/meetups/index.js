import React      from 'react';
import MeetupList from "../../components/meetups/Retrieve/MeetupList";

function Index() {
    return (
        <div>
            <MeetupList/>
        </div>
    );
}
/*
export async function getServerSideProps() {
    //fetch
    let res
    await axios.get('http://localhost:1337/api/meetups')
               .then(response => {

                   res = response.data.data

               })
               .catch((error) => {

               });
    return {
        props: {
            meetups: res
        },
    }
}*/

export default Index;
