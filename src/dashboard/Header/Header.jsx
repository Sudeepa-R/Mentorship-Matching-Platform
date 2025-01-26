import React from "react";
import { Layout, theme } from "antd";
import { Box, Avatar, Typography } from "@mui/material";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const { Header } = Layout;

const Headers = (props) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
      icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "Logout",
    },
  ];

  return (
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
              >
                <Space>
                  <Avatar
                    className="avatar"
                    sx={{ marginRight:'0px' ,backgroundColor: "#537786", color: "#fff" }}
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
  );
};

export default Headers;
