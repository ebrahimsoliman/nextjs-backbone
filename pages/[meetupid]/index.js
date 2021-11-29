import MeetupDetail from "../../components/meetups/MeetupDetail";

function meetUpItemid(props) {
    return <MeetupDetail image={props.meetupData.image}
                         title={props.meetupData.title}
                         address={props.meetupData.address}
                         description={props.meetupData.description}/>
}

export async function getStaticPaths() {
    let res
    const response = await fetch('http://localhost:1337/meetups',
                                 {
                                     method : 'GET',
                                     headers: {'Content-Type': 'application/json'}
                                 })
    let ids
    if (!response.ok) {
        console.log('warning')
    }
    else {
        res = await response.json();
        ids = res.map(item => {
            return {params: {meetupid: item.id.toString()}}
        })
    }
    return {
        fallback: 'blocking',
        paths   :
        ids
    }

}

export async function getStaticProps(context) {
    //fetch
    let res
    const meetupid = context.params.meetupid;
    const response = await fetch('http://localhost:1337/meetups/' + meetupid,
                                 {
                                     method : 'GET',
                                     headers: {'Content-Type': 'application/json'}
                                 })
    let ids
    if (!response.ok) {
        console.log('warning')
    }
    else {
        console.log('tamam')
        res = await response.json()
    }

    console.log(res)
    return {
        props     : {
            meetupData: res
        },
        revalidate: 1
    }
}

export default meetUpItemid;
