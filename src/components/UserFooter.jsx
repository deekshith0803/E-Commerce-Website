import React from "react";
import { Link } from "react-router-dom";

const UserFooter = () => {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold">E-Commerce</h2>

            <p className="text-gray-400 text-sm mt-3 leading-6">
              A simple and reliable online shopping experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>

            <div className="flex flex-col gap-2 text-sm">
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="text-gray-400 hover:text-white transition"
              >
                Products
              </Link>

              <Link
                to="/about"
                className="text-gray-400 hover:text-white transition"
              >
                About
              </Link>

              <Link
                to="/cart"
                className="text-gray-400 hover:text-white transition"
              >
                Cart
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>

            <p className="text-gray-400 text-sm mb-2">
              Email: support@example.com
            </p>

            <p className="text-gray-400 text-sm">Phone: +91 98765 43210</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-5 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 E-Commerce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default UserFooter;
