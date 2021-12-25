import MeetupItem from '../Retrieve/MeetupItem';

import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    useEffect,
    useState
} from "react";
import {
    retrieveMeetups,
    selectMeetup
} from "../../../store/modules/meetups/actions";
import {
    Box,
    Button,
    ButtonGroup,
    Collapse,
    FormControl,
    Grid,
    InputLabel,
    List,
    ListItemButton,
    ListItemText,
    MenuItem,
    Pagination,
    Select,
    TextField
} from "@mui/material";
import {
    ArrowDropDownOutlined,
    ArrowDropUpOutlined
} from "@mui/icons-material";

function DeleteMeetupList() {
    const dispatch                              = useDispatch()
    let [lcurrent, setLcurrent]                 = useState(1)
    let [lpageSize, setLpageSize]               = useState(10)
    let [lsearch, setLsearch]                   = useState('')
    let [lsort, setLsort]                       = useState('title')
    let [lorder, setLorder]                     = useState(':asc');
    let [openPageSizeList, setOpenPageSizeList] = useState(false);
    let [openSortList, setOpenSortList]         = useState(false);
    let [selected, setSelected] = useState(0);

    useEffect(() => {
                  retr()
              },
              [
                  lpageSize,
                  lcurrent,
                  lsearch,
                  lsort,
                  lorder
              ])

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

    function ChangeSortOrder() {
        lorder === ':asc' ? setLorder(':desc') : setLorder(':asc')
    }


    const meetups = useSelector((state => state.meetupsReducer))



    function selects(index,
                     item) {
        setSelected(index)
        dispatch(selectMeetup(item))

    }

    return (

        <Box>
            <Box sx={{p: 1}}><Grid
                justifyContent="space-between"
                container>
                <Grid xs={10}
                      item>
                    <TextField fullWidth
                               id="outlined-basic"
                               label="Search"
                               variant="outlined"
                               onChange={(event => {
                                   setLsearch(event.target.value)
                               })}/>
                </Grid>
                <Grid item>
                    <ButtonGroup style={{height: '100%'}}

                                 variant="contained"
                                 aria-label="outlined primary button group">
                        <Button fullWidth
                                style={{textTransform: 'capitalize'}}
                                onClick={() => {
                                    setOpenSortList(!openSortList)
                                }}>{lsort} </Button>
                        <Button
                            onClick={ChangeSortOrder}>{lorder === ':asc'
                                                       &&
                                                       <ArrowDropUpOutlined/>}
                            {lorder === ':desc' &&
                             <ArrowDropDownOutlined/>}
                        </Button>
                    </ButtonGroup>
                    <Box sx={{
                        position: "absolute",
                        zIndex  : '100'
                    }}><Collapse mountOnEnter
                                 in={openSortList}>
                        <List sx={{
                            width  : '100%',
                            bgcolor: 'background.paper'
                        }}>
                            <ListItemButton onClick={() => {
                                setLsort('title');
                                setOpenSortList(false)
                            }}>
                                <ListItemText primary="Title"/>
                            </ListItemButton>
                            <ListItemButton onClick={() => {
                                setLsort('address')
                                setOpenSortList(false)
                            }}>
                                <ListItemText primary="Address"/>
                            </ListItemButton>
                        </List>
                    </Collapse></Box>
                </Grid>
            </Grid></Box>
            <Box sx={{p: 1}}><Grid container
                                   spacing={2}>

                {meetups.meetups.map((meetup,
                                      index) => (
                    <Grid xs={3}
                          item
                          key={meetup.id}
                          onClick={() => selects(index,
                                                 meetup)}
                    ><MeetupItem
                        id={meetup.id}

                        className={`${selected === index ? "delete-active" : ""}`}
                        key={meetup.id}
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
                                onChange={(e,
                                           c) => {
                                    setLcurrent(c)
                                }}/>
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
                            open={openPageSizeList}
                            onClose={() => {
                                setOpenPageSizeList(false)
                            }}
                            onOpen={() => {
                                setOpenPageSizeList(true)
                            }}
                            value={lpageSize}
                            label="Page Size"
                            onChange={(event) => {
                                setLpageSize(event.target.value)
                            }}>
                            {Array.from(Array(5)
                                            .keys())
                                  .map(e => {
                                      return <MenuItem value={e * 10}>{e * 10}</MenuItem>
                                  })}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid></Box></Box>
    );
}

export default DeleteMeetupList;
