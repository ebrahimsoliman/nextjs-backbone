import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Link from "next/link"
import {
    Layout,
    Menu
}           from 'antd';
import 'antd/dist/antd.css';

import {Provider}    from 'react-redux';
import store         from '../store/index';
import {
    DeleteOutlined,
    EditOutlined,
    FileOutlined,
    PieChartOutlined,
    PlusOutlined,
    TeamOutlined,
    UserOutlined,
}                    from '@ant-design/icons';
import {useState}    from "react";
import NextNProgress from "nextjs-progressbar";

const {
          Header,
          Footer,
          Sider,
          Content
      }         = Layout;
const {SubMenu} = Menu;

function MyApp({
                   Component,
                   pageProps
               }) {
    const [
              collapsed,
              setCollapsed
          ]          = useState(true)
    const onCollapse = () => {
        setCollapsed(!collapsed);
    };

    return (
        // step two
        <Provider store={store}>

            <Layout style={{minHeight: '100vh'}}>
                <Sider collapsible
                       collapsed={collapsed}
                       onCollapse={onCollapse}>
                    <div className="logo"/>
                    <Menu theme="dark"
                          defaultSelectedKeys={['11']}
                          mode="inline">
                        <Menu.Item key="11"
                                   icon={<PieChartOutlined/>}>
                            Option 1
                        </Menu.Item>
                        <SubMenu key="sub1"
                                 icon={<UserOutlined/>}
                                 title="Meetups">
                            <Menu.Item key={1}
                                       icon={<UserOutlined/>}> <Link href="/meetups/">All Meetups</Link></Menu.Item>
                            <Menu.Item key={2}
                                       icon={<PlusOutlined/>}><Link href="/meetups/new-meetup">Add
                                                                                               Meetup</Link></Menu.Item>
                            <Menu.Item key={3}
                                       icon={<EditOutlined/>}> <Link href="/meetups/update-meetup">Update
                                                                                                   Meetup</Link></Menu.Item>
                            <Menu.Item key={4}
                                       icon={<DeleteOutlined/>}><Link href="/meetups/delete-meetup">Delete
                                                                                                    Meetup</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2"
                                 icon={<TeamOutlined/>}
                                 title="Team">
                            <Menu.Item key="8">Team 1</Menu.Item>
                            <Menu.Item key="9">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="10"
                                   icon={<FileOutlined/>}>
                            Files
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    {/*<Header>
                     <Menu theme="dark"
                     mode="horizontal"
                     defaultSelectedKeys={['1']}>

                     <Menu.Item key={1}> <Link href="/">All Meetups</Link></Menu.Item>
                     <Menu.Item key={2}><Link href="/new-meetup">Add New Meetup</Link></Menu.Item>

                     </Menu>
                     </Header>*/} <NextNProgress/>
                    <Content style={{padding: '50px 50px'}}>
                        <Component {...pageProps} /></Content>
                    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>

                </Layout> </Layout></Provider>)
}

export default MyApp
