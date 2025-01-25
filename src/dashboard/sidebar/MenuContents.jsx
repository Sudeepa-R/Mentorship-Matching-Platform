import React, { useEffect, useState } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import * as Icons from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Link, useNavigate } from "react-router-dom";
import commonFunction from "../../constants/commonFuncions";
import { showNotification } from "../../constants/Toaster/toaster";
import MenuItemApis from "../../api/menuItems/MenuItemsApis";

const { Sider } = Layout;
const { getMenuItems } = MenuItemApis;

const MenuContents = (props) => {
  const navigate = useNavigate();
  const [MenuItems, SetMenuItems] = useState([]);
  const [defaultSelectedKey, SetdefaultSelectedKey] = useState("appMenus");
  const [activePageKey, SetactivePage]=useState('');

  useEffect(() => {
    fetchTableData();
    return () => {
    };
  }, []);

  const renderDynamicIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    if (IconComponent) {
      return <IconComponent />;
    }
    return null;
  };

  const fetchTableData = () => {
    getMenuItems()
      .then((res) => {
        if (res.status === commonFunction.success) {
          SetMenuItems(res.data?.data);
        }
      })
      .catch((e) => {
        showNotification({
          type: "error",
          title: "Error!!",
          description: e?.message,
        });
      });
  };

  return (
    <>
      <Menu
        className="menuItems"
        theme="dark"
        mode="inline"
        selectedKeys={[activePageKey || props.activePage]}
      >
        {MenuItems.map((item) =>
          item.subMenu ? (
            <Menu.SubMenu key={item.key} title={item.label} icon={item.icon}>
              {item.subMenu.map((subItem) => (
                <Menu.Item
                  // onChange={(data) => {
                  //   SetdefaultSelectedKey(data.key);
                  // }}
                  key={subItem.key}
                  icon={renderDynamicIcon(subItem.icon)}
                >
                  {subItem.label}
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ) : (
            <Menu.Item
              key={item.key}
              onClick={(data) => {
                const selectedItem = MenuItems.find(
                  (item) => item.key === data.key
                );
                SetactivePage(data.key);
                navigate(selectedItem.path);
              }}
              icon={renderDynamicIcon(item.icon)}
            >
              {item.label}
            </Menu.Item>
          )
        )}
      </Menu>
    </>
  );
};
export default MenuContents;
