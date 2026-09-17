import React from "react";
import { useSelector } from "react-redux";

const AdminDashbord = () => {
  const products = useSelector((state) => state.product.products);
  const user = useSelector((state) => state.auth.user);

  const users = JSON.parse(localStorage.getItem("users") || "[]");

  return (
    <div>
      {/* Admin Profile */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center gap-4">
          {/* Profile Avatar */}
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-2xl font-bold text-blue-600">
              {user?.name?.charAt(0).toUpperCase()}
            </span>
          </div>

          {/* Profile Info */}
          <div>
            <h2 className="text-xl font-bold text-gray-800">{user?.name}</h2>

            <p className="text-sm text-gray-500">{user?.email}</p>

            <span className="inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-600">
              {user?.role}
            </span>
          </div>
        </div>
      </div>

      {/* Dashboard */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Total Products */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-gray-500 text-sm">Total Products</h2>

          <p className="text-3xl font-bold text-gray-800 mt-2">
            {products.length}
          </p>
        </div>

        {/* Total Users */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-gray-500 text-sm">Total Users</h2>

          <p className="text-3xl font-bold text-gray-800 mt-2">
            {users.length - 1}
          </p>
        </div>

        {/* Total Orders */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-gray-500 text-sm">Total Orders</h2>

          <p className="text-3xl font-bold text-gray-800 mt-2">85</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashbord;
