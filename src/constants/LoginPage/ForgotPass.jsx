import React, { Component } from "react";
import { Button, Form, Input, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./Logingpage.scss";

export class ForgotPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal2Open: this.props.modal2Open,
      isUserExist: false,
      countdown: 180, // 3 minutes countdown in seconds
      username: '',
      password: '',
      confirmPassword: '',
    };
    this.timer = null;
  }

  componentDidMount() {
    this.setState({ modal2Open: this.props.modal2Open });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleClose = () => {
    this.setState({ isUserExist: true }, this.startCountdown);
  };

  startCountdown = () => {
    this.timer = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.countdown <= 0) {
          clearInterval(this.timer);
          return { countdown: 0 };
        }
        return { countdown: prevState.countdown - 1 };
      });
    }, 1000);
  };

  formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isUserExist, countdown, username, password, confirmPassword } = this.state;
    const isGenerateOtpDisabled = !username || !password || !confirmPassword;

    return (
      <>
        {isUserExist === false ? (
          <div>
            <Form
              layout="vertical"
              name="confim password"
              initialValues={{
                remember: true,
              }}
              style={{
                maxWidth: 350,
              }}
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
                <Input
                  name="username"
                  value={username}
                  onChange={this.handleInputChange}
                  prefix={<UserOutlined />}
                  placeholder="Username or phone number"
                />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  name="password"
                  value={password}
                  onChange={this.handleInputChange}
                  prefix={<LockOutlined />}
                  placeholder="Enter password"
                />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The new password that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={this.handleInputChange}
                  prefix={<LockOutlined />}
                  placeholder="Enter Confirm password"
                />
              </Form.Item>
            </Form>
            <Space style={{ display: "flex", justifyContent: "end" }}>
              <Button key="back">Reset</Button>,
              <Button key="submit" type="primary" onClick={this.handleClose} disabled={isGenerateOtpDisabled}>
                Generate OTP
              </Button>
            </Space>
          </div>
        ) : (
          <div>
            <Form
              layout="vertical"
              name="confirm password change"
              initialValues={{
                remember: true,
              }}
              style={{
                maxWidth: 350,
              }}
            >
              <Form.Item
                label="Enter OTP"
                hasFeedback
                validateStatus="success"
                name="otp"
                rules={[
                  {
                    required: true,
                    message: "Please enter a value!",
                  },
                  {
                    pattern: /^\d+$/,
                    message: "Only numbers are allowed!",
                  },
                ]}
              >
                <Input.OTP />
              </Form.Item>
              <span style={{ display: "flex", justifyContent: "end" }}>
                <p style={{ fontSize: "14px", color: "red" }}>
                  Time Remaining: {this.formatTime(countdown)}
                </p>
              </span>

              <p>
                We’ve sent a One-Time Password (OTP) to your registered mobile
                number/email. Please enter the 6-digit code below to verify your
                identity.
              </p>

              <Space
                className="mt-5"
                style={{ display: "flex", justifyContent: "end" }}
              >
                <Button key="submit" type="primary">
                  Confirm
                </Button>
              </Space>
            </Form>
          </div>
        )}
      </>
    );
  }
}

export default ForgotPass;