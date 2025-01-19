import React from "react";
import { Layout, theme } from "antd";
import { Box, Avatar, Typography } from "@mui/material";
const { Header } = Layout;

const Headers = (props) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
        <Box className="profile-container">
            <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'10px'}}>
          <h5 style={{ marginLeft: "20px",fontFamily:'Poppins',color:'#001529' }}>{props.Heading}</h5>
          <span className="avatarContainer">
            <Avatar
              className="avatar"
              sx={{ backgroundColor: "#537786", color: "#fff" }}
            >
              A
            </Avatar>
            <Box className="profile-info">
              <Typography className="profile-name">John Doe</Typography>
            </Box>
          </span>
          </div>
        </Box>
      </Header>
    </div>
  );
};

export default Headers;
