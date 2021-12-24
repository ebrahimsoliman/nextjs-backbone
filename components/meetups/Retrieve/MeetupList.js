import MeetupItem from '../Retrieve/MeetupItem';

import {
    useDispatch,
    useSelector
}                        from "react-redux";
import {
    useEffect,
    useState
}                        from "react";
import {retrieveMeetups} from "../../../store/modules/meetups/actions";
import {
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Pagination,
    Select
}                        from "@mui/material";

function UpdateMeetupList() {
    const dispatch                = useDispatch()
    let [lcurrent, setLcurrent]   = useState(1)
    let [lpageSize, setLpageSize] = useState(10)
    let [lsearch, setLsearch]     = useState('')
    let [lsort, setLsort]         = useState('title')
    let [lorder, setLorder]       = useState(':asc');
    useEffect(() => {
                  retr()
              },
              [])

    function retr() {
        dispatch(retrieveMeetups({
                                     pagination: {
                                         page    : lcurrent,
                                         pageSize: lpageSize
                                     },
                                     filters   : {
                                         title: {
                                             $containsi: lsearch
                                         }
                                     },
                                     sort      : lsort + lorder
                                 }))
    }
    function handleSortMenuClick(e) {
        setLsort(e.key)
        retr();
    }
    function onShowPageSizeChange(ele,
                                  current) {
        setLcurrent(current)
        retr()
    }
    function handleButtonClick(e) {
        if (lorder === ':asc') {
            setLorder(':desc')
            retr();
        }
        else {
            setLorder(':asc')
            retr();
        }

    }
    const onSearch        = value => {
        setLsearch(value)
        retr()
    }
    const [age, setAge]   = useState('');
    const [open, setOpen] = useState(false);
    const handleSizeChange    = (event) => {
        setLpageSize(event.target.value)
        setAge(event.target.value);
        retr();
    };
    const handleClose     = () => {
        setOpen(false);
    };
    const handleOpen      = () => {
        setOpen(true);
    };
    /*  const menu     = (<Menu onClick={handleSortMenuClick}>
     <Menu.Item key="title"
     icon={<UserOutlined/>}>
     Title
     </Menu.Item>
     <Menu.Item key="address"
     icon={<UserOutlined/>}>
     Address
     </Menu.Item>
     </Menu>);*/
    const meetups = useSelector((state => state.meetupsReducer))
    return (
        <Grid container
              spacing={2}>
            {/*  <Grid xs={10}
             item> <Search placeholder="input search text"
             allowClear
             onSearch={onSearch}/>
             </Grid>*/}
            {/* <Grid xs={2}
             item>
             <Dropdown.Button onClick={handleButtonClick}
             overlay={menu}>
             Sort By
             </Dropdown.Button>
             </Grid>*/}
            {meetups.meetups.map((meetup) => (
                <Grid xs={3}
                      item
                      key={meetup.id}
                ><MeetupItem
                    id={meetup.id}
                    image={meetup.attributes.image}
                    title={meetup.attributes.title}
                    address={meetup.attributes.address}

                /></Grid>
            ))}

            <Grid xs={10}
                  item>
                <Pagination variant="outlined"
                            color="primary"
                            page={lcurrent}
                            count={Math.ceil(meetups.meta.pagination.total / lpageSize)}
                            onChange={onShowPageSizeChange}/>
            </Grid>
            <Grid xs={2}>
                <FormControl sx={{
                    m       : 1,
                    minWidth: 120
                }}>
                    <InputLabel id="demo-controlled-open-select-label">Page Size</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={age}
                        label="Page Size"
                        onChange={handleSizeChange}>
                        {Array.from(Array(10)
                                        .keys())
                              .map(e => {
                                  return <MenuItem value={e * 10}>{e * 10}</MenuItem>
                              })}
                    </Select>
                </FormControl>

            </Grid>
        </Grid>
    );
}

export default UpdateMeetupList;
