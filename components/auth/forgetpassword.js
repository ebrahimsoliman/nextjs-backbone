import React, {useEffect} from 'react';
import {
    Button,
    Form,
    Input
}                         from "antd";
import {useRouter}        from "next/router";
import {
    useDispatch,
    useSelector
}                         from "react-redux";
import {forgetPassword}   from "../../store/modules/authentication/actions";

function Forgetpassword() {
    const user = useSelector((state => state.authenticationReducer.user))

    useEffect(() => {
        if (user) {
            router.push('/')
        }
    })

    const [form]   = Form.useForm();
    const router   = useRouter()
    const dispatch = useDispatch()

    function submitHandler(values) {
        dispatch(forgetPassword({
                                    email: values
                                        .email
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
                                email: "ebrahimahmed97090@gmail.com",
                            });
    };
    if (!user) {
        return (
            <Form form={form}
                  name="basic"
                  labelCol={{span: 4}}
                  wrapperCol={{span: 16}}
                  initialValues={{remember: true}}
                  onFinish={submitHandler}
                  autoComplete="off">
                <Form.Item
                    label="Email Or Username"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message : 'Please Enter Email Address Or Username'
                        }
                    ]}
                >
                    <Input/>
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
    if (user) {
        return (<p>nothing to do here</p>)
    }
}

export default Forgetpassword;
