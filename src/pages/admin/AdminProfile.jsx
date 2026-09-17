import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminProfile = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Admin Profile</h1>

          <p className="text-sm text-gray-500 mt-1">
            View your administrator account details
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gray-950 px-8 py-8">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-full bg-white text-gray-950 flex items-center justify-center text-3xl font-bold">
                {user?.name?.charAt(0).toUpperCase()}
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">{user?.name}</h2>

                <p className="text-gray-400 mt-1">{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Account Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <p className="text-sm text-gray-500 mb-2">Full Name</p>

                <div className="border border-gray-200 rounded-lg px-4 py-3 bg-gray-50">
                  <p className="font-medium text-gray-900">{user?.name}</p>
                </div>
              </div>

              {/* Email */}
              <div>
                <p className="text-sm text-gray-500 mb-2">Email Address</p>

                <div className="border border-gray-200 rounded-lg px-4 py-3 bg-gray-50">
                  <p className="font-medium text-gray-900">{user?.email}</p>
                </div>
              </div>

              {/* Role */}
              <div>
                <p className="text-sm text-gray-500 mb-2">Account Role</p>

                <div className="border border-gray-200 rounded-lg px-4 py-3 bg-gray-50">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-900 text-white">
                    {user?.role}
                  </span>
                </div>
              </div>
            </div>

            {/* Edit Button */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => navigate("/admin/edit-profile")}
                className="px-5 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
