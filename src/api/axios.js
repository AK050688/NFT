import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    
    if (token) {
      config.headers.Authorization = `${token}`;
      console.log('Authorization header set:', config.headers.Authorization);
      console.log('Final headers:', config.headers);
    } else {
      console.log('No token found in localStorage');
    }
    
    // Log the complete request configuration
    console.log('Complete request config:', {
      url: config.url,
      method: config.method,
      headers: config.headers,
      data: config.data,
      params: config.params
    });
    
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle 401 errors
api.interceptors.response.use(
  (response) => {
    console.log('API Response Success:', {
      url: response.config?.url,
      status: response.status,
      data: response.data
    });
    return response;
  },
  (error) => {
    console.log('API Response Error:', {
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
      method: error.config?.method,
      headers: error.config?.headers
    });
    
    if (error.response && error.response.status === 401) {
      console.log('401 Error Details:', {
        status: error.response.status,
        data: error.response.data,
        url: error.config?.url,
        method: error.config?.method,
        headers: error.config?.headers
      });
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/NFTS-login';
    }
    return Promise.reject(error);
  }
);

export default api; 