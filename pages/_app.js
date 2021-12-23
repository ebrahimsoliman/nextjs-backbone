import '../styles/globals.css'
import 'odometer/themes/odometer-theme-default.css'
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import {Layout}      from 'antd';
import 'antd/dist/antd.css';
import {Provider}    from 'react-redux';
import store         from '../store/index';
import NextNProgress from "nextjs-progressbar";
import SiderLay      from "../components/Layout/SiderLay";
import FooterLay     from "../components/Layout/FooterLay";
import 'antd/es/popover/style/index.css'
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
                    <Content style={{padding: '20px 20px'}}>
                        <Component {...pageProps} /></Content>
                    <FooterLay/>
                </Layout>
            </Layout>
        </Provider>)
}

export default MyApp
