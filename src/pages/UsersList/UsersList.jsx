import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button, Table, Popconfirm, Tooltip } from "antd";
import {
  setActivePage,
  setHeaderTitle,
} from "../../components/react-redux/action";
import {
  DeleteOutlined,
  EditOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import UsersDetails from "../../api/UserDetails/UserDetails";
import { showNotification } from "../../constants/Toaster/toaster";
import commonFunction from "../../constants/commonFuncions";

const { getAllUserDetails, deleteUsersData } = UsersDetails;

const UsersList = (props) => {
  const [columnData, SetColumnData] = useState([]);
  const [paginationConfig, setPaginationConfig] = useState({
    current: 1,
    pageSize: 10,
    showSizeChanger: true,
    pageSizeOptions: ["10", "20", "50", "100"],
  });
  const [tableData, SettableData] = useState([]);
  const [showLoader, SetshowLoader] = useState(true);

  useEffect(() => {
    SetshowLoader(true);
    props.setHeaderTitle("User Lists");
    props.setActivePage("userList");
    fetchTableData();
    console.log("not updated");
    return () => {
      SetshowLoader(true);
      props.setHeaderTitle("User Lists");
      fetchTableData();
      console.log("updatedd");
    };
  }, []);

  const handlePagination = (data, sorter = {}, filter = {}) => {
    setPaginationConfig({
      ...paginationConfig,
      current: data.current,
      pageSize: data?.pageSize,
    });
  };

  const deletteUsers = (data) => {
    deleteUsersData(data)
      .then((res) => {
        console.log("000000", res);
        if (res.status === commonFunction.success) {
          fetchTableData();
          showNotification({
            type: "success",
            title: "Success!!",
            description: res?.message,
          });
        }
      })
      .catch((error) => {
        showNotification({
          type: "error",
          title: "Error!!",
          description: error?.message,
        });
      });
  };

  const fetchTableData = () => {
    SetshowLoader(true);
    getAllUserDetails()
      .then((res) => {
        if (res.status === commonFunction.success) {
          fetchTableClums(res.data.users);
          const data = res.data.users;
          data.reverse();
          SettableData(data);
          SetshowLoader(false);
        }
      })
      .catch((e) => {
        SetshowLoader(false);
        showNotification({
          type: "error",
          title: "Error!!",
          description: e?.message,
        });
      });
    SetshowLoader(false);
  };

  const fetchTableClums = (data) => {
    const _Columns = [];
    let _SubMenus = {};
    Object.keys(data[data.length - 1]).map((item) => {
      if (
        ["email", "userName", "phoneNumber", "FullName", "role"].includes(item)
      ) {
        _Columns.push({
          title: item.charAt(0).toUpperCase() + item.slice(1),
          dataIndex: item,
          key: item,
          width: "10%",
        });
      }
    });

    _SubMenus = {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: "2%",
      render: (_, record) => (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Tooltip placement="leftTop" title={`Delete menu`}>
            <Popconfirm
              placement="topRight"
              title="Delete the user"
              description="Are you sure to delete this user?"
              onConfirm={() => {
                deletteUsers(record._id);
              }}
              icon={
                <QuestionCircleOutlined
                  style={{
                    color: "red",
                  }}
                />
              }
            >
              <Button type="text" style={{ fontSize: "18px", color: "red" }}>
                <DeleteOutlined />
              </Button>
            </Popconfirm>
          </Tooltip>
        </div>
      ),
    };
    const keys = {
      title: "UserId",
      dataIndex: "userId",
      key: "userId",
      width: "10%",
      render: (_, record) => (
        <>
          <span>{record._id}</span>
        </>
      ),
    };
    _Columns.push(_SubMenus);
    _Columns.unshift(keys);
    SetColumnData(_Columns);
  };

  return (
    <>
      <div>
        <Table
          loading={showLoader}
          className="appMenuTable"
          columns={columnData}
          dataSource={tableData}
          onChange={handlePagination}
          pagination={paginationConfig}
          scroll={{ x: 200, y: 400 }}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  headerTitle: state.headerTitle,
});

const mapDispatchToProps = (dispatch) => ({
  setHeaderTitle: (data) => dispatch(setHeaderTitle(data)),
  setActivePage: (data) => dispatch(setActivePage(data)),
});

// export default UsersList
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
