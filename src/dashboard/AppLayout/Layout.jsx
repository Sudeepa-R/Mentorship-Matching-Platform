import React, { useEffect, useState } from "react";
import { Button, Layout, Menu, theme } from "antd";
import logo from "../../assets/smallLogo.jpg";
import "../sidebar/Sidebar.scss";
import MenuContents from "../sidebar/MenuContents";
import Headers from "../Header/Header";
import { connect } from "react-redux";
import { setHeaderTitle } from "../../components/react-redux/action";

const { Header, Sider, Content } = Layout;

const AppLayout = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        width={250}
        className="siderMenuItems"
        style={{
          minHeight: "85vh",
        }}
        onMouseEnter={() => setCollapsed(false)}
        onMouseLeave={() => setCollapsed(true)}
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
        <MenuContents activePage={props.activePage} />
      </Sider>
      <Layout>
         <Headers Heading={props.headerTitle} />
        <Content
          style={{
            margin: "24px 16px",
            padding:  24,
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

const mapStateToProps = (state) => ({
  activePage: state.activePage,
  headerTitle: state.headerTitle,
});

const mapDispatchToProps = (dispatch) => ({
  setHeaderTitle: (data) => dispatch(setHeaderTitle(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
