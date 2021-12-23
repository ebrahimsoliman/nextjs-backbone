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
import {login}            from "../../store/modules/authentication/actions";
import {
    EyeInvisibleOutlined,
    EyeTwoTone
}                         from "@ant-design/icons";

function Logincom() {
    const user = useSelector((state => state.authenticationReducer.user))
    const [form]   = Form.useForm();
    const router   = useRouter()
    const dispatch = useDispatch()
    useEffect(() => {
        if (user) {
            router.push('/')
        }
    })
    function submitHandler(values) {
        dispatch(login({
                           identifier: values.email,
                           password  : values.password
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
                                email   : "ebrahimahmed97090@gmail.com",
                                password: "Aa123456",
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
                            message    : 'Please Enter Email Address Or Username'
                        }
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message : 'Please input your password'
                        }
                    ]}
                >
                    <Input.Password
                        placeholder="input password"
                        iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                    />
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

export default Logincom;
