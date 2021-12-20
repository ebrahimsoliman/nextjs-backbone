import {
    Button,
    Form
}                     from 'antd';
import {
    useDispatch,
    useSelector
}                     from "react-redux";
import {useEffect}    from "react";
import {deleteMeetup} from "../../../store/modules/meetups/actions";

function DeleteMeetupForm() {

    const meetup = useSelector((state => state.meetupsReducer.meetup))

    const [form] = Form.useForm();

    const dispatch = useDispatch()

    function submitHandler() {
        dispatch(deleteMeetup(meetup.id))
    }

    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span  : 16
        },
    };

    return (
        <Form form={form}
              name="basic"
              style={{marginTop: 20}}
              labelCol={{span: 4}}
              wrapperCol={{span: 16}}
              initialValues={{remember: true}}
              onFinish={submitHandler}
              autoComplete="off">

            <Form.Item {...tailLayout}>
                <Button type="primary"
                        htmlType="submit">
                    Submit
                </Button>


            </Form.Item>

            <div>

            </div>
        </Form>
    );
}

export default DeleteMeetupForm;
