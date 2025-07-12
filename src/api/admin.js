import api from './axios';

export const getAllUsers = async (params) => {
  const response = await api.get('/admin/paginateAlluserList', { params });
  return response.data;
}; 