import React from "react";
import { Link } from "react-router-dom";

const AdminSidbar = () => {
  return (
    <aside className="w-64 min-h-screen bg-gray-950 text-white px-5 py-6 border-r border-gray-800 flex flex-col">
      {/* Logo / Header */}
      <div className="pb-6 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white text-gray-950 rounded-lg flex items-center justify-center font-bold text-lg">
            A
          </div>

          <div>
            <h1 className="text-xl font-bold">Admin Panel</h1>
            <p className="text-xs text-gray-500 mt-1">Management Dashboard</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-8">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-3">
          Menu
        </p>

        <div className="space-y-1">
          <Link
            to="/admin"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition"
          >
            <span className="text-lg">▦</span>
            <span className="font-medium">Dashboard</span>
          </Link>

          <Link
            to="/admin/add-product"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition"
          >
            <span className="text-lg">＋</span>
            <span className="font-medium">Add Product</span>
          </Link>

          <Link
            to="/admin/products"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition"
          >
            <span className="text-lg">▤</span>
            <span className="font-medium">View Products</span>
          </Link>

          <Link
            to="/admin/users"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition"
          >
            <span className="text-lg">♙</span>
            <span className="font-medium">View Users</span>
          </Link>

          <Link
            to="/admin/admin-profile"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition"
          >
            <span className="text-lg">♙</span>
            <span className="font-medium">Profile</span>
          </Link>
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto pt-6 border-t border-gray-800">
        <p className="text-xs text-gray-500 px-3">Admin Dashboard</p>

        <p className="text-xs text-gray-600 px-3 mt-1">Manage your store</p>
      </div>
    </aside>
  );
};

export default AdminSidbar;
