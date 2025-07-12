// Utility functions for authentication debugging
export const checkAuthStatus = () => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  
  console.log('=== Authentication Status ===');
  console.log('Token exists:', !!token);
  console.log('Token value:', token);
  console.log('User exists:', !!user);
  console.log('User data:', user ? JSON.parse(user) : null);
  
  if (token) {
    try {
      // Try to decode JWT token (if it's a JWT)
      const payload = JSON.parse(atob(token.split('.')[1]));
      console.log('Token payload:', payload);
      console.log('Token expiration:', new Date(payload.exp * 1000));
      console.log('Token is expired:', Date.now() > payload.exp * 1000);
    } catch (e) {
      console.log('Token is not a valid JWT or cannot be decoded');
    }
  }
  
  return { token, user: user ? JSON.parse(user) : null };
};

export const decodeJWT = (token) => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload;
  } catch (e) {
    console.error('Failed to decode JWT:', e);
    return null;
  }
};

export const checkUserPermissions = () => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  
  if (!token) {
    console.log('No token found');
    return { isAdmin: false, reason: 'No token' };
  }
  
  const payload = decodeJWT(token);
  const userData = user ? JSON.parse(user) : null;
  
  console.log('=== User Permissions Check ===');
  console.log('JWT Payload:', payload);
  console.log('User Data:', userData);
  
  // Check if user data indicates admin
  const isAdminFromUserData = userData?.userType === 'ADMIN' || userData?.role === 'ADMIN';
  console.log('Is admin from user data:', isAdminFromUserData);
  
  return {
    isAdmin: isAdminFromUserData,
    userId: payload?._id,
    userType: userData?.userType,
    reason: isAdminFromUserData ? 'User is admin' : 'User is not admin'
  };
};

export const clearAuth = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  console.log('Authentication data cleared');
};

export const setAuth = (token, user) => {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
  console.log('Authentication data set:', { token, user });
}; 