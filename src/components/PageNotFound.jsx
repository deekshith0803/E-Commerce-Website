import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-gray-900">404</h1>

        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-2">
          Sorry, the page you are looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
