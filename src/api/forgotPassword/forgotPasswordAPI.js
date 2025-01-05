import API from "../API";

const { get, post, put } = API;

const getUserData = async (data) => {
  const res = await get(`/forgotPassword/${data}`);
  return res;
};

const generateOTP = async (email) => {
  const res = await post(`/otp/send-otp`, { email });
  return res;
};

const validateUserOTP = async (data) => {
  const res = await post(`/otp/verify-otp`, { data });
  return res;
};

const updatePassword = async (data) => {
  const res = await put(`/forgotPassword/updatePassword`, data);
  return res;
};
const forgotPassAPI = {
  getUserData,
  generateOTP,
  validateUserOTP,
  updatePassword,
};

export default forgotPassAPI;
