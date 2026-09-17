import React from "react";

const UserAbout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <p className="text-sm uppercase tracking-widest text-gray-900 mb-3">
            About Us
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Shopping Made Simple
          </h1>

          <p className="max-w-2xl mx-auto text-gray-800 leading-7">
            We make online shopping simple, convenient, and reliable. Discover
            quality products, great prices, and an effortless shopping
            experience.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-5">
              Everything You Need, In One Place
            </h2>

            <p className="text-gray-600 leading-7 mb-4">
              Our platform brings together a variety of products in one
              convenient place. We focus on making the process of finding and
              purchasing products quick and easy.
            </p>

            <p className="text-gray-600 leading-7">
              From browsing products to adding items to your cart, every part of
              the experience is designed with simplicity in mind.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">100+</h3>
                <p className="text-gray-500 mt-1">Products</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900">500+</h3>
                <p className="text-gray-500 mt-1">Customers</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900">24/7</h3>
                <p className="text-gray-500 mt-1">Support</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900">100%</h3>
                <p className="text-gray-500 mt-1">Secure Shopping</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>

            <p className="text-gray-500 mt-2">
              Built to make your shopping experience better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-md transition">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-5">
                ✓
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                Quality Products
              </h3>

              <p className="text-gray-500 text-sm leading-6 mt-2">
                We focus on providing reliable and quality products for everyday
                needs.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-md transition">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-5">
                ⚡
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                Easy Shopping
              </h3>

              <p className="text-gray-500 text-sm leading-6 mt-2">
                Browse, choose, and add products to your cart with ease.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-md transition">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-5">
                ★
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                Customer First
              </h3>

              <p className="text-gray-500 text-sm leading-6 mt-2">
                We aim to provide a smooth and enjoyable experience for every
                customer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserAbout;
