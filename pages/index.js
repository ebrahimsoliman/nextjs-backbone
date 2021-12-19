import {
    Fragment,
    useEffect
}                         from "react";
import Head               from "next/head";
import {retrieveMeetups}  from "../store/modules/meetups/actions";
import {
    useDispatch,
    useSelector
}                         from "react-redux";
import MeetupList         from "../components/meetups/Retrieve/MeetupList";
import MeetupsDataService from "../services/meetups.service";


function HomePage(props) {
    const dispatch = useDispatch()
    const meetups  = useSelector((state => state.meetupsReducer.meetups))
    console.log(meetups)
    useEffect(() => {
                  dispatch(retrieveMeetups())
              },
              []);
    return (
        <Fragment>

            <Head>


                <title>Next Backbone</title>
                <meta name="title"
                      content="Next Backbone"/>
                <meta name="description"
                      content="This Is A React/Next.js Backbone For Blue Holding Company"/>

                <meta property="og:type"
                      content="website"/>
                <meta property="og:url"
                      content="https://metatags.io/"/>
                <meta property="og:title"
                      content="Blueholding Next Backbone"/>
                <meta property="og:description"
                      content="This Is A React/Next.js Backbone For Blue Holding Company"/>
                <meta property="og:image"
                      content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>

                <meta property="twitter:card"
                      content="summary_large_image"/>
                <meta property="twitter:url"
                      content="https://metatags.io/"/>
                <meta property="twitter:title"
                      content="Blueholding Next Backbone"/>
                <meta property="twitter:description"
                      content="This Is A React/Next.js Backbone For Blue Holding Company"/>
                <meta property="twitter:image"
                      content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
            </Head>
            <MeetupList meetups={meetups}/>
        </Fragment>)
}

//if you have data not frequently changes
/*
 export async function getStaticProps() {
 //fetch
 return {
 props     : {
 meetups: DUMMY_MEETUPS
 },
 revalidate: 1
 }
 }*/

//if you have data frequently changes
export async function getServerSideProps() {
    //fetch
    let res;
    await MeetupsDataService.retrieveMeetups()
                            .then(e => {
                                res = e.data.data
                                console.log(res.data)
                            })


    return {
        props: {
            meetups: res
        },
    }
}

export default HomePage
