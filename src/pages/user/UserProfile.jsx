import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
          {/* Profile Header */}
          <div className="flex items-center gap-5 pb-6 border-b">
            <div className="w-20 h-20 rounded-full bg-gray-900 text-white flex items-center justify-center text-2xl font-semibold">
              JD
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {isAuthenticated ? `${user.name}` : "Your Name"}
              </h2>

              <p className="text-gray-500 text-sm">
                {isAuthenticated ? `${user.email}` : "Your E mail"}
              </p>
            </div>
          </div>

          {/* User Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Full Name</p>
              <p className="font-medium text-gray-900">
                {isAuthenticated ? `${user.name}` : "Your Name"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Email</p>
              <p className="font-medium text-gray-900">
                {isAuthenticated ? `${user.email}` : "Your Name"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Role</p>
              <p className="font-medium text-gray-900">
                {isAuthenticated ? `${user.role}` : "Your Name"}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="border-t pt-6 flex gap-3">
            <button
              onClick={() => {
                navigate("/edit-profile");
              }}
              className="bg-gray-900 text-white px-5 py-2 rounded-md hover:bg-gray-700 transition"
            >
              Edit Profile
            </button>

            <button
              onClick={() => {
                dispatch(logout());
              }}
              className="border border-red-500 text-red-500 px-5 py-2 rounded-md hover:bg-red-50 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
