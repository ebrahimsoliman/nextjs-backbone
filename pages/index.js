import MeetupList from "../components/meetups/MeetupList";
import {Fragment} from "react";
import Head       from "next/head";
import dynamic    from "next/dynamic";

const botnp = dynamic(
    () => {
        return import('popper.js/dist/popper.js')
    },
    {ssr: false}
);

const bots  = dynamic(
    () => {
        return import('bootstrap/dist/js/bootstrap.js')
    },
    {ssr: false}
);


function HomePage(props) {
    return (
        <Fragment>

            <Head>
                <title>Meetings</title>
                <meta name="title"
                      content="Meetings"/>
                <meta name="viewport" content="initial-scale=1, width=device-width" />

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
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                        crossOrigin="anonymous"/>
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
            <MeetupList meetups={props.meetups}/>
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
    let res
    const response = await fetch('http://localhost:1337/meetups',
                                 {
                                     method : 'GET',
                                     headers: {'Content-Type': 'application/json'}
                                 })

    if (!response.ok) {
        console.log('warning')
    }
    else {
        res = await response.json()
    }
    return {
        props: {
            meetups: res
        },
    }
}

export default HomePage
