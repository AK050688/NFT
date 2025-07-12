import api from './axios';

export const login = async (credentials) => {
  const response = await api.post('/user/userLogin', credentials);
  return response.data;
};

export const signup = async (userData) => {
  const response = await api.post('/user/userSignup', userData);
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get('/user/getProfile');
  return response.data;
};

export const adminLogin = async (credentials) => {
  const response = await api.post('/admin/adminLogin', credentials);
  return response.data;
}; 