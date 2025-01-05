import React, { useContext, useEffect, useState } from "react";
import loginImg from "../../assets/loginImg.webp";
import { Col, Row, Button, Divider, Form, Input, Flex, Modal } from "antd";
import {
  LockOutlined,
  UserOutlined,
  LinkedinFilled,
  LoginOutlined,
} from "@ant-design/icons";
import "./Logingpage.scss";
import ForgotPass from "./ForgotPass";
import { showMessage, showNotification } from "../Toaster/toaster";
import AuthContext from "../../context/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { CircularProgressComponent } from "../loader/CustomLoader";
import GoogleAuthentication from "../Auth/google/GoogleAuthentication";

const LoginPage = () => {
  const [forgotPass, setForgotPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoding, setisLoding] = useState(false);
  const { Login, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleOnClick = (event) => {
    event.preventDefault();
    setForgotPass(true);
  };

  const handleClose = () => {
    setForgotPass(false);
  };

  const handleLogin = async (values) => {
    setisLoding(true);
    setUser({});
    // setLoading(true);
    const res = await Login(values);
    // setLoading(false);
    if (res && res?.user) {
      setUser(res.user);
      showMessage("success", res.message);
      if (res.user?.userName) {
        navigate(`/profile/${res.user?.userName}`);
      } else {
        showMessage("error", "userName not found");
      }
    } else {
      showNotification({
        type: "error",
        title: "Login Failed",
        description: "Something went wrong!",
      });
    }
    setisLoding(false);
  };

  const handleLoginFailed = (errorInfo) => {
    showNotification({
      type: "warning",
      title: "Form Submission Failed",
      description: "Please check the form fields and try again.",
    });
    console.error(errorInfo);
  };

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
                onFinish={handleLogin}
                onFinishFailed={handleLoginFailed}
              >
                <p>
                  Enter your email address and password to access your portal!
                </p>
                <Form.Item
                  label="Email or Username"
                  name="emailOrUsername"
                  rules={[
                    {
                      type: "text",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your Email or Username!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    placeholder="Email or Username"
                  />
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
                    <a
                      href=""
                      className="forgotPassword"
                      onClick={handleOnClick}
                    >
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
                    loading={isLoding}
                  >
                    <strong>
                      {" "}
                      <span>
                        <LoginOutlined />
                      </span>{" "}
                      Login
                    </strong>
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
              <GoogleAuthentication setLoading={setLoading} />
              <LinkedinFilled className="socialApps linkedIn" />
            </div>
          </div>
        </Col>
      </Row>
      {forgotPass && (
        <Modal
          title="Reset Your Account Password"
          centered
          open={forgotPass}
          onCancel={handleClose}
          footer={false}
          className="forgotPass .forget-model"
        >
          <ForgotPass HandleClose={handleClose} />
        </Modal>
      )}
      {loading && <CircularProgressComponent loading={loading} />}
    </>
  );
};

export default LoginPage;
