import React, { useEffect, useState } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import * as Icons from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import commonFunction from "../../constants/commonFuncions";
import { showNotification } from "../../constants/Toaster/toaster";
import MenuItemApis from "../../api/menuItems/MenuItemsApis";

const { Sider } = Layout;
const { getMenuItems } = MenuItemApis;

const MenuContents = () => {
  const navigate = useNavigate();
  const [MenuItems, SetMenuItems] = useState([]);
  const [defaultSelectedKey,SetdefaultSelectedKey]=useState("appMenus")

  useEffect(() => {
    fetchTableData();
    return () => {
      // console.log("Component unmounted");
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
          SetMenuItems(res.data.data);
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

  const handleClick = (e) => {
    const selectedItem = MenuItems.find((item) => item.key === e.key);
    if (selectedItem) {
      navigate(selectedItem.path);
    }
  };

  return (
    <>
      <Menu
        className="menuItems"
        theme="dark"
        mode="inline"
        defaultSelectedKeys={defaultSelectedKey}
        onClick={handleClick}
      >
        {MenuItems.map((item) =>
          item.subMenu ? (
            <Menu.SubMenu key={item.key} title={item.label} icon={item.icon}>
              {item.subMenu.map((subItem) => (
                <Menu.Item onClick={(data)=>{SetdefaultSelectedKey(data.key)}} key={subItem.key} icon={renderDynamicIcon(subItem.icon)}>
                  {subItem.label}
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ) : (
            <Menu.Item key={item.key} onClick={(data)=>{SetdefaultSelectedKey(data.key)}} icon={renderDynamicIcon(item.icon)}>
              {item.label}
            </Menu.Item>
          )
        )}
      </Menu>
    </>
  );
};
export default MenuContents;
