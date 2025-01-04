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
export const patch = async (endpoint, payload) => {
  try {
    const response = await api.patch(endpoint, payload);
    return response.data;
  } catch (error) {
    console.error(`PATCH ${endpoint} failed:`, error);
    throw error;
  }
};

// DELETE request
export const deleteRequest = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error(`DELETE ${endpoint} failed:`, error);
    throw error;
  }
};

const API = { get, patch, post, put, deleteRequest };

export default API;
