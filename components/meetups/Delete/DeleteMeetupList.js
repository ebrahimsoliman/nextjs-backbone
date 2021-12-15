import MeetupItem from '../Retrieve/MeetupItem';
import {
    Button,
    Col,
    Row
}                 from "antd";

import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    useEffect,
    useState
}                 from "react";
import {
    retrieveMeetups,
    selectMeetup
}                 from "../../../store/modules/meetups/actions";

function DeleteMeetupList(props) {
    const dispatch = useDispatch()
    const meetups  = useSelector((state => state.meetupsReducer.meetups))

    function selects(index,
                     item) {
        setSelected(index)
        dispatch(selectMeetup(item))
    }

    const [selected, setSelected] = useState(0);
    console.log(selected)
    useEffect(() => {
                  dispatch(retrieveMeetups())
              },
              []);
    return (
        <Row gutter={[
            24,
            24
        ]}>
            {meetups.map((meetup,
                          index) => (
                <Col span={12}
                     onClick={() => selects(index,
                                            meetup)}
                     className={`gutter-row banner ${selected === index ? "gutter-row delete-active" : ""}`}
                ><MeetupItem
                    key={meetup.id}
                    id={meetup.id}
                    image={meetup.attributes.image}
                    title={meetup.attributes.title}
                    address={meetup.attributes.address}

                /></Col>
            ))}


        </Row>


    );
}

export default DeleteMeetupList;
