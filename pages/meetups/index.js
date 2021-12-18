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

                   res = response.data.data

               })
               .catch((error) => {
                  
               });
    return {
        props: {
            meetups: res
        },
    }
}

export default Index;
