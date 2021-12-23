import MeetupItem from '../Retrieve/MeetupItem';
import {
    Col,
    Dropdown,
    Input,
    Menu,
    Pagination,
    Row
}                 from "antd";

import {
    useDispatch,
    useSelector
}                     from "react-redux";
import {
    useEffect,
    useState
}                     from "react";
import {
    retrieveMeetups,
    selectMeetup
}                     from "../../../store/modules/meetups/actions";
import {UserOutlined} from "@ant-design/icons";

function UpdateMeetupList() {
    const dispatch                = useDispatch()
    const {Search}                = Input;
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

    function onShowPageSizeChange(current,
                                  pageSize) {
        setLpageSize(pageSize)
        setLcurrent(current)
        retr()
    }

    function selects(index,
                     item) {
        setSelected(index)
        dispatch(selectMeetup(item))
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

    const onSearch                = value => {

        setLsearch(value)
        retr()
    }
    const menu                    = (<Menu onClick={handleSortMenuClick}>
        <Menu.Item key="title"
                   icon={<UserOutlined/>}>
            Title
        </Menu.Item>
        <Menu.Item key="address"
                   icon={<UserOutlined/>}>
            Address
        </Menu.Item>
    </Menu>);
    const meetups                 = useSelector((state => state.meetupsReducer))
    const [selected, setSelected] = useState(0);
    return (
        <Row gutter={[
            24,
            24
        ]}>
            <Col span={20}> <Search placeholder="input search text"
                                    allowClear
                                    onSearch={onSearch}/></Col>
            <Col span={4}>
                <Dropdown.Button onClick={handleButtonClick}
                                 overlay={menu}>
                    Sort By
                </Dropdown.Button>
            </Col>
            {meetups.meetups.map((meetup,
                                  index) => (
                <Col md={12}
                     xs={24}
                     onClick={() => selects(index,
                                            meetup)}
                     className={`gutter-row banner ${selected === index ? "gutter-row update-active" : ""}`}
                     key={meetup.id}
                ><MeetupItem

                    id={meetup.id}
                    image={meetup.attributes.image}
                    title={meetup.attributes.title}
                    address={meetup.attributes.address}

                /></Col>
            ))}

            <Col span={24}><Pagination defaultCurrent={1}
                                       defaultPageSize={10}
                                       showSizeChanger
                                       current={lcurrent}
                                       hideOnSinglePage={true}
                                       showLessItems={true}
                                       showQuickJumper={true}
                                       onShowSizeChange={onShowPageSizeChange}
                                       onChange={onShowPageSizeChange}
                                       total={meetups.meta.pagination.total}/></Col>
        </Row>
    );
}

export default UpdateMeetupList;
