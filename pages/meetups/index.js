import React, {useEffect} from 'react';
import MeetupList         from "../../components/meetups/Retrieve/MeetupList";
import {
    useDispatch,
    useSelector
}                         from "react-redux";
import {retrieveMeetups}  from "../../store/modules/meetups/actions";

function Index() {
    const dispatch = useDispatch()
    const meetups  = useSelector((state => state.meetupsReducer.meetups))
    console.log(meetups)
    useEffect(() => {
                  dispatch(retrieveMeetups())
              },
              []);
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
