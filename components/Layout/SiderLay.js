import React, {
    useEffect,
    useState
}                  from 'react';
import {
    Layout,
    Menu
}                  from "antd";
import {
    DeleteOutlined,
    EditOutlined,
    FileOutlined,
    PieChartOutlined,
    PlusOutlined,
    TeamOutlined,
    UserOutlined
}                  from "@ant-design/icons";
import Link        from "next/link";
import {
    useDispatch,
    useSelector
}                  from "react-redux";
import {autologin} from "../../store/modules/authentication/actions";

const {SubMenu} = Menu;
const {

          Sider
      }         = Layout;

function SiderLay() {
    const user = useSelector((state => state.authenticationReducer.user))

    const dispatch = useDispatch()
    useEffect(() => {
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
            <Menu theme="dark"
                  defaultSelectedKeys={['1']}
                  mode="inline">
                <Menu.Item key="1"
                           icon={<PieChartOutlined/>}>
                    Option 1
                </Menu.Item>
                <SubMenu key="sub1"
                         icon={<UserOutlined/>}
                         title="Meetups">
                    <Menu.Item key={2}
                               icon={<UserOutlined/>}> <Link href="/meetups/">All Meetups</Link></Menu.Item>
                    <Menu.Item key={3}
                               icon={<PlusOutlined/>}><Link href="/meetups/new-meetup">Add
                                                                                       Meetup</Link></Menu.Item>
                    <Menu.Item key={4}
                               icon={<EditOutlined/>}> <Link href="/meetups/update-meetup">Update
                                                                                           Meetup</Link></Menu.Item>
                    <Menu.Item key={5}
                               icon={<DeleteOutlined/>}><Link href="/meetups/delete-meetup">Delete
                                                                                            Meetup</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub2"
                         icon={<TeamOutlined/>}
                         title="Team">
                    <Menu.Item key="6"><Link href="/basics/bind">Bind</Link></Menu.Item>
                    <Menu.Item key="7"><Link href="/basics/conditions">Conditions</Link></Menu.Item>
                    <Menu.Item key="8"><Link href="/basics/event-emit">Events</Link></Menu.Item>
                    <Menu.Item key="9"><Link href="/basics/lists">Lists</Link></Menu.Item>
                    <Menu.Item key="10"><Link href="/basics/props">Props</Link></Menu.Item>
                    <Menu.Item key="11"><Link href="/basics/styles">Styles</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub4"
                         icon={<TeamOutlined/>}
                         title="Authentication">
                    <Menu.Item key="12"><Link href="/authentication/signup">Sign Up</Link></Menu.Item>
                    <Menu.Item key="13"><Link href="/authentication/login">Login</Link></Menu.Item>
                    <Menu.Item key="14"><Link href="/authentication/forget-password">Forget Password</Link></Menu.Item>
                    <Menu.Item key="15"><Link href="/authentication/profile">Profile</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub3"
                         icon={<TeamOutlined/>}
                         title="Team">

                    <Menu.Item key="16"><Link href="/externals/swiper">Swiper</Link></Menu.Item>
                </SubMenu>
                <Menu.Item key="17"
                           icon={<FileOutlined/>}>
                    Files
                </Menu.Item>
            </Menu>
        </Sider>
    );
}

export default SiderLay;
