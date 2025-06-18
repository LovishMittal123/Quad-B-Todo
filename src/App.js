import React from 'react';
import Navbar from './Navbar';
import TaskList from './TaskList';
import AuthButtons from './AuthButtons';
import { useSelector } from 'react-redux';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  
  return (
    <div>
      <Navbar />
      <AuthButtons />
      {isAuthenticated ? (
        <TaskList />
      ) : (
        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          Please login to see your tasks.
        </p>
      )}
    </div>
  );
};

export default App;
