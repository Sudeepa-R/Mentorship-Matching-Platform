import React, { Component } from "react";
import { Button, Form, Input, Space, message, notification } from "antd";
import "./Logingpage.scss";

export class ForgotPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal2Open: this.props.modal2Open,
      isUserExist: false,
      countdown: 180, 
      otp: Array(6).fill(""), 
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
    this.setState({ isUserExist: true }, () => {
      this.startCountdown();
      this.showNotification("OTP Generated", "An OTP has been sent to your registered mobile number/email.");
    });
  };

  startCountdown = () => {
    this.timer = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.countdown <= 0) {
          clearInterval(this.timer);
          this.showNotification("Error", "The OTP has expired. Please generate a new one.", "error");
          return { countdown: 0 };
        }
        return { countdown: prevState.countdown - 1 };
      });
    }, 1000);
  };

  formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  handleOtpChange = (value, index) => {
    const { otp } = this.state;
    const updatedOtp = [...otp];
    updatedOtp[index] = value.slice(-1); // Ensure only the last character is taken (1 digit)
    this.setState({ otp: updatedOtp });

    // Focus the next input box if available
    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
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
      this.showNotification("Success", "Password reset successfully. You can now log in with your new password.");
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
    const { otp } = this.state;
    return otp.map((digit, index) => (
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
    ));
  };

  render() {
    const { isUserExist, countdown } = this.state;

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
                <Input.Password placeholder="Enter password" />
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
                <Input.Password placeholder="Enter Confirm password" />
              </Form.Item>
            </Form>
            <Space style={{ display: "flex", justifyContent: "end" }}>
              <Button key="back">Reset</Button>,
              <Button key="submit" type="primary" onClick={this.handleClose}>
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
                required
              >
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
                <Button key="submit" type="primary" onClick={this.handleConfirm}>
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
