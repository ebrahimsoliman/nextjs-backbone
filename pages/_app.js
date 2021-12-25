import * as React       from 'react';
import {
    styled,
    useTheme
}                       from '@mui/material/styles';
import '../styles/globals.css'
import 'odometer/themes/odometer-theme-default.css'
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import {Provider}       from 'react-redux';
import store            from '../store/index';
import Box              from '@mui/material/Box';
import MuiDrawer        from '@mui/material/Drawer';
import MuiAppBar        from '@mui/material/AppBar';
import Toolbar          from '@mui/material/Toolbar';
import List             from '@mui/material/List';
import CssBaseline      from '@mui/material/CssBaseline';
import Typography       from '@mui/material/Typography';
import Divider          from '@mui/material/Divider';
import IconButton       from '@mui/material/IconButton';
import MenuIcon         from '@mui/icons-material/Menu';
import ChevronLeftIcon  from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemIcon     from '@mui/material/ListItemIcon';
import ListItemText     from '@mui/material/ListItemText';
import InboxIcon        from '@mui/icons-material/MoveToInbox';
import NextNProgress    from "nextjs-progressbar";
import {
    Collapse,
    ListItemButton
}                       from "@mui/material";
import {
    AccountBoxOutlined,
    AccountCircleOutlined,
    AddOutlined,
    BorderColorOutlined,
    BrushOutlined,
    DeleteOutlined,
    ExpandLess,
    ExpandMore,
    FindReplace,
    FormatListBulletedOutlined,
    KeyOutlined,
    LoginOutlined,
    LogoutOutlined,
    MouseOutlined,
    MoveDownOutlined,
    MoveUpOutlined,
    PersonOutlined,
    QuestionMarkOutlined,
    RestorePageOutlined,
    SpeedOutlined,
    SyncOutlined
}                       from "@mui/icons-material";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width     : drawerWidth,
    transition: theme.transitions.create('width',
                                         {
                                             easing  : theme.transitions.easing.sharp,
                                             duration: theme.transitions.duration.enteringScreen,
                                         }),
    overflowX : 'hidden',
});

const closedMixin = (theme) => ({
    transition                  : theme.transitions.create('width',
                                                           {
                                                               easing  : theme.transitions.easing.sharp,
                                                               duration: theme.transitions.duration.leavingScreen,
                                                           }),
    overflowX                   : 'hidden',
    width                       : `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(
    ({theme}) => ({
        display       : 'flex',
        alignItems    : 'center',
        justifyContent: 'flex-end',
        padding       : theme.spacing(0,
                                      1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));

const AppBar = styled(MuiAppBar,
                      {
                          shouldForwardProp: (prop) => prop !== 'open',
                      })(
    ({
         theme,
         open
     }) => ({
        zIndex    : theme.zIndex.drawer + 1,
        transition: theme.transitions.create([
                                                 'width',
                                                 'margin'
                                             ],
                                             {
                                                 easing  : theme.transitions.easing.sharp,
                                                 duration: theme.transitions.duration.leavingScreen,
                                             }),
        ...(open && {
            marginLeft: drawerWidth,
            width     : `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create([
                                                     'width',
                                                     'margin'
                                                 ],
                                                 {
                                                     easing  : theme.transitions.easing.sharp,
                                                     duration: theme.transitions.duration.enteringScreen,
                                                 }),
        }),
    }));

