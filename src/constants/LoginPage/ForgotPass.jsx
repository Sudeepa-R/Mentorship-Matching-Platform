import React, { Component } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Button, Form, Input, Flex } from "antd";
import {
  LockOutlined,
  UserOutlined,
  LoginOutlined,
} from "@ant-design/icons";
=======
=======
>>>>>>> be8bcddf2e6a08e445d8894e8cfad51e26efb244
=======
>>>>>>> be8bcddf2e6a08e445d8894e8cfad51e26efb244
import { Button, Form, Input, Space, message, notification } from "antd";
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
      countdown: 120,
      otp: Array(6).fill(""),
      username: "",
      password: "",
      confirmPassword: "",
      regexError: "",
      otpError: "",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> be8bcddf2e6a08e445d8894e8cfad51e26efb244
=======
>>>>>>> be8bcddf2e6a08e445d8894e8cfad51e26efb244
=======
>>>>>>> be8bcddf2e6a08e445d8894e8cfad51e26efb244
    };
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
    this.setState({ isUserExist: true }, () => {
      this.startCountdown();
      this.showNotification(
        "OTP Generated",
        "An OTP has been sent to your registered mobile number/email."
      );
    });
  };

  startCountdown = () => {
    this.timer = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.countdown <= 0) {
          clearInterval(this.timer);
          this.showNotification(
            "Error",
            "The OTP has expired. Please generate a new one.",
            "error"
          );
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
    this.setState({ [e.target.name]: e.target.value, regexError: "" });
  };

  handleGenerateOtp = () => {
    const { username, password, confirmPassword } = this.state;
    if (!username || !password || !confirmPassword) {
      showMessage("error", "Please fill in all fields before generating OTP!");
    } else if (password !== confirmPassword) {
      showMessage("error", "Passwords do not match!");
    } else {
      const passwordPattern =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordPattern.test(password)) {
        this.setState({
          regexError:
            "Password must be at least 8 characters long, contain one uppercase letter, one number, and one special character!",
        });
      } else {
        this.handleClose();
      }
    }
  };

  handleOtpChange = (value, index) => {
    const { otp } = this.state;
    const updatedOtp = [...otp];
    const digit = value.slice(-1);
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

    if (/^\d$/.test(digit)) {
      updatedOtp[index] = digit;
      this.setState({ otp: updatedOtp, otpError: "" });

      if (digit && index < otp.length - 1) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    } else {
      this.setState({ otpError: "Only numbers are allowed!" });
    }
  };

  handleBackspace = (index) => {
    const { otp } = this.state;
    if (index > 0 && !otp[index]) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  handleConfirm = () => {
    const { otp } = this.state;
    if (otp.some((digit) => digit === "")) {
      this.showNotification("Error", "Please fill all OTP boxes.", "error");
    } else {
      this.showNotification(
        "Success",
        "Password reset successfully. You can now log in with your new password."
      );
    }
  };

  showNotification = (title, description, type = "success") => {
    notification[type]({
      message: title,
      description,
      placement: "topRight",
    });
  };

  renderOtpInputs = () => {
    const { otp, otpError } = this.state;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {otp.map((digit, index) => (
            <Input
              key={index}
              id={`otp-${index}`}
              value={digit}
              maxLength={1}
              onChange={(e) => this.handleOtpChange(e.target.value, index)}
              onKeyDown={(e) => {
                if (e.key === "Backspace") this.handleBackspace(index);
              }}
              style={{
                width: "50px",
                height: "50px",
                textAlign: "center",
                margin: "0 5px",
                fontSize: "18px",
              }}
            />
          ))}
        </div>
        {otpError && (
          <p style={{ color: "red", marginTop: "5px", textAlign: "center" }}>
            {otpError}
          </p>
        )}
      </div>
    );
  };

  render() {
    const {
      isUserExist,
      countdown,
      username,
      password,
      confirmPassword,
      regexError,
    } = this.state;
>>>>>>> be8bcddf2e6a08e445d8894e8cfad51e26efb244

    if (/^\d$/.test(digit)) {
      updatedOtp[index] = digit;
      this.setState({ otp: updatedOtp, otpError: "" });

      if (digit && index < otp.length - 1) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    } else {
      this.setState({ otpError: "Only numbers are allowed!" });
    }
  };

  handleBackspace = (index) => {
    const { otp } = this.state;
    if (index > 0 && !otp[index]) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  handleConfirm = () => {
    const { otp } = this.state;
    if (otp.some((digit) => digit === "")) {
      this.showNotification("Error", "Please fill all OTP boxes.", "error");
    } else {
      this.showNotification(
        "Success",
        "Password reset successfully. You can now log in with your new password."
      );
    }
  };

  showNotification = (title, description, type = "success") => {
    notification[type]({
      message: title,
      description,
      placement: "topRight",
    });
  };

  renderOtpInputs = () => {
    const { otp, otpError } = this.state;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {otp.map((digit, index) => (
            <Input
              key={index}
              id={`otp-${index}`}
              value={digit}
              maxLength={1}
              onChange={(e) => this.handleOtpChange(e.target.value, index)}
              onKeyDown={(e) => {
                if (e.key === "Backspace") this.handleBackspace(index);
              }}
              style={{
                width: "50px",
                height: "50px",
                textAlign: "center",
                margin: "0 5px",
                fontSize: "18px",
              }}
            />
          ))}
        </div>
        {otpError && (
          <p style={{ color: "red", marginTop: "5px", textAlign: "center" }}>
            {otpError}
          </p>
        )}
      </div>
    );
  };

  render() {
    const {
      isUserExist,
      countdown,
      username,
      password,
      confirmPassword,
      regexError,
    } = this.state;
>>>>>>> be8bcddf2e6a08e445d8894e8cfad51e26efb244

    if (/^\d$/.test(digit)) {
      updatedOtp[index] = digit;
      this.setState({ otp: updatedOtp, otpError: "" });

      if (digit && index < otp.length - 1) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    } else {
      this.setState({ otpError: "Only numbers are allowed!" });
    }
  };

  handleBackspace = (index) => {
    const { otp } = this.state;
    if (index > 0 && !otp[index]) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  handleConfirm = () => {
    const { otp } = this.state;
    if (otp.some((digit) => digit === "")) {
      this.showNotification("Error", "Please fill all OTP boxes.", "error");
    } else {
      this.showNotification(
        "Success",
        "Password reset successfully. You can now log in with your new password."
      );
    }
  };

  showNotification = (title, description, type = "success") => {
    notification[type]({
      message: title,
      description,
      placement: "topRight",
    });
  };

  renderOtpInputs = () => {
    const { otp, otpError } = this.state;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {otp.map((digit, index) => (
            <Input
              key={index}
              id={`otp-${index}`}
              value={digit}
              maxLength={1}
              onChange={(e) => this.handleOtpChange(e.target.value, index)}
              onKeyDown={(e) => {
                if (e.key === "Backspace") this.handleBackspace(index);
              }}
              style={{
                width: "50px",
                height: "50px",
                textAlign: "center",
                margin: "0 5px",
                fontSize: "18px",
              }}
            />
          ))}
        </div>
        {otpError && (
          <p style={{ color: "red", marginTop: "5px", textAlign: "center" }}>
            {otpError}
          </p>
        )}
      </div>
    );
  };

  render() {
    const {
      isUserExist,
      countdown,
      username,
      password,
      confirmPassword,
      regexError,
    } = this.state;

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
              {regexError && <p style={{ color: "red" }}>{regexError}</p>}
            </Form>
            <Space style={{ display: "flex", justifyContent: "end" }}>
              <Button key="back">Reset</Button>,
              <Button
                key="submit"
                type="primary"
                onClick={this.handleGenerateOtp}
              >
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
              <Form.Item label="Enter OTP">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {this.renderOtpInputs()}
                </div>
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
                <Button
                  key="submit"
                  type="primary"
                  onClick={this.handleConfirm}
                >
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
