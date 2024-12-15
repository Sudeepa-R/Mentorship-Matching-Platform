import React, { Component } from "react";
import { Button, Form, Input, Flex, Space } from "antd";
import {
  LockOutlined,
  UserOutlined,
  LoginOutlined,
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
        <p>Enter your email address and phone number to reset your password!</p>
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
        <Input.Password />
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
        <Input.Password />
      </Form.Item>
      <Form.Item >
        <Space>
          <Button type="primary" htmlType="submit">
            Generate OTP
          </Button>
          <Button htmlType="button" >
            Reset
          </Button>
          
        </Space>
      </Form.Item>
            
            {/* <Form.Item>
              <Button
                block
                type="primary"
                htmlType="submit"
                style={{ backgroundColor: "#537786" }}
              >
                <strong>
                  {" "}
                  <span>
                    <LoginOutlined />
                  </span>{" "}
                  Login
                </strong>
              </Button>
            </Form.Item> */}
          </Form>
        </div>
      </>
    );
  }
}

export default ForgotPass;
