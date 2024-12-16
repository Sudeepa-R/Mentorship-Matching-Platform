import React, { Component } from "react";
import { Button, Form, Input, Flex } from "antd";
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
              label="Username"
              name="username"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              label="Phone number"
              name="Phone number"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Phone number"
              />
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
