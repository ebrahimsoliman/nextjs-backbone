import {useRouter} from "next/router";
import {
    Button,
    Card,
    Image
}                  from 'antd';

const {Meta} = Card;

function MeetupItem(props) {
    const router = useRouter();

    function showDetailsHandler() {
        router.push('meetups/' + props.id);
    }

    return (


        <div>
            <Card title={props.title}
                  hoverable
                  cover={<Image style={{width: '100%'}}
                                alt={props.title}
                                src={props.image}/>}
            >
                <Meta title={props.title}
                      description={props.address}/>

                <div>
                    <Button type="primary"
                            onClick={showDetailsHandler}>Show Details</Button>
                </div>
            </Card></div>


    );
}

export default MeetupItem;
