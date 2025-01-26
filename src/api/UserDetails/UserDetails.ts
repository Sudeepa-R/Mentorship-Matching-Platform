import API from "../API";

const { get, Delete } = API;

const getAllUserDetails = async () => {
  return await get(`/api/auth/users`);
};

const deleteUsersData = async (userId:any) => {
  return await Delete(`/api/auth/deleteUser/${userId}`);
};

const UsersDetails = { getAllUserDetails, deleteUsersData };

export default UsersDetails;
