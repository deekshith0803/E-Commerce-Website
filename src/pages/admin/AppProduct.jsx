import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/products/produceSlice";
import { useFormik } from "formik";

const AppProduct = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      id: Date.now(),
      productName: "",
      imageUrl: "",
      description: "",
      price: "",
    },

    onSubmit: (values) => {
      dispatch(addProduct(values));
      console.log(values);
      formik.resetForm();
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Add Product</h1>

          <p className="text-gray-500 mt-1">Add a new product to your store.</p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8"
        >
          <div className="space-y-6">
            {/* Product Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Product Name
              </label>

              <input
                type="text"
                name="productName"
                value={formik.values.productName}
                onChange={formik.handleChange}
                placeholder="Enter product name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Image URL
              </label>

              <input
                type="text"
                name="imageUrl"
                value={formik.values.imageUrl}
                onChange={formik.handleChange}
                placeholder="https://example.com/image.jpg"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Product Description
              </label>

              <textarea
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                placeholder="Enter product description"
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none resize-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Price
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                  ₹
                </span>

                <input
                  type="number"
                  name="price"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  placeholder="Enter price"
                  className="w-full border border-gray-300 rounded-lg pl-9 pr-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition shadow-sm"
              >
                Add Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppProduct;
