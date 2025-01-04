const baseURL = import.meta.env.VITE_MMP_BACKEND_URL;
const success = 200;

const isValidPhoneNumber = (phoneNumber) => {
  const phoneRegex = /^[+]?[0-9]{10,15}$/;
  const res = phoneRegex.test(phoneNumber);
  return res;
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const commonFunction = { baseURL, success, isValidPhoneNumber, isValidEmail };

export default commonFunction;
