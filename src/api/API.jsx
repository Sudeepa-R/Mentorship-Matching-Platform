import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_MMP_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
import commonFunction from "../constants/commonFuncions";
// GET request
export const get = async (data) => {
  try {
    const response = await api.get(`${commonFunction.baseURL}${data}`);
    return response;
  } catch (error) {
    throw error;
  }
};

// POST request
export const post = async (path, data) => {
  try {
    const response = await api.post(`${commonFunction.baseURL}${path}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// PUT request
export const put = async (path, data) => {
  try {
    const response = await api.put(`${commonFunction.baseURL}${path}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// PATCH request
export const Patch = async (endPoint, data) => {
  try {
    const response = await api.patch(`${commonFunction.baseURL}${endPoint}`, data);
    return response.data;
  } catch (error) {
    console.error(`PATCH ${endPoint} failed:`, error);
    throw error;
  }
};

// DELETE request
export const Delete = async (path, data = {}) => {
  try {
    const response = await api.delete(`${commonFunction.baseURL}${path}`, data);
    return response.data;
  } catch (error) {
    console.error(`DELETE ${endpoint} failed:`, error);
    throw error;
  }
};

// google login
export const googleAuth = async (code) => {
  try {
    const response = await api.get(`/api/google?code=${code}`);
    return response.data;
  } catch (error) {
    console.error(`Google Login failed:`, error);
    throw error;
  }
};
const API = { get, Patch, post, put, Delete, googleAuth };

export default API;
