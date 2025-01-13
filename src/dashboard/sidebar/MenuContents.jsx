import React, { useState } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";


const { Sider } = Layout;

const MenuContents = () => {
  const MenuItems = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "Logo",
    },
    {
      key: "2",
      icon: <UserOutlined />,
      label: "nav 1",
    },
    {
      key: "3",
      icon: <VideoCameraOutlined />,
      label: "nav 2",
    },
  ];
  return (
    <>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={MenuItems}
      />
    </>
  );
};
export default MenuContents;
