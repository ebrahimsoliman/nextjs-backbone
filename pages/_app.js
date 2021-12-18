import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import {Layout} from 'antd';
import 'antd/dist/antd.css';

import {Provider}    from 'react-redux';
import store         from '../store/index';
import NextNProgress from "nextjs-progressbar";
import SiderLay      from "../components/Layout/SiderLay";
import FooterLay     from "../components/Layout/FooterLay";

const {
          Content
      } = Layout;


function MyApp({
                   Component,
                   pageProps
               }) {

    return (
        // step two
        <Provider store={store}>
            <Layout style={{minHeight: '100vh'}}>
                <SiderLay/>
                <Layout>
                    <NextNProgress/>
                    <Content style={{padding: '50px 50px'}}>
                        <Component {...pageProps} /></Content>
                    <FooterLay/>
                </Layout>
            </Layout>
        </Provider>)
}

export default MyApp
