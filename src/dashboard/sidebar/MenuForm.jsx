import React, { useEffect, useState } from "react";
import {
  Col,
  Row,
  Button,
  Select,
  Form,
  Input,
  InputNumber,
  Modal,
} from "antd";
import MenuItemApis from "../../api/menuItems/MenuItemsApis";
import { showNotification } from "../../constants/Toaster/toaster";
import commonFunction from "../../constants/commonFuncions";

const { saveAppMenuItems, updateAppMenuItems } = MenuItemApis;

const MenuForm = (props) => {
  const [form] = Form.useForm();
  const [formBtnLoading, SetformBtnLoading] = useState(false);

  useEffect(() => {
    if (props.EditMenu) {
      onFill();
    }
  });

  const onFill = () => {
    const data = props.EditMenuItemData;
    form.setFieldsValue({
      icon: data.icon,
      key: data.key,
      label: data.label,
      path: data.path,
      roleType: data.roleType,
      sequence: data.sequence,
    });
  };

  const handleRegisterForm = (data) => {
    SetformBtnLoading(true);
    if (props.EditMenu) {
      const dataToBeUpdated = {
        ...data,
        menuId: props.EditMenuItemData.menuId,
      };
      updateAppMenuItems(dataToBeUpdated)
        .then((res) => {
          if (res.status === commonFunction.success) {
            SetformBtnLoading(false);
            props?.HandleCancel();
            showNotification({
              type: "success",
              title: "Success!",
              description: res?.message,
            });
          }
        })
        .catch((e) => {
          SetformBtnLoading(false);
          showNotification({
            type: "error",
            title: "Error!",
            description: e?.message,
          });
        });
    } else {
      saveAppMenuItems(data)
        .then((res) => {
          if (res.status === commonFunction.success) {
            SetformBtnLoading(false);
            props.CloseModal();
            showNotification({
              type: "success",
              title: "Success!",
              description: res?.message,
            });
          }
        })
        .catch((e) => {
          SetformBtnLoading(false);
          showNotification({
            type: "error",
            title: "Error!",
            description: e?.message,
          });
        });
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <div>
        <Form
          layout="vertical"
          form={form}
          name="menuForm"
          initialValues={{
            remember: true,
          }}
          width={{
            xs: "90%",
            sm: "80%",
            md: "70%",
            lg: "60%",
            xl: "50%",
            xxl: "40%",
          }}
          // style={{ minWidth: 340 }}
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          onFinish={handleRegisterForm}
        >
          <Form.Item
            label="Key"
            name="key"
            rules={[
              {
                required: true,
                message: "Please input Key",
              },
            ]}
          >
            <Input allowClear placeholder="Key" />
          </Form.Item>
          <Form.Item
            label="Icon"
            name="icon"
            rules={[
              {
                required: true,
                message: "Please input Icon",
              },
            ]}
          >
            <Input allowClear placeholder="Icon" />
          </Form.Item>
          <Form.Item
            label="Label"
            name="label"
            rules={[
              {
                required: true,
                message: "Please input Label",
              },
            ]}
          >
            <Input allowClear placeholder="Label" />
          </Form.Item>
          <Form.Item
            label="RoleType"
            name="roleType"
            rules={[
              {
                required: true,
                message: "Please input roleType",
              },
            ]}
          >
            <Select placeholder="Select Menu role type">
              <Select.Option value="Admin">Admin</Select.Option>
              <Select.Option value="Mentor">Mentor</Select.Option>
              <Select.Option value="Mentee">Mentee</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Path"
            name="path"
            rules={[
              {
                required: true,
                message: "Please input Path",
              },
            ]}
          >
            <Input allowClear placeholder="Path" />
          </Form.Item>
          <Form.Item
            label="Sequence"
            name="sequence"
            rules={[
              {
                required: true,
                message: "Please input sequence",
              },
            ]}
          >
            <InputNumber
              className="menuFormNumber"
              min={0}
              max={100}

              // onChange={onChange}
            />
          </Form.Item>
          <Form.Item style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button  className="me-2" onClick={onReset}>
              Reset
            </Button>
            <Button loading={formBtnLoading} type="primary" htmlType="submit">
              {props.EditMenu ? "Update Menu" : "Add Menu"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default MenuForm;
