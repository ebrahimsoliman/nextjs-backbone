import MeetupItem from './MeetupItem';
import {
    Col,
    Row
}                 from "antd";

function MeetupList(props) {
    return (
        <Row gutter={[
            24,
            24
        ]}>
            {props.meetups.map((meetup) => (
                <Col span={12}
                     className="gutter-row"><MeetupItem
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

export default MeetupList;
