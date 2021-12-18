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
import {resetPassword}    from "../../store/modules/authentication/actions";
import {
    EyeInvisibleOutlined,
    EyeTwoTone
}                         from "@ant-design/icons";

function ResetPassword() {
    const user   = useSelector((state => state.authenticationReducer.user))
    const router = useRouter()


    useEffect(() => {
        if (user) {
            router.push('/')
        }
    })

    const [form]   = Form.useForm();
    const dispatch = useDispatch()

    function submitHandler(values) {
        dispatch(resetPassword({
                                   code                : router.query.code,
                                   password            : values.password,
                                   passwordConfirmation: values.confirmpassword
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
                                password       : "Aa654321",
                                confirmpassword: "Aa654321"
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
                </Form.Item><Form.Item
                label="Confirm Password"
                name="confirmpassword"
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

export default ResetPassword;
