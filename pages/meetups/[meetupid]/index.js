import MeetupDetail from "../../../components/meetups/Detail/MeetupDetail";
import axios        from "axios";

function meetUpItemid(props) {
    return <MeetupDetail image={props.meetupData.attributes.image}
                         title={props.meetupData.attributes.title}
                         address={props.meetupData.attributes.address}
                         description={props.meetupData.attributes.description}/>
}

export async function getStaticPaths() {
    let res;
    let ids
    await axios.get('http://localhost:1337/api/meetups')
               .then(response => {
                   res = response.data.data
                   ids = res.map(item => {
                       return {params: {meetupid: item.id.toString()}}
                   })
               })
               .catch((error) => {
               });
    return {
        fallback: 'blocking',
        paths   : ids
    }

}

export async function getStaticProps(context) {
    //fetch
    let res
    let ids
    const meetupid = context.params.meetupid;
    await axios.get('http://localhost:1337/api/meetups/' + meetupid)
               .then(response => {

                   res = response.data.data
                   ids = res.map(item => {
                       return {params: {meetupid: item.id.toString()}}
                   })
               })
               .catch((error) => {

               });

    return {
        props     : {
            meetupData: res
        },
        revalidate: 1
    }
}

export default meetUpItemid;
