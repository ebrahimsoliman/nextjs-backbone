import {
    Fragment,
    useEffect
}                         from "react";
import Head              from "next/head";
import {retrieveMeetups} from "../store/modules/meetups/actions";
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
                <title>Meetings</title>
                <meta name="title"
                      content="Meetings"/>
                <meta name="viewport"
                      content="initial-scale=1, width=device-width"/>
                <meta name="description"
                      content="This is a meetings site"/>
                <meta name="keywords"
                      content="meetings, website meetings, meetup, search on meetings"/>
                <meta name="robots"
                      content="index, follow"/>
                <meta http-equiv="Content-Type"
                      content="text/html; charset=utf-8"/>
                <meta name="language"
                      content="English"/>

                {/*<!-- Primary Meta Tags -->
                 <title>Meta Tags — Preview, Edit and Generate</title>
                 <meta name="title" content="Meta Tags — Preview, Edit and Generate">
                 <meta name="description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!">

                 <!-- Open Graph / Facebook -->
                 <meta property="og:type" content="website">
                 <meta property="og:url" content="https://metatags.io/">
                 <meta property="og:title" content="Meta Tags — Preview, Edit and Generate">
                 <meta property="og:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!">
                 <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">

                 <!-- Twitter -->
                 <meta property="twitter:card" content="summary_large_image">
                 <meta property="twitter:url" content="https://metatags.io/">
                 <meta property="twitter:title" content="Meta Tags — Preview, Edit and Generate">
                 <meta property="twitter:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!">
                 <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">*/}
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
