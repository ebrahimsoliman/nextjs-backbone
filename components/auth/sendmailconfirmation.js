import React from 'react';
import {
    Button,
    Form,
    Input
} from "antd";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {createMeetup} from "../../store/modules/meetups/actions";

function Sendmailconfirmation() {
    const [form]   = Form.useForm();
    const router   = useRouter()
    const dispatch = useDispatch()

    function submitHandler(values) {
        dispatch(createMeetup({
                                  title      : values.title,
                                  image      : values.image,
                                  address    : values.address,
                                  description: values.description,
                              }))
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
                                title      : "Blueholding meetup",
                                image      : "https://source.unsplash.com/user/c_v_r/1600x900",
                                address    : "113 Galal eldesouky",
                                description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                 and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
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
                        required: false,
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
                <Button type="link"
                        htmlType="button"
                        onClick={onFill}>
                    Fill form
                </Button>
            </Form.Item>

            <div>

            </div>
        </Form>
    );
}

export default Sendmailconfirmation;
