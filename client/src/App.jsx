import HomePage from "./customers/pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Product from "./customers/components/products/Product";
import Navigation from "./customers/components/Navbar";
import ProductDetails from "./customers/components/products/ProductDetails";
import Login from "./customers/auth/Login";
import axios from "axios";
import Signup from "./customers/auth/Signup";
import AdminDashboard from "./admin/AdminDashboard";
import ProtectedAdmin from "./admin/ProtectedAdmin";
axios.defaults.baseURL = "http://localhost:7000";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedAdmin />}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
