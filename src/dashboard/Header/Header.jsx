import React, { useState } from "react";
import { Layout, theme } from "antd";
import { Box, Avatar, Typography } from "@mui/material";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space, Modal } from "antd";
import ForgotPass from "../../constants/LoginPage/ForgotPass";

const { Header } = Layout;

const Headers = (props) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [forgotPass, SetforgotPass] = useState(false);

  const items = [
    {
      key: "1",
      label: <span>My Profile</span>,
    },
    {
      key: "2",
      label: (
        <span
          onClick={() => {
            SetforgotPass(true);
          }}
        >
          Change Password
        </span>
      ),
    },
    {
      key: "3",
      label: <span>Last Login : {new Date(Date.now()).toLocaleString()}</span>,
    },
    {
      key: "4",
      danger: true,
      label: "Logout",
    },
  ];

  const handleClose = () => {
    SetforgotPass(false);
  };

  return (
    <>
      <div>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Box className="profile-container">
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <h5
                style={{
                  marginLeft: "20px",
                  fontFamily: "Poppins",
                  color: "#001529",
                }}
              >
                {props.Heading}
              </h5>
              <span className="avatarContainer">
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottomLeft"
                  arrow
                >
                  <Space>
                    <Avatar
                      className="avatar"
                      sx={{
                        marginRight: "0px",
                        backgroundColor: "#537786",
                        color: "#fff",
                      }}
                    >
                      A
                    </Avatar>
                    <Box className="profile-info">
                      <Typography className="profile-name">John Doe</Typography>
                    </Box>
                  </Space>
                </Dropdown>
              </span>
            </div>
          </Box>
        </Header>
      </div>
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
    </>
  );
};

export default Headers;
