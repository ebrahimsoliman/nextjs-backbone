import React, {useEffect} from 'react';
import {
    useDispatch,
    useSelector
}                     from "react-redux";
import {
    autologin,
    logout
}                     from "../../store/modules/authentication/actions";
// import socketIOClient from "socket.io-client";
import {retrieveMeetups}  from "../../store/modules/meetups/actions";
import {
    Collapse,
    ListItemButton
}                         from "@mui/material";
import List               from "@mui/material/List";
import {
    AccountBoxOutlined,
    KeyOutlined,
    LoginOutlined,
    LogoutOutlined,
    PersonOutlined
}                         from "@mui/icons-material";
import ListItemIcon       from "@mui/material/ListItemIcon";
import ListItemText       from "@mui/material/ListItemText";


function Menus(props) {
    const user     = useSelector((state => state.authenticationReducer.user));
    const dispatch = useDispatch()
    useEffect(() => {
                  // const ios = socketIOClient(process.env.NEXT_PUBLIC_BACK_APP_URL)
                /*  ios.on('fresh',
                         e => {
                             dispatch(retrieveMeetups())
                         })*/
                  dispatch(autologin())
              },
              [])
    return (
        <Collapse in={props.openAuth}
                  timeout="auto"
                  unmountOnExit>
            <List component="div"
                  disablePadding>
                {[
                    {
                        name: 'Sign up',
                        icon: <PersonOutlined/>,
                        link: '/authentication/signup',
                        user: false
                    },
                    {
                        name: 'Login',
                        icon: <LoginOutlined/>,
                        link: '/authentication/login',
                        user: false
                    },
                    {
                        name: 'Forget Password',
                        icon: <KeyOutlined/>,
                        link: '/authentication/forget-password',
                        user: false
                    },
                    {
                        name: 'Profile',
                        icon: <AccountBoxOutlined/>,
                        link: '/authentication/profile',
                        user: true
                    },
                    {
                        name: 'Log Out',
                        icon: <LogoutOutlined/>,
                        link: '',
                        user: true
                    },

                ].map((text) => {
                    if (user) {
                        if (text.name !== 'Log Out') {
                            return (text.user && <ListItemButton component="a"
                                                                 href={text.link}
                                                                 key={text.name}>
                                <ListItemIcon>
                                    {text.icon}
                                </ListItemIcon>
                                <ListItemText primary={text.name}/>
                            </ListItemButton>)
                        }
                        else {

                            return (
                                <ListItemButton onClick={() => dispatch(logout())}
                                                key={text.name}>
                                    <ListItemIcon>
                                        {text.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={text.name + 'weqw'}/>
                                </ListItemButton>
                            )


                        }
                    }

                    else {
                        return (text.user === false && <ListItemButton component="a"
                                                                       href={text.link}
                                                                       key={text.name}>
                            <ListItemIcon>{text.icon}</ListItemIcon>
                            <ListItemText primary={text.name}/>
                        </ListItemButton>)
                    }
                })}
            </List>
        </Collapse>
    );
}

export default Menus;
