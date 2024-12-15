import React, { Component } from "react";
import { Button, Form, Input } from "antd";
import {
  UserOutlined,
} from "@ant-design/icons";
import "./Logingpage.scss";

export class ForgotPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal2Open: this.props.modal2Open,
    };
  }
  componentDidMount() {
    this.setState({ modal2Open: this.props.modal2Open });
  }

  render() {
    return (
      <>
        <div>
          <Form
            layout="vertical"
            name="login"
            initialValues={{
              remember: true,
            }}
            style={{
              maxWidth: 350,
            }}
          // onFinish={onFinish}
          >
            <Form.Item
              label="Username or Phone Number"
              name="username or phone number"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username or phone number" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
            >
              <Input.Password prefix={<UserOutlined />} placeholder="Enter password" />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The new password that you entered do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Enter Confirm password" />
            </Form.Item>

            <Form.Item label="Success" hasFeedback validateStatus="success">
              <Input.OTP type="tel" placeholder="Enter OTP" />
            </Form.Item>
          </Form>
        </div>
      </>
    );
  }
}

export default ForgotPass;
