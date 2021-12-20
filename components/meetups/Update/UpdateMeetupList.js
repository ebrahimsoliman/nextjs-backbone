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

function UpdateMeetupList(props) {
    const dispatch = useDispatch()
    const meetups  = useSelector((state => state.meetupsReducer.meetups))
    const [selected, setSelected] = useState(0);

    function selects(index,
                     item) {
        setSelected(index)
        dispatch(selectMeetup(item))
    }

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
                <Col md={12} xs={24}
                     onClick={() => selects(index,
                                            meetup)}
                     className={`gutter-row banner ${selected === index ? "gutter-row update-active" : ""}`}
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

export default UpdateMeetupList;
