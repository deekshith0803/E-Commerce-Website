import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashbord from "./pages/admin/AdminDashbord";
import AppProduct from "./pages/admin/AppProduct";
import ViewProduct from "./pages/admin/ViewProduct";
import ViewUser from "./pages/admin/ViewUser";

import UserLayout from "./pages/user/UserLayout";
import UserHome from "./pages/user/UserHome";
import UserProduct from "./pages/user/UserProduct";
import UserCart from "./pages/user/UserCart";
import UserProfile from "./pages/user/UserProfile";

import PageNotFound from "./components/PageNotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import EditProduct from "./pages/admin/EditProduct";
import EditProfile from "./pages/user/EditProfile";
import AdminProfile from "./pages/admin/AdminProfile";
import AdminEditProfile from "./pages/admin/AdminEditProfile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashbord />} />
          <Route path="add-product" element={<AppProduct />} />
          <Route path="products" element={<ViewProduct />} />
          <Route path="users" element={<ViewUser />} />
          <Route path="edit-product/:id" element={<EditProduct />} />
          <Route path="admin-profile" element={<AdminProfile />} />
          <Route path="edit-profile" element={<AdminEditProfile />} />
        </Route>

        {/* User Layout - Public */}
        <Route path="/" element={<UserLayout />}>
          {/* Public */}
          <Route index element={<UserHome />} />
          <Route path="products" element={<UserProduct />} />

          {/* Protected */}
          <Route
            path="cart"
            element={
              <ProtectedRoute role="user">
                <UserCart />
              </ProtectedRoute>
            }
          />

          <Route
            path="profile"
            element={
              <ProtectedRoute role="user">
                <UserProfile />
              </ProtectedRoute>
            }
          />

          <Route
            path="edit-profile"
            element={
              <ProtectedRoute role="user">
                <EditProfile />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* 404 */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
