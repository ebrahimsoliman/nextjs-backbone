import {
    Col,
    Image,
    Row
} from "antd";

function MeetupDetail(props) {

    return (
        <Row>
            <Col span={16}>
                <div>
                    <Image src={props.image}
                           alt={props.title}/>
                </div>
                <div>
                    <h3>{props.title}</h3>
                    <p>{props.address}</p>
                    <p>{props.description}</p>
                </div>
            </Col>
        </Row>
    );
}

export default MeetupDetail;
