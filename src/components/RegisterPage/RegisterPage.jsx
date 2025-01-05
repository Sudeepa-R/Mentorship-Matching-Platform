import React, { useContext, useState } from "react";
import { Carousel } from "antd";
import image1 from "../../assets/image1.gif";
import image3 from "../../assets/image3.gif";
import image4 from "../../assets/image4.gif";
import "./register.scss";
import commonFunction from "../../constants/commonFuncions";
import { Col, Row, Button, Divider, Form, Input, Flex, Modal } from "antd";
import {
  LockOutlined,
  UserOutlined,
  GoogleCircleFilled,
  LinkedinFilled,
  LoginOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import registerApi from "../../api/Register/Register";
import { showNotification } from "../../constants/Toaster/toaster";
import AuthContext from "../../context/auth/AuthContext";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const { registerUser } = registerApi;

  const { setUser } = useContext(AuthContext);

  const handleRegisterForm = () => {
    setLoading(true);
    const email = useremail;
    const userName = username;
    const UserData = { userName, email, password };
    userRegister(UserData);
  };
  const userRegister = (data) => {
    registerUser(data)
      .then((res) => {
        if (res) {
          setUser(res.user)
          setLoading(false);
          showNotification({
            type: "success",
            title: "Success",
            description: res?.message,
          });
          navigate('/home')
        }
      })
      .catch((e) => {
        setLoading(false);
        showNotification({
          type: "error",
          title: "User Found!",
          description: e?.response.data.message,
        });
      });
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
          <div className="Carousel">
            <Carousel autoplay>
              <div>
                <img
                  src={image1}
                  alt="image1"
                  style={{ width: "100%", height: "95vh" }}
                />
              </div>
              <div>
                <img
                  src={image3}
                  alt="image3"
                  style={{ width: "100%", height: "100vh" }}
                />
              </div>
              <div>
                <img
                  src={image4}
                  alt="image4"
                  style={{ width: "100%", height: "100vh" }}
                />
              </div>
            </Carousel>
          </div>
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
                  maxWidth: 350,
                }}
                labelCol={{
                  span: 16,
                }}
                wrapperCol={{
                  span: 25,
                }}
                onFinish={handleRegisterForm}
                // onFinishFailed={handleRegisterFormFailed}
              >
                <p>Enter your details to create an account and get started!</p>
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your UserName",
                    },
                  ]}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                >
                  <Input
                    allowClear
                    prefix={<UserOutlined />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="useremail"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your Email",
                    },
                  ]}
                  onChange={(e) => {
                    setUseremail(e.target.value);
                  }}
                >
                  <Input
                    allowClear
                    prefix={<MailOutlined />}
                    placeholder="UserEmail"
                  />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  hasFeedback
                >
                  <Input.Password
                    allowClear
                    prefix={<LockOutlined />}
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    block
                    type="primary"
                    htmlType="submit"
                    style={{ backgroundColor: "#537786" }}
                    loading={loading}
                    iconPosition="end"
                  >
                    <strong>
                      {" "}
                      <span>
                        <LoginOutlined />
                      </span>{" "}
                      Register
                    </strong>
                  </Button>
                  <div className="mt-2">
                    Already have an account?{" "}
                    <Button
                      color="default"
                      variant="link"
                      onClick={() => navigate("/login")}
                    >
                      Sign In
                    </Button>
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
    </>
  );
};

export default RegisterPage;
