import React, { Component } from "react";
import { Button, Form, Input, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { showMessage } from "../../constants/Toaster/toaster";
>>>>>>> be8bcddf2e6a08e445d8894e8cfad51e26efb244
import "./Logingpage.scss";

export class ForgotPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal2Open: this.props.modal2Open,
<<<<<<< HEAD
=======
      isUserExist: false,
      countdown: 180,
      username: '',
      password: '',
      confirmPassword: '',
      regexError: '',
    };
    this.timer = null;
  }
  componentDidMount() {
    this.setState({ modal2Open: this.props.modal2Open });
  }

<<<<<<< HEAD
  render() {
=======
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
    this.setState({ [e.target.name]: e.target.value, regexError: '' });
  };

  handleGenerateOtp = () => {
    const { username, password, confirmPassword } = this.state;
    if (!username || !password || !confirmPassword) {
      showMessage('error', 'Please fill in all fields before generating OTP!');
    } else if (password !== confirmPassword) {
      showMessage('error', 'Passwords do not match!');
    } else {
      const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordPattern.test(password)) {
        this.setState({ regexError: 'Password must be at least 8 characters long, contain one uppercase letter, one number, and one special character!' });
      } else {
        this.handleClose();
      }
    }
  };

  render() {
    const { isUserExist, countdown, username, password, confirmPassword, regexError } = this.state;

>>>>>>> be8bcddf2e6a08e445d8894e8cfad51e26efb244
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
<<<<<<< HEAD
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
=======
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
              {regexError && <p style={{ color: 'red' }}>{regexError}</p>}
            </Form>
            <Space style={{ display: "flex", justifyContent: "end" }}>
              <Button key="back">Reset</Button>,
              <Button key="submit" type="primary" onClick={this.handleGenerateOtp}>
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
>>>>>>> be8bcddf2e6a08e445d8894e8cfad51e26efb244
      </>
    );
  }
}

export default ForgotPass;