import MeetupItem        from './MeetupItem';
import {
    Col,
    Row
}                        from "antd";
import {
    useDispatch,
    useSelector
}                        from "react-redux";
import {retrieveMeetups} from "../../../store/modules/meetups/actions";

function MeetupList() {
    const dispatch = useDispatch()
    dispatch(retrieveMeetups)
    const meetups = useSelector((state => state.meetupsReducer.meetups))

    return (
        <Row gutter={[
            24,
            24
        ]}>
            {meetups.map((meetup) => (
                <Col md={12}
                     xs={24}
                     key={meetup.id}
                     className="gutter-row"><MeetupItem
                    id={meetup.id}
                    image={meetup.attributes.image}
                    title={meetup.attributes.title}
                    address={meetup.attributes.address}
                /></Col>
            ))}
        </Row>

    );
}

export default MeetupList;
