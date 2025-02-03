import React, { useState, useEffect } from "react";
import { Button, Table, Modal, Tooltip } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  FolderAddOutlined,
} from "@ant-design/icons";
import "./AppMenu.scss";
import MenuForm from "../../dashboard/sidebar/MenuForm";
import { showNotification } from "../../constants/Toaster/toaster";
import MenuItemApis from "../../api/menuItems/MenuItemsApis";
import commonFunction from "../../constants/commonFuncions";
import Loder from "../../components/Loder/Loder"
import { setActivePage, setHeaderTitle } from "../../components/react-redux/action";
import { connect } from "react-redux";

const { getMenuItems, deleteAppMenuItem } = MenuItemApis;

const AppMenuManagement = (props) => {
  const [openModal, SetOpenModal] = useState(false);
  const [columnData, SetColumnData] = useState([]);
  const [tableData, SettableData] = useState([]);
  const [deleteAppMenu, SetdeleteAppMenu] = useState(false);
  const [editAppMenu, SeteditAppMenu] = useState(false);
  const [addSubMenus, SetaddSubMenus] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [editAppMenuItems, SeteditAppMenuItems] = useState(false);
  const [showLoader, SetshowLoader] = useState(true);
  const [menuId, SetMenuid] = useState(999);
  const [paginationConfig, setPaginationConfig] = useState({
    current: 1,
    pageSize: 10,
    showSizeChanger: true,
    pageSizeOptions: ["10", "20", "50", "100"],
  });

  useEffect(() => {
    SetshowLoader(true)
    props.setHeaderTitle("App Menu Management")
    props.setActivePage("appMenus")
    fetchTableData();
    return () => {
      props.setHeaderTitle("App Menu Management")
      SetshowLoader(true)
      fetchTableData();
    };
  }, []);

  const handleCancel = () => {
    fetchTableData();
    SeteditAppMenu(false);
    SetdeleteAppMenu(false);
  };

  const handlePagination = (data, sorter = {}, filter = {}) => {
    setPaginationConfig({
      ...paginationConfig,
      current: data.current,
      pageSize: data?.pageSize,
    });
  };
  const fetchTableData = () => {
    getMenuItems()
      .then((res) => {
        if (res.status === commonFunction.success) {
          fetchTableClums(res.data.data);
          SettableData(res.data.data);
        }
      })
      .catch((e) => {
        showNotification({
          type: "error",
          title: "Error!!",
          description: e?.message,
        });
      });
      SetshowLoader(false)
  };

  const DeleteAppMenu = () => {
    setConfirmLoading(true);
    deleteAppMenuItem(menuId)
      .then((res) => {
        setConfirmLoading(false);
        if (res.status === commonFunction.success) {
          SetdeleteAppMenu(false);
          fetchTableData();
          showNotification({
            type: "success",
            title: "Success!",
            description: res?.message,
          });
        }
      })
      .catch((e) => {
        setConfirmLoading(false);
        showNotification({
          type: "error",
          title: e?.code,
          description: e?.message,
        });
      });
  };

  const fetchTableClums = (data) => {
    const _Columns = [];
    let _SubMenus = {};
    Object.keys(data[0]).map((item) => {
      if (
        [
          "subMenus",
          "menuId",
          "key",
          "icon",
          "label",
          "path",
          "sequence",
          "roleType",
        ].includes(item)
      ) {
        if (item === "subMenus") {
          _SubMenus = {
            title: "Actions",
            dataIndex: "action",
            key: "action",
            width: "10%",
            render: (_, record) => (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Tooltip placement="leftTop" title={`Delete menu`}>
                  <Button
                    type="text"
                    style={{ fontSize: "18px", color: "red" }}
                    onClick={() => {
                      SetdeleteAppMenu(true);
                      SetMenuid(record.menuId);
                      // DeleteAppMenu(record);
                    }}
                  >
                    <DeleteOutlined />
                  </Button>
                </Tooltip>
                <Tooltip title={`Edit menu`}>
                  <Button
                    type="text"
                    style={{ fontSize: "18px", color: "#537786" }}
                    onClick={() => {
                      SeteditAppMenu(true);
                      SeteditAppMenuItems(record);
                    }}
                  >
                    <EditOutlined />
                  </Button>
                </Tooltip>
                <Tooltip title={`Add sub menu`}>
                  <Button
                    type="text"
                    style={{ fontSize: "18px", color: "#537786" }}
                    onClick={() => alert(`Performing action on ${record.name}`)}
                  >
                    <FolderAddOutlined />
                  </Button>
                </Tooltip>
              </div>
            ),
          };
        } else {
          _Columns.push({
            title: item.charAt(0).toUpperCase() + item.slice(1),
            dataIndex: item,
            key: item,
            width:"10%"
          });
        }
      }
    });

    _Columns.push(_SubMenus);
    SetColumnData(_Columns);
  };

  const CloseFormModal = () => {
    fetchTableData();
    SetOpenModal(false);
  };

  return (
    <>
      <Loder showLoader={showLoader}/>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "flex-end",
        }}
      >
        <Button
          onClick={() => {
            SetOpenModal(true);
          }}
          className="mb-3"
          type="primary"
        >
          Add App Menus
        </Button>
      </div>
      <div>
        <Table
          loading={showLoader}
          className="appMenuTable"
          columns={columnData}
          dataSource={tableData}
          onChange={handlePagination}
          pagination={paginationConfig}
          scroll={{ x: 200, y: 360 }}
        />
      </div>

      <Modal
        className="menuFormModal"
        title="Create App Menu"
        centered
        open={openModal}
        footer={false}
        // onOk={() => setOpenResponsive(false)}
        onCancel={CloseFormModal}
        sx={{
          width: {
            xs: "90%",
            sm: "80%",
            md: "70%",
            lg: "60%",
            xl: "50%",
            xxl: "40%",
          },
        }}
      >
        <MenuForm CloseModal={CloseFormModal} />
      </Modal>
      {(deleteAppMenu || editAppMenu) && (
        <Modal
          centered
          title={
            deleteAppMenu
              ? "Delete Menu Item"
              : editAppMenu
              ? "Edit App MenuItems"
              : ""
          }
          open={deleteAppMenu | editAppMenu}
          footer={
            editAppMenu ? (
              false
            ) : (
              <div>
                <Button className="me-2" key="cancel" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button type="primary" key="delete" loading={confirmLoading} onClick={DeleteAppMenu}>
                  Confirm Delete
                </Button>
              </div>
            )
          }
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          // onOk={
          //   deleteAppMenu ? DeleteAppMenu : editAppMenu ? editAppMenuItems : ""
          // }
        >
          {deleteAppMenu && (
            <div>
              <strong>Please confirem before Delete</strong>
              <p>
                <span style={{ color: "red" }}>*</span>Note : This action cannot
                be undone.
              </p>
            </div>
          )}
          {editAppMenu && (
            <MenuForm
              EditMenu={true}
              EditMenuItemData={editAppMenuItems}
              HandleCancel={handleCancel}
            />
          )}
        </Modal>
      )}
    </>
  );
};


const mapStateToProps = (state) => ({
  headerTitle: state.headerTitle,
});

const mapDispatchToProps = dispatch=>( {
  setHeaderTitle: (data)=>dispatch(setHeaderTitle(data)),
  setActivePage: (data)=> dispatch(setActivePage(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppMenuManagement);
