import React, { useState } from "react";
import { Button, Layout, Menu, theme } from "antd";
import logo from "../../assets/smallLogo.jpg";
import "../sidebar/Sidebar.scss";
import MenuContents from "../sidebar/MenuContents";
import Headers from "../Header/Header";

const { Header, Sider, Content } = Layout;

const AppLayout = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
      width={250}
      className="siderMenuItems"
        style={{ minHeight: "85vh" }}
        onMouseEnter={() => setCollapsed(!collapsed)}
        onMouseLeave={() => setCollapsed(!collapsed)}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div
          className="mt-3"
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "15px",
          }}
        >
          {collapsed ? (
            <img src={logo} alt="logo" style={{ width: "60%" }}></img>
          ) : (
            <>
              <img src={logo} alt="logo" style={{ width: "25%" }}></img>
              <h6 className="m-1">MentorMatch</h6>
            </>
          )}
        </div>
        <MenuContents />
      </Sider>
      <Layout >
        <Headers Heading={props.Heading} />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "85vh",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
         {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default AppLayout;
