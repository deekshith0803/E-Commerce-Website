import React from "react";
import { Link } from "react-router-dom";
import UserAbout from "./UserAbout";
import UserProductCard from "../../components/UserProductCard";
import { useSelector } from "react-redux";

const UserHome = () => {
  const products = useSelector((state) => state.product.products);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Shop Everything You Need
          </h1>

          <p className="text-gray-300 text-lg max-w-xl mb-8">
            Discover quality products at great prices. Simple shopping, fast
            delivery, and a better experience.
          </p>

          <Link
            to="/products"
            className="inline-block bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Featured Products
              </h2>

              <p className="text-gray-500 mt-2">
                Check out some of our popular products.
              </p>
            </div>

            <Link
              to="/products"
              className="text-sm font-medium text-gray-900 hover:underline"
            >
              View All
            </Link>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 3).map((product) => (
              <UserProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <UserAbout />
    </div>
  );
};

export default UserHome;
