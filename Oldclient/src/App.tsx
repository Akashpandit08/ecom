import React from 'react';
import './index.css'; // Import your global styles here
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register'; // Optional if you have a Register component
import AdminHome from './pages/AdminHome'; // Replace with your actual admin component
import './index.css'; 



const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/home" element={<AdminHome />} />
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
};

export default App;
