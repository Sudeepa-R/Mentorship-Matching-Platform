import API from "../API";

const { post } = API;

const registerUser = async (data) => {
  return await post(`/api/auth/createuser`, data);
};

const registerApi = { registerUser };

export default registerApi;