const Drawer = styled(MuiDrawer,
                      {shouldForwardProp: (prop) => prop !== 'open'})(
    ({
         theme,
         open
     }) => ({
        width     : drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing : 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MyApp(
    {
        Component,
        pageProps
    }
) {
    const theme                             = useTheme();
    const [openMenu, setOpenMenu]           = React.useState(false);
    const [openBasics, setOpenBasics]       = React.useState(false);
    const [openREST, setOpenREST]           = React.useState(false);
    const [openAuth, setOpenAuth]           = React.useState(false);
    const [openExternals, setOpenExternals] = React.useState(false);
    const handleClickBasics                 = () => {
        setOpenBasics(!openBasics);
        setOpenAuth(false)
        setOpenREST(false)
        setOpenExternals(false)
    };
    const handleClickREST                   = () => {
        setOpenREST(!openREST);
        setOpenBasics(false);
        setOpenAuth(false)
        setOpenExternals(false)
    };
    const handleClickAuth                   = () => {
        setOpenAuth(!openAuth);
        setOpenREST(false);
        setOpenBasics(false);
        setOpenExternals(false)
    };
    const handleClickExternals              = () => {
        setOpenExternals(!openExternals);
        setOpenAuth(false);
        setOpenREST(false);
        setOpenBasics(false);
    };

    const handleDrawerOpen = () => {
        setOpenMenu(true);
    };

    const handleDrawerClose = () => {
        setOpenMenu(false);
    };

    return (<Provider store={store}>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <AppBar position="fixed"
                        open={openMenu}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: '36px',
                                ...(openMenu && {display: 'none'}),
                            }}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6"
                                    noWrap
                                    component="div">
                            Blueholding Backbone
                        </Typography>
                    </Toolbar>
                </AppBar>
                <NextNProgress/>
                <Drawer variant="permanent"
                        open={openMenu}>
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                        </IconButton>
                    </DrawerHeader>
                    {/*Basics List*/}

                    <List>
                        <ListItemButton onClick={handleClickBasics}>
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Basics"/>
                            {openBasics ? <ExpandLess/> : <ExpandMore/>}
                        </ListItemButton>
                    </List>
                    <Collapse in={openBasics}
                              timeout="auto"
                              unmountOnExit>
                        <List component="div"
                              disablePadding>
                            {[
                                {
                                    name: 'Bind',
                                    icon: <FindReplace/>,
                                    link: '/basics/bind'
                                },
                                {
                                    name: 'Conditions',
                                    icon: <QuestionMarkOutlined/>,
                                    link: '/basics/conditions'
                                },
                                {
                                    name: 'Lists',
                                    icon: <FormatListBulletedOutlined/>,
                                    link: '/basics/lists'
                                },
                                {
                                    name: 'Props',
                                    icon: <MoveDownOutlined/>,
                                    link: '/basics/props'
                                },
                                {
                                    name: 'Event Emit',
                                    icon: <MoveUpOutlined/>,
                                    link: '/basics/event-emit'
                                },
                                {
                                    name: 'Styles',
                                    icon: <BrushOutlined/>,
                                    link: '/basics/styles'
                                }
                            ].map((text) => (
                                <ListItemButton component="a"
                                                href={text.link}
                                                key={text.name}>
                                    <ListItemIcon>
                                        {text.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={text.name}/>
                                </ListItemButton>
                            ))}
                        </List>
                    </Collapse>

                    {/*API LIST*/}
                    <Divider/>
                    <List>
                        <ListItemButton onClick={handleClickREST}>
                            <ListItemIcon>
                                <RestorePageOutlined/>
                            </ListItemIcon>
                            <ListItemText primary="REST API"/>
                            {openREST ? <ExpandLess/> : <ExpandMore/>}
                        </ListItemButton>
                    </List>
                    <Collapse in={openREST}
                              timeout="auto"
                              unmountOnExit>
                        <List component="div"
                              disablePadding>
                            {[
                                {
                                    name: 'Retrieve',
                                    icon: <SyncOutlined/>,
                                    link: '/meetups'
                                },
                                {
                                    name: 'Create',
                                    icon: <AddOutlined/>,
                                    link: '/meetups/create'
                                },
                                {
                                    name: 'Update',
                                    icon: <BorderColorOutlined/>,
                                    link: '/meetups/update'
                                },
                                {
                                    name: 'Delete',
                                    icon: <DeleteOutlined/>,
                                    link: '/meetups/delete'
                                }
                            ].map((text) => (
                                <ListItemButton component="a"
                                                href={text.link}
                                                key={text.name}>
                                    <ListItemIcon>
                                        {text.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={text.name}/>
                                </ListItemButton>
                            ))}
                        </List>
                    </Collapse>
                    {/*Auth*/}
                    <Divider/>
                    <List>
                        <ListItemButton onClick={handleClickAuth}>
                            <ListItemIcon>
                                <AccountCircleOutlined/>
                            </ListItemIcon>
                            <ListItemText primary="Authentication"/>
                            {openAuth ? <ExpandLess/> : <ExpandMore/>}
                        </ListItemButton>
                    </List>
                    <Collapse in={openAuth}
                              timeout="auto"
                              unmountOnExit>
                        <List component="div"
                              disablePadding>
                            {[
                                {
                                    name: 'Sign up',
                                    icon: <PersonOutlined/>,
                                    link: '/authentication/signup'
                                },
                                {
                                    name: 'Login',
                                    icon: <LoginOutlined/>,
                                    link: '/authentication/login'
                                },
                                {
                                    name: 'Forget Password',
                                    icon: <KeyOutlined/>,
                                    link: '/authentication/forget-password'
                                },
                                {
                                    name: 'Profile',
                                    icon: <AccountBoxOutlined/>,
                                    link: '/authentication/profile'
                                },
                                {
                                    name: 'Log Out',
                                    icon: <LogoutOutlined/>,
                                    link: ''
                                },

                            ].map((text) => (
                                <ListItemButton component="a"
                                                href={text.link}
                                                key={text.name}>
                                    <ListItemIcon>
                                        {text.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={text.name}/>
                                </ListItemButton>
                            ))}
                        </List>
                    </Collapse>
                    <Divider/>
                    <List>
                        <ListItemButton onClick={handleClickExternals}>
                            <ListItemIcon>
                                <AccountCircleOutlined/>
                            </ListItemIcon>
                            <ListItemText primary="Externals"/>
                            {openExternals ? <ExpandLess/> : <ExpandMore/>}
                        </ListItemButton>
                    </List>
                    <Collapse in={openExternals}
                              timeout="auto"
                              unmountOnExit>
                        <List component="div"
                              disablePadding>
                            {[
                                {
                                    name: 'Swiper',
                                    icon: <svg xmlns="http://www.w3.org/2000/svg"
                                               width="25"
                                               height="25"
                                               viewBox="0 0 300 300"
                                               className="rounded-full w-16 h-16"
                                               alt="Swiper">
                                        <g fill="none"
                                           fill-rule="evenodd">
                                            <circle cx="150"
                                                    cy="150"
                                                    r="150"
                                                    fill="#FFF"></circle>
                                            <path fill="#6332F6"
                                                  fill-rule="nonzero"
                                                  d="M190.2 200.9c0-5.4-1.05-10.05-3.15-13.95-2.1-3.9-4.95-7.4-8.55-10.5-3.6-3.1-7.9-5.9-12.9-8.4s-10.4-5.15-16.2-7.95c-6.8-3.2-13.65-6.6-20.55-10.2-6.9-3.6-13.1-7.8-18.6-12.6-5.5-4.8-9.95-10.35-13.35-16.65-3.4-6.3-5.1-13.65-5.1-22.05 0-7 1.3-13.95 3.9-20.85 2.6-6.9 6.4-13.05 11.4-18.45s11.25-9.8 18.75-13.2c7.5-3.4 16.25-5.1 26.25-5.1 7.4 0 14.25.95 20.55 2.85 6.3 1.9 11.95 4.35 16.95 7.35s9.4 6.3 13.2 9.9c3.8 3.6 6.9 7.1 9.3 10.5l-18.9 15.3c-1.8-2.6-4.05-5.2-6.75-7.8-2.7-2.6-5.8-4.95-9.3-7.05-3.5-2.1-7.35-3.8-11.55-5.1-4.2-1.3-8.7-1.95-13.5-1.95-5.8 0-10.85.9-15.15 2.7-4.3 1.8-7.95 4.2-10.95 7.2-3 3-5.25 6.45-6.75 10.35S117 93.1 117 97.1c0 5 1.1 9.35 3.3 13.05 2.2 3.7 5.3 7.15 9.3 10.35 4 3.2 8.9 6.3 14.7 9.3 5.8 3 12.3 6.1 19.5 9.3 8 3.6 15.25 7.35 21.75 11.25 6.5 3.9 12 8.15 16.5 12.75s7.95 9.8 10.35 15.6c2.4 5.8 3.6 12.6 3.6 20.4 0 9.2-1.65 17.45-4.95 24.75-3.3 7.3-7.85 13.5-13.65 18.6-5.8 5.1-12.65 9-20.55 11.7-7.9 2.7-16.35 4.05-25.35 4.05s-17.1-1.25-24.3-3.75c-7.2-2.5-13.6-5.8-19.2-9.9-5.6-4.1-10.4-8.8-14.4-14.1-4-5.3-7.2-10.65-9.6-16.05l21-12.6c1.8 4.2 4.15 8.25 7.05 12.15 2.9 3.9 6.25 7.35 10.05 10.35 3.8 3 8.15 5.4 13.05 7.2 4.9 1.8 10.25 2.7 16.05 2.7 5 0 9.85-.7 14.55-2.1 4.7-1.4 8.85-3.5 12.45-6.3 3.6-2.8 6.5-6.25 8.7-10.35 2.2-4.1 3.3-8.95 3.3-14.55z"></path>
                                        </g>
                                    </svg>,
                                    link: '/externals/carousels/swiper'
                                },
                                {
                                    name: 'Stripe',
                                    icon: <svg viewBox="0 0 60 25"
                                               xmlns="http://www.w3.org/2000/svg"
                                               width="25"
                                               height="25"
                                               className="UserLogo variant-- ">
                                        <path fill="var(--userLogoColor, #0A2540)"
                                              d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.9 0 1.85 6.29.97 6.29 5.88z"
                                              fill-rule="evenodd"></path>
                                    </svg>,
                                    link: '/externals/payments/stripe'
                                },
                                {
                                    name: 'Zoom',
                                    icon: <svg xmlns="http://www.w3.org/2000/svg"
                                               viewBox="0 0 32 32"
                                               width="25"
                                               height="25">
                                        <defs>
                                            <clipPath id="A">
                                                <path d="M-200-175H800v562H-200z"
                                                      className="N"/>
                                            </clipPath>
                                            <clipPath id="B">
                                                <path d="M370 89a24 24 0 1 1-34 0 24 24 0 0 1 34 0zm-17-23a40 40 0 1 1-.05 0zm101 23a24 24 0 1 1-34 0 24 24 0 0 1 34 0zm11.3-11.3A40 40 0 1 1 437 66a40 40 0 0 1 28.28 11.72zM253 145.8l4 .2h60l-.2-4c-.54-6.6-5.2-11.4-11.8-11.8l-4-.2h-36l48-48-.2-4A12.1 12.1 0 0 0 301 66.2l-4-.2h-60l.2 4A12.41 12.41 0 0 0 249 81.8l4 .2h36l-48 48 .2 4a12.23 12.23 0 0 0 11.8 11.8zM526.84 90a17.29 17.29 0 0 1 2 8l.2 4v28l.2 4A12.29 12.29 0 0 0 541 145.8l4 .2v-44l.2-4a17.44 17.44 0 0 1 2-8.05 16 16 0 0 1 27.69.05 17.54 17.54 0 0 1 1.94 8l.2 4v28l.2 4A12.24 12.24 0 0 0 589 145.8l4 .2V98a32 32 0 0 0-56-21.17 32 32 0 0 0-41.92-5.35C492 68 485 66 481 66v80l4-.2c6.68-.44 11.54-5.16 11.8-11.8l.2-4v-28l.2-4a17.45 17.45 0 0 1 2-8 16 16 0 0 1 27.68 0z"
                                                      className="N P"/>
                                            </clipPath>
                                            <clipPath id="C">
                                                <circle cx="107"
                                                        cy="106"
                                                        r="102"
                                                        className="N"/>
                                            </clipPath>
                                            <clipPath id="D">
                                                <circle cx="107"
                                                        cy="106"
                                                        r="100"
                                                        className="N"/>
                                            </clipPath>
                                            <clipPath id="E">
                                                <circle cx="107"
                                                        cy="106"
                                                        r="92"
                                                        className="N"/>
                                            </clipPath>
                                            <clipPath id="F">
                                                <path d="M135 94.06l26-19c2.27-1.85 4-1.42 4 2V135c0 3.84-2.16 3.4-4 2l-26-19zM47 77.2v43.2A17.69 17.69 0 0 0 64.77 138h63a3.22 3.22 0 0 0 3.23-3.2V91.6A17.69 17.69 0 0 0 113.23 74h-63A3.22 3.22 0 0 0 47 77.2z"
                                                      className="N P"/>
                                            </clipPath>
                                            <clipPath id="G">
                                                <path d="M390.36 50.67l-.36 1.6q.44 0 .86.1a5.64 5.64 0 0 0 .83.06 4.18 4.18 0 0 0 3.89-2.15L407 30.42h-2.12l-7.42 13.65h-.06l-2.3-13.65H393l3 16.08-1.46 2.5a5.21 5.21 0 0 1-1 1.18 2.2 2.2 0 0 1-1.53.56 15 15 0 0 1-1.65-.07zm-10.13-5.36a4.52 4.52 0 0 1-1.95-.39 4 4 0 0 1-1.37-1 4.29 4.29 0 0 1-.81-1.54 6.68 6.68 0 0 1-.26-1.92 11.09 11.09 0 0 1 .42-2.91 10.47 10.47 0 0 1 1.25-2.85 7.64 7.64 0 0 1 2.06-2.18 4.8 4.8 0 0 1 2.85-.87 4.23 4.23 0 0 1 3.51 1.35 5.64 5.64 0 0 1 1.07 3.59 11.19 11.19 0 0 1-.44 3 9.58 9.58 0 0 1-1.29 2.82 7.32 7.32 0 0 1-2.12 2.07 5.33 5.33 0 0 1-2.92.83zm-3-21.06L372.5 46.5h1.74l.78-3.68h.06a4.77 4.77 0 0 0 1.92 3.06 5.85 5.85 0 0 0 3.52 1.06 7.15 7.15 0 0 0 3.65-.92 8.62 8.62 0 0 0 2.66-2.38 10.91 10.91 0 0 0 1.64-3.3 12.54 12.54 0 0 0 .56-3.68 9.12 9.12 0 0 0-.37-2.66 5.78 5.78 0 0 0-1.14-2.12 5.4 5.4 0 0 0-1.9-1.4 6.5 6.5 0 0 0-2.7-.51 6 6 0 0 0-3.29.9 6.68 6.68 0 0 0-2.26 2.4h-.06l1.9-9zM351 45.3a3.87 3.87 0 0 1-3.27-1.37 5.44 5.44 0 0 1-1.06-3.43 11.36 11.36 0 0 1 .44-3 10.2 10.2 0 0 1 1.29-2.88 7.31 7.31 0 0 1 2.15-2.15 5.33 5.33 0 0 1 3-.84 4.33 4.33 0 0 1 3.32 1.25 4.77 4.77 0 0 1 1.17 3.4 11.07 11.07 0 0 1-.47 3.1 10.49 10.49 0 0 1-1.36 2.93 7.71 7.71 0 0 1-2.2 2.18 5.34 5.34 0 0 1-3.01.81zm7 1.2l4.77-22.25h-2l-1.93 9.2h-.06a4.22 4.22 0 0 0-1.93-2.7 6.59 6.59 0 0 0-3.3-.79 7.16 7.16 0 0 0-3.65.93 9.4 9.4 0 0 0-2.77 2.43 11.06 11.06 0 0 0-1.76 3.36 11.94 11.94 0 0 0-.61 3.71 7.12 7.12 0 0 0 1.51 4.75 5.68 5.68 0 0 0 4.6 1.79 6.31 6.31 0 0 0 3.47-.87 8.08 8.08 0 0 0 2.38-2.46h.06l-.72 2.9zM329.67 39h12.6q.1-.72.12-1.4.03-.68 0-1.37a7.66 7.66 0 0 0-.41-2.55 5.39 5.39 0 0 0-1.2-2 5.45 5.45 0 0 0-1.92-1.28 6.88 6.88 0 0 0-2.55-.4 7.63 7.63 0 0 0-3.68.87 8.65 8.65 0 0 0-2.74 2.31 10.24 10.24 0 0 0-1.7 3.26 12.38 12.38 0 0 0-.58 3.75 7.07 7.07 0 0 0 1.67 5 6.31 6.31 0 0 0 4.88 1.81 7.35 7.35 0 0 0 4.7-1.43 8.05 8.05 0 0 0 2.62-4.17h-2a5.88 5.88 0 0 1-1.93 2.88 5.62 5.62 0 0 1-5.41.72 4 4 0 0 1-1.46-1.06 4.33 4.33 0 0 1-.86-1.6 7 7 0 0 1-.28-2 7.62 7.62 0 0 1 .14-1.34zm10.75-1.65h-10.5a8.88 8.88 0 0 1 .78-2.15 7.26 7.26 0 0 1 1.3-1.83 6.49 6.49 0 0 1 1.81-1.28 5.11 5.11 0 0 1 2.23-.48 4.26 4.26 0 0 1 3.22 1.22 4.52 4.52 0 0 1 1.17 3.27q0 .3 0 .6 0 .3-.01.63zm-20.35-6.92l-3.43 16.07h1.93l1.8-8.4a11 11 0 0 1 .73-2.18 7.29 7.29 0 0 1 1.23-1.91 5.82 5.82 0 0 1 1.76-1.32 5.49 5.49 0 0 1 2.32-.53h1.12l.44-2a1 1 0 0 0-.25 0h-.8a5.48 5.48 0 0 0-3.52 1.09 9 9 0 0 0-2.31 2.84h-.1l.8-3.7zM302.3 39h12.6q.1-.72.12-1.4.03-.68 0-1.37a7.67 7.67 0 0 0-.4-2.55 5.39 5.39 0 0 0-1.2-2 5.44 5.44 0 0 0-1.92-1.28 6.88 6.88 0 0 0-2.59-.45 7.63 7.63 0 0 0-3.68.87 8.65 8.65 0 0 0-2.74 2.31 10.24 10.24 0 0 0-1.7 3.26 12.38 12.38 0 0 0-.58 3.75 7.07 7.07 0 0 0 1.67 5 6.31 6.31 0 0 0 4.88 1.81 7.34 7.34 0 0 0 4.7-1.43 8 8 0 0 0 2.62-4.17h-2a5.88 5.88 0 0 1-1.93 2.88 5.62 5.62 0 0 1-5.41.72 4 4 0 0 1-1.46-1.06 4.33 4.33 0 0 1-.86-1.6 7 7 0 0 1-.28-2 7.62 7.62 0 0 1 .17-1.29zm10.7-1.66h-10.5a8.88 8.88 0 0 1 .78-2.15 7.26 7.26 0 0 1 1.32-1.82 6.48 6.48 0 0 1 1.81-1.28 5.11 5.11 0 0 1 2.23-.48 4.26 4.26 0 0 1 3.22 1.22 4.52 4.52 0 0 1 1.17 3.27q0 .3 0 .6 0 .3-.03.63zm-36.37-6.92l1.87 16.08h2.15L287.3 33h.06l1.15 13.5h2.12l8.44-16.08H297L290.17 44h-.06L289 30.42h-2.3l-6.64 13.7H280l-1.28-13.7zm-9.77-.42a8.11 8.11 0 0 0-3.82.87 8.83 8.83 0 0 0-2.82 2.31 10.06 10.06 0 0 0-1.74 3.3 12.62 12.62 0 0 0-.59 3.83 6.93 6.93 0 0 0 1.65 4.86 6.13 6.13 0 0 0 4.77 1.81 8.08 8.08 0 0 0 3.91-.9 8.36 8.36 0 0 0 2.77-2.4 10.74 10.74 0 0 0 1.67-3.43 14.12 14.12 0 0 0 .56-4 7.13 7.13 0 0 0-.47-2.66 5.45 5.45 0 0 0-3.32-3.21 7.54 7.54 0 0 0-2.57-.38zm-2.18 15.36a4.43 4.43 0 0 1-3.68-1.49 5.79 5.79 0 0 1-1.18-3.79 10.49 10.49 0 0 1 .44-2.91 9.48 9.48 0 0 1 1.28-2.74 7.18 7.18 0 0 1 2.09-2 5.22 5.22 0 0 1 2.87-.79 4.39 4.39 0 0 1 3.55 1.4 5.46 5.46 0 0 1 1.18 3.65 11 11 0 0 1-.42 2.93 10 10 0 0 1-1.25 2.8 7.22 7.22 0 0 1-2.06 2.1 5 5 0 0 1-2.82.79zm-22.88-21.1L237 46.5h2.12l2.06-9.5H249a9.42 9.42 0 0 0 3.08-.48 6.87 6.87 0 0 0 2.41-1.4 6.41 6.41 0 0 0 1.59-2.27 7.78 7.78 0 0 0 .58-3.07 5.67 5.67 0 0 0-.45-2.31A4.9 4.9 0 0 0 255 25.7a5.54 5.54 0 0 0-1.87-1.07 7.12 7.12 0 0 0-2.35-.37zm-.22 10.9l2-9.1h6.5a7.8 7.8 0 0 1 1.85.2 3.66 3.66 0 0 1 1.42.67 3.08 3.08 0 0 1 .92 1.23 4.79 4.79 0 0 1 .33 1.88 5.3 5.3 0 0 1-.42 2.17 4.55 4.55 0 0 1-1.17 1.6 5.17 5.17 0 0 1-1.74 1 6.57 6.57 0 0 1-2.15.34z"
                                                      className="N P"/>
                                            </clipPath>
                                        </defs>
                                        <g clip-path="url(#B)"
                                           transform="translate(0 -178)"
                                           className="O">
                                            <path d="M232 61h366v90H232z"
                                                  fill="#4a8cff"/>
                                        </g>
                                        <g transform="matrix(.156863 0 0 .156863 -.784314 -.627496)"
                                           className="O">
                                            <g clip-path="url(#C)">
                                                <path d="M0-1h214v214H0z"
                                                      fill="#e5e5e4"/>
                                            </g>
                                            <g clip-path="url(#D)">
                                                <path d="M2 1h210v210H2z"
                                                      fill="#fff"/>
                                            </g>
                                            <g clip-path="url(#E)">
                                                <path d="M10 9h194v194H10z"
                                                      fill="#4a8cff"/>
                                            </g>
                                            <g clip-path="url(#F)">
                                                <path d="M42 69h128v74H42z"
                                                      fill="#fff"/>
                                            </g>
                                        </g>
                                        <g clip-path="url(#G)"
                                           transform="translate(0 -178)"
                                           className="O">
                                            <path d="M232 19.25h180v38.17H232z"
                                                  fill="#90908f"/>
                                        </g>
                                    </svg>,
                                    link: '/externals/zoom'
                                },
                                {
                                    name: 'Lottie',
                                    icon: <svg width="25"
                                               height="25"
                                               viewBox="0 0 64 64"
                                               fill="none"
                                               xmlns="http://www.w3.org/2000/svg"
                                               className="mb-4 lg:mb-0">
                                        <path fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M3.41463 0C1.52878 0 0 1.52878 0 3.41463V60.5854C0 62.4712 1.52878 64 3.41463 64H60.5854C62.4712 64 64 62.4712 64 60.5854V3.41463C64 1.52878 62.4712 0 60.5854 0H3.41463ZM51.6245 16.2596C51.8955 14.426 50.6277 12.7187 48.7906 12.4472C42.0743 11.4548 35.751 17.3837 29.0233 30.1941C23.7882 40.1623 19.0877 45.1638 15.9501 44.932C14.0975 44.7951 12.486 46.1847 12.3494 48.0337C12.2128 49.8823 13.6019 51.493 15.4542 51.6298C22.0589 52.1178 28.294 46.0404 34.9775 33.314C40.1641 23.4382 44.7874 18.6449 47.8067 19.0911C49.6445 19.3626 51.3534 18.0939 51.6245 16.2596Z"
                                              fill="#46646B"></path>
                                    </svg>,
                                    link: '/externals/animations/lottie'
                                },
                                {
                                    name: 'Odometer',
                                    icon: <SpeedOutlined/>,
                                    link: '/externals/animations/odometer'
                                },
                                {
                                    name: 'Scroll Frames',
                                    icon: <MouseOutlined/>,
                                    link: '/externals/animations/scroll-effect'
                                },
                            ].map((text) => (
                                <ListItemButton component="a"
                                                href={text.link}
                                                key={text.name}>
                                    <ListItemIcon>
                                        {text.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={text.name}/>
                                </ListItemButton>
                            ))}
                        </List>
                    </Collapse>
                    <Divider/>
                </Drawer>
                <Box component="main"
                     sx={{
                         flexGrow: 1,
                         p       : 3
                     }}>
                    <DrawerHeader/>
                    <Component {...pageProps} />
                </Box>
            </Box>
        </Provider>
    );
}
