import React      from 'react';
import MeetupList from "../../components/meetups/Retrieve/MeetupList";
import axios      from "axios";

function Index(props) {
    return (
        <div>
            <MeetupList meetups={props.meetups}/>
        </div>
    );
}

export async function getServerSideProps() {
    //fetch
    let res
    await axios.get('http://localhost:1337/api/meetups')
               .then(response => {
                   /*      notification['success']({
                    message    : 'Meetups Has been Fetched Successfully',
                    description: `${response.data.length} Meetup has been Fetched`,
                    duration   : 0
                    });*/
                   res = response.data.data

               })
               .catch((error) => {
                   /* notification['error']({
                    message    : 'Failed to fetch data',
                    description: `${error.error.message}`,
                    duration   : 5
                    });
                    console.log('err')
                    console.log('warning')*/
               });
    return {
        props: {
            meetups: res
        },
    }
}

export default Index;
