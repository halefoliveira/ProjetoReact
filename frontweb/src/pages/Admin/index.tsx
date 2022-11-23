import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import './styles.css';
import Users from './user';

const Admin = () => {
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Routes>
          <Route path="products" element={<h1>Products</h1>} />
          <Route path="categories" element={<h1>Category</h1>} />
          <Route path="users" element={<Users/>} />
          
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
