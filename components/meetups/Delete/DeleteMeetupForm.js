import {
    Button,
    Form,
    Input
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
    useEffect(() => {
        onFill()

    })
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
    const onReset    = () => {
        form.resetFields();
    };
    const onFill     = () => {
        form.setFieldsValue({
                                title      : meetup.attributes.title,
                                image      : meetup.attributes.image,
                                address    : meetup.attributes.address,
                                description: meetup.attributes.description,
                            });
    };
    return (
        <Form form={form}
              name="basic"
              labelCol={{span: 4}}
              wrapperCol={{span: 16}}
              initialValues={{remember: true}}
              onFinish={submitHandler}
              autoComplete="off">
            <Form.Item
                label="Meetup Title"
                name="title"
                rules={[
                    {
                        required: true,
                        message : 'Please input your username!'
                    }
                ]}
            >
                <Input/>
            </Form.Item> <Form.Item
            label="Meetup Image"
            name="image"
            rules={[
                {
                    required: true,
                },
                {
                    type       : 'url',
                    warningOnly: true,
                },
                {
                    type: 'string',
                    min : 6,
                },
            ]}
        >
            <Input/>
        </Form.Item>
            <Form.Item
                label="address"
                name="address"
                rules={[
                    {
                        required: true,
                        message : 'Please input your username!'
                    }
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item name={'description'}
                       label="Description">
                <Input.TextArea/>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary"
                        htmlType="submit">
                    Submit
                </Button>
                <Button htmlType="button"
                        onClick={onReset}>
                    Reset
                </Button>

            </Form.Item>

            <div>

            </div>
        </Form>
    );
}

export default DeleteMeetupForm;
