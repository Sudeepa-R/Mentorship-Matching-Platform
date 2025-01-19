import API from "../API";

const { get, post, Delete,Patch } = API;

const getMenuItems = async (data) => {
  return await get(`/MenuContensts`);
};

const saveAppMenuItems = async (data) => {
  return await post("/MenuContensts", data);
};

const deleteAppMenuItem = async (menuId) => {
  return await Delete(`/MenuContensts/${menuId}`);
};

const updateAppMenuItems = async (data) => {
  return await Patch(`/MenuContensts`, data);
};

const MenuItemApis = {
  getMenuItems,
  saveAppMenuItems,
  deleteAppMenuItem,
  updateAppMenuItems,
};

export default MenuItemApis;
