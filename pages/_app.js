import '../styles/globals.css'
import Layout          from "../components/layout/Layout";
import 'bootstrap/dist/css/bootstrap.css'
import {useState}      from "react";
import AppContext      from "../Context/AppContext";
import languagesObject from "../Context/languagesObject";
import {Provider} from 'react-redux';



function MyApp({
                   Component,
                   pageProps
               }) {
    const [languageSelected, setLanguageSelected] = useState("en");
    const languageObject                          = languagesObject;
    return (
        <AppContext.Provider value={{
        state              : {
            languages       : languageObject[languageSelected],
            languageSelected: languageSelected,
        },
        setLanguageSelected: setLanguageSelected,
    }}><Layout><Component {...pageProps} /></Layout>
    </AppContext.Provider>)
}

export default MyApp
