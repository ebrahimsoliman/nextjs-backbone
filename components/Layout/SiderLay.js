import React, {
    useEffect,
    useState
}                        from 'react';
import {Layout,}         from "antd";
import {useDispatch}     from "react-redux";
import {autologin}       from "../../store/modules/authentication/actions";
import socketIOClient    from "socket.io-client";
import {retrieveMeetups} from "../../store/modules/meetups/actions";
import dynamic           from "next/dynamic";

const Menus = dynamic(import('./menus'),
                         {
                             ssr    : false,
                             loading: () => 0
                         });

const {

          Sider
      } = Layout;

function SiderLay() {
    const dispatch = useDispatch();
    useEffect(() => {
                  const ios = socketIOClient(process.env.NEXT_PUBLIC_BACK_APP_URL)
                  ios.on('fresh',
                         e => {
                             console.log('meetupsChanged')
                             dispatch(retrieveMeetups())
                         })
                  dispatch(autologin())
              },
              [])
    const [
              collapsed,
              setCollapsed
          ] = useState(true)

    const onCollapse = () => {
        setCollapsed(!collapsed);
    };
    return (
        <Sider collapsible
               collapsed={collapsed}
               onCollapse={onCollapse}>
            <div className="logo"/>
            <Menus/>
        </Sider>
    );
}

export default SiderLay;
