import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import Catalog from 'pages/Catalog';
import Admin from 'pages/Admin';
import ProductDetails from 'pages/ProductDetails';
import Auth from 'pages/Admin/Auth';

const Rotas = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Catalog />} />
      <Route path="/products/:productId" element={<ProductDetails />} />
      <Route path="/Admin/auth" element={<Navigate to="/admin/auth/login" replace />} />
      <Route path="/Admin/auth/*" element={<Auth/>} />
      <Route path="/Admin" element={<Navigate to="products" replace />} />
      <Route path="/Admin/*" element={<Admin />} />
    </Routes>
  </BrowserRouter>
);

export default Rotas;
