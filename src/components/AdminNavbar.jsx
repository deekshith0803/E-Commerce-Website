import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between">
      {/* Left */}
      <div>
        <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Welcome back, {user?.name}</p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        {/* Admin */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-gray-900 text-white flex items-center justify-center text-lg font-semibold">
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">{user?.name}</p>

            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>

        {/* Logout */}
        <button
          type="button"
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2.5 bg-white text-red-600 border border-red-500 rounded-lg text-sm font-medium hover:bg-red-50 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
