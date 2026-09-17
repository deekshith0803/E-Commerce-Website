import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/auth/authSlice";

const UserNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="h-16 bg-white border-b border-gray-200 flex items-center px-8">
      {/* Logo */}
      <Link to="/" className="text-xl font-semibold text-gray-900">
        E-Commerce
      </Link>

      {/* Navigation */}
      <div className="ml-auto flex items-center gap-7">
        <Link
          to="/"
          className="text-sm text-gray-600 hover:text-gray-900 transition"
        >
          Home
        </Link>

        <Link
          to="/products"
          className="text-sm text-gray-600 hover:text-gray-900 transition"
        >
          Products
        </Link>

        <Link
          to="/cart"
          className="text-sm text-gray-600 hover:text-gray-900 transition"
        >
          Cart
        </Link>

        <Link
          to="/profile"
          className="text-sm text-gray-600 hover:text-gray-900 transition"
        >
          Profile
        </Link>

        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="bg-gray-900 text-white text-sm px-5 py-2 rounded-md hover:bg-gray-700 transition"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-gray-900 text-white text-sm px-5 py-2 rounded-md hover:bg-gray-700 transition"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default UserNavbar;
