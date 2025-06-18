
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './redux/authslice'; 


const AuthButtons = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogin = () => {
    
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      {isAuthenticated ? (
        <button className='login' onClick={handleLogout}>Logout</button>
      ) : (
        <button className='login' onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default AuthButtons;
