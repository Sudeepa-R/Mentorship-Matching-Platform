import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_MMP_BACKEND_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
  
});
let baseURL= import.meta.env.VITE_MMP_BACKEND_URL
console.log('url:',baseURL)

// GET request
export const get = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error(`GET ${endpoint} failed:`, error);
    throw error;
  }
};

// POST request
export const post = async (endpoint, payload) => {
  try {
    const response = await api.post(endpoint, payload);
    return response.data;
  } catch (error) {
    console.error(`POST ${endpoint} failed:`, error);
    throw error;
  }
};

// PUT request
export const put = async (endpoint, payload) => {
  try {
    const response = await api.put(endpoint, payload);
    return response.data;
  } catch (error) {
    console.error(`PUT ${endpoint} failed:`, error);
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
export const dalete = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error(`DELETE ${endpoint} failed:`, error);
    throw error;
  }
};
