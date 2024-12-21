import React, { Component } from "react";
import loginImg from "../../assets/loginImg.webp";
import { Col, Row, Button, Divider, Form, Input, Flex,Modal } from "antd";
import {
  LockOutlined,
  UserOutlined,
  GoogleCircleFilled,
  LinkedinFilled,
  LoginOutlined,
} from "@ant-design/icons";
import "./Logingpage.scss";
import ForgotPass from "./ForgotPass";
import { showMessage, showNotification } from "../Toaster/toaster";
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> be8bcddf2e6a08e445d8894e8cfad51e26efb244
=======
>>>>>>> be8bcddf2e6a08e445d8894e8cfad51e26efb244

export class LoginPage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      forgotPass:false,
    }

  }
  handleOnClick=()=>{
    event.preventDefault();
    this.setState({forgotPass:true})
  }   
  
  handleClose=()=>{
    this.setState({forgotPass:false})
  }

  handleLogin = (values) => {
    const { username, password } = values;

    if (username === "test@example.com" && password === "password123") {
      showMessage("success", "Login successful!");
    } else {
      showMessage("error", "Invalid username or password!");
    }
  };

  handleLoginFailed = (errorInfo) => {
    showNotification({
      type: "warning",
      title: "Form Submission Failed",
      description: "Please check the form fields and try again.",
    });
  };

  handleLogin = (values) => {
    const { username, password } = values;

    if (username === "test@example.com" && password === "password123") {
      showMessage("success", "Login successful!");
    } else {
      showMessage("error", "Invalid username or password!");
    }
  };

  handleLoginFailed = (errorInfo) => {
    showNotification({
      type: "warning",
      title: "Form Submission Failed",
      description: "Please check the form fields and try again.",
    });
  };

  handleLogin = (values) => {
    const { username, password } = values;

    if (username === "test@example.com" && password === "password123") {
      showMessage("success", "Login successful!");
    } else {
      showMessage("error", "Invalid username or password!");
    }
  };

  handleLoginFailed = (errorInfo) => {
    showNotification({
      type: "warning",
      title: "Form Submission Failed",
      description: "Please check the form fields and try again.",
    });
  };

  render() {
    return (
      <>
        <Row style={{ height: "100vh", margin: 0, padding: 0 }}>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            style={{
              height: "100vh",
              margin: 0,
              padding: 0,
              position: "static",
            }}
          >
            <img
              src={loginImg}
              alt="login page image"
              alt="login page image"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            style={{ height: "100vh", margin: 0, padding: 0 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                marginTop: "50px",
              }}
            >
              <h2 style={{ color: "#2B5F7B", fontFamily: "roboto" }}>
                Mentorship Matching Platform
              </h2>
              <div style={{ marginTop: "100px" }}>
                <Form
                  layout="vertical"
                  name="login"
                  initialValues={{
                    remember: true,
                  }}
                  style={{
                    minWidth: 350,
                  }}
                  onFinish={this.handleLogin}
                  onFinishFailed={this.handleLoginFailed}
                  onFinish={this.handleLogin}
                  onFinishFailed={this.handleLoginFailed}
                  // onFinish={onFinish}
                >
                  <p>
                    Enter your email address and password to access your portal!
                    Enter your email address and password to access your portal!
                  </p>
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
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
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Password!",
                      },
                    ]}
                  >
                    <Input.Password
                      prefix={<LockOutlined />}
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item style={{ margin: "10px" }}>
                    <Flex justify="end" align="center">
                      <a href="" className="forgotPassword" onClick={this.handleOnClick}>
                        Forgot password ?
                      </a>
                    </Flex>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      block
                      type="primary"
                      htmlType="submit"
                      style={{ backgroundColor: "#537786" }}
                    >
                      <strong> <span><LoginOutlined /></span> Login</strong>
                    </Button>
                    <div className="mt-2">
                      Don't have an account?{" "}
                      <a href="" className="forgotPassword">
                        Register now!
                      </a>
                    </div>
                  </Form.Item>
                </Form>
                <div>
                  <Divider>Or</Divider>
                </div>
              </div>
              <div>
                <GoogleCircleFilled className="socialApps google" />
                <LinkedinFilled className="socialApps linkedIn" />
              </div>
            </div>
          </Col>
        </Row>
<<<<<<< HEAD
        {this.state.forgotPass &&  <Modal
        title="Reset Your Account Password"
        centered
        open={this.state.forgotPass}
        // onOk={this.handleOnOk()}
        onCancel={()=>this.handleClose()}
      >
       <ForgotPass/>
      </Modal>}
=======
        {this.state.forgotPass && (
          <Modal
            title="Reset Your Account Password"
            centered
            open={this.state.forgotPass}
            // onOk={this.handleOnOk()}
            onCancel={() => this.handleClose()}
            footer={false}
            className=".forget-model"
            className=".forget-model"
          >
            <ForgotPass />
          </Modal>
        )}
>>>>>>> be8bcddf2e6a08e445d8894e8cfad51e26efb244
      </>
    );
  }
}

export default LoginPage;

