import React, { Component } from "react";
import { Button, Form, Input, Space, message, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./Logingpage.scss";
import forgotPassAPI from "../../api/forgotPassword/forgotPasswordAPI";
import commonFunction from "../commonFuncions";
import { showNotification, showMessage } from "../../constants/Toaster/toaster";

const { getUserData, generateOTP, validateUserOTP, updatePassword } =
  forgotPassAPI;
const { isValidPhoneNumber, isValidEmail } = commonFunction;
export class ForgotPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal2Open: this.props.modal2Open,
      isUserExist: false,
      countdown: 180,
      validateOTP: "",
      username: "",
      password: "",
      confirmPassword: "",
      regexError: "",
      message: "Please input your username!",
      otpError: "",
      userEmail: "",
      otpGenerated: false,
      isFormSubmitted: false,
      isPassUpdated: false,
      otp: ["", "", "", "", "", ""],
    };
    this.timer = null;
    this.formRef = React.createRef();
  }

  componentDidMount() {
    this.setState({ modal2Open: this.props.modal2Open });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  verifyUser = (data) => {
    getUserData(data).then((res) => {
      if (res.status === commonFunction.success) {
        if (res.data.data) {
          this.setState({
            isUserExist: true,
            userEmail: res.data.data.email,
          });
        } else {
          this.setState({ message: res.data.message });
        }
      }
    });
  };

  sendOTP = (data) => {
    generateOTP(data).then((res) => {
      if (res.status === commonFunction.success) {
        showNotification({
          type: "success",
          title: "OTP sent",
          description: "OTP is sent to registered Email!",
        });
        this.setState({ otpGenerated: true, isFormSubmitted: false });
        this.startCountdown(this.state.countdown);
      }
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

  handleGenerateOtp = () => {
    this.setState({ isFormSubmitted: true });
    if (this.state.isUserExist) {
      this.sendOTP(this.state.userEmail);
    } else {
      this.setState({ isFormSubmitted: false });
      showNotification({
        type: "error",
        title: "User not found!",
        description:
          "Please enter a valid registered email address or registered phone number.",
      });
    }
  };

  handleConfirm = () => {
    this.setState({ isPassUpdated: true });
    const { otp, userEmail, password } = this.state;
    const validateOTP = otp.join("");
    const data = { email: userEmail, otp: validateOTP };
    validateUserOTP(data)
      .then((res) => {
        if (res.status === commonFunction.success) {
          const data = { email: userEmail, password: password };
          this.changePassword(data);
        }
      })
      .catch((e) => {
        this.setState({ isPassUpdated: false });
        showMessage("error", "Please enter valid OTP!.");
      });
  };

  changePassword = (data) => {
    updatePassword(data)
      .then((res) => {
        if (res.status === commonFunction.success) {
          showMessage("success", res.message);
        }
        this.setState({ isPassUpdated: false });
        this.props.HandleClose();
      })
      .catch((e) => {
        this.setState({ isPassUpdated: false });
        showMessage("error", e.message);
      });
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  showNotification = (title, description, type = "success") => {
    notification[type]({
      message: title,
      description,
      placement: "topRight",
    });
  };

  handleChange = (value, index) => {
    const { otp } = this.state;
    const newOtp = [...otp];
    newOtp[index] = value;

    // Update state with new OTP values
    this.setState({ otp: newOtp }, () => {
      // Notify parent component if required
      if (this.props.onChange) {
        this.props.onChange(newOtp.join(""));
      }
    });

    // Focus on the next input if value is entered
    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  handleKeyDown = (event, index) => {
    const { otp } = this.state;

    if (event.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  render() {
    const { otpGenerated } = this.state;
    const { otp } = this.state;
    return (
      <>
        {otpGenerated === false ? (
          <div>
            <Form
              ref={this.formRef}
              layout="vertical"
              name="basic"
              className=""
              labelCol={{
                span: 16,
              }}
              wrapperCol={{
                span: 25,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={this.handleGenerateOtp}
              autoComplete="off"
            >
              <Form.Item
                label="Email/Phone Number"
                name="username"
                onChange={(e) => {
                  this.setState({ username: e.target.value });
                  const { username } = this.state;
                  if (isValidEmail(username)) {
                    this.verifyUser(e.target.value);
                  } else if (isValidPhoneNumber(username)) {
                    this.verifyUser(e.target.value);
                  }
                }}
                rules={[
                  {
                    required: true,
                    message: this.state?.message,
                  },
                ]}
              >
                <Input allowClear />
              </Form.Item>

              <Form.Item
                name="password"
                label="password"
                onChange={(e) => {
                  this.setState({ password: e.target.value });
                }}
                rules={[
                  { required: true, message: "Please input your password!" },
                  {
                    min: 8,
                    message: "Password must be at least 8 characters long!",
                  },
                  {
                    pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])/,
                    message:
                      "Password must include uppercase, lowercase, number, and special character!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password allowClear />
              </Form.Item>

              <Form.Item
                name="confirmPassword"
                label="Confirm Password"
                onChange={(e) => {
                  this.setState({ confirmPassword: e.target.value });
                }}
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
                <Input.Password allowClear />
              </Form.Item>

              <Form.Item label={null}>
                <Space>
                  <Button
                    className="mx-2"
                    htmlType="button"
                    onClick={this.onReset}
                  >
                    Reset
                  </Button>
                </Space>
                <Button
                  loading={this.state?.isFormSubmitted}
                  type="primary"
                  htmlType="submit"
                >
                  Generate OTP
                </Button>
              </Form.Item>
            </Form>
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
                <div style={{ display: "flex", gap: "8px" }}>
                  {otp.map((digit, index) => (
                    <Input
                      key={index}
                      id={`otp-input-${index}`}
                      value={digit}
                      maxLength={1}
                      onChange={(e) => this.handleChange(e.target.value, index)}
                      onKeyDown={(e) => this.handleKeyDown(e, index)}
                      style={{
                        width: "50px",
                        height: "45px",
                        fontSize: "25px",
                        textAlign: "center",
                      }}
                    />
                  ))}
                </div>
              </Form.Item>
              <span style={{ display: "flex", justifyContent: "end" }}>
                <p style={{ fontSize: "14px", color: "red" }}>
                  Time Remaining: {this.formatTime(this.state?.countdown)}
                </p>
              </span>

              <p>
                We’ve sent a <strong>One-Time Password (OTP)</strong> to your
                registered mobile number/email. Please enter the 6-digit code
                below to verify your identity.
              </p>

              <Space
                className="mt-5"
                style={{ display: "flex", justifyContent: "end" }}
              >
                <Button
                  key="submit"
                  loading={this.state?.isPassUpdated}
                  type="primary"
                  onClick={this.handleConfirm}
                  iconPosition="end"
                >
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