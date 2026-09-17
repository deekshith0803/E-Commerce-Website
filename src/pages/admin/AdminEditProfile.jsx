import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../../redux/auth/authSlice";

const AdminEditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  const formik = useFormik({
    initialValues: {
      name: user?.name || "",
      email: user?.email || "",
    },

    onSubmit: (values) => {
      dispatch(updateProfile(values));
      navigate("/admin/admin-profile");
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Edit Admin Profile
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Update your administrator account details
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white border border-gray-200 rounded-xl shadow-sm p-8"
        >
          <div className="space-y-6">
            {/* Profile Avatar */}
            <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
              <div className="w-16 h-16 rounded-full bg-gray-950 text-white flex items-center justify-center text-2xl font-bold">
                {user?.name?.charAt(0).toUpperCase()}
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Administrator
                </h2>

                <p className="text-sm text-gray-500">
                  Update your profile information
                </p>
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
                placeholder="Enter your email"
              />
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 pt-6 border-t border-gray-200">
              <button
                type="submit"
                className="px-6 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition"
              >
                Save Changes
              </button>

              <button
                type="button"
                onClick={() => navigate("/admin/profile")}
                className="px-6 py-2.5 bg-white text-gray-700 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminEditProfile;
