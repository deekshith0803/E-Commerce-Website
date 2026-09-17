import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../../redux/auth/authSlice";

const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const formik = useFormik({
    initialValues: {
      name: user?.name || "",
      email: user?.email || "",
    },
    onSubmit: (values) => {
      dispatch(updateProfile(values));
      navigate("/profile");
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Edit Profile</h1>

        <form
          onSubmit={formik.handleSubmit}
          className="bg-white border border-gray-200 rounded-xl shadow-sm p-8"
        >
          <div className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-gray-900"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-gray-900"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-5 border-t">
              <button
                type="submit"
                className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition"
              >
                Save Changes
              </button>

              <button
                type="button"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
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

export default EditProfile;
