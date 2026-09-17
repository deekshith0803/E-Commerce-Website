import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateProduct } from "../../redux/products/produceSlice";

const EditProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const products = useSelector((state) => state.product.products);

  const product = products.find((item) => item.id === Number(id));

  const formik = useFormik({
    initialValues: {
      id: product?.id || "",
      productName: product?.productName || "",
      imageUrl: product?.imageUrl || "",
      description: product?.description || "",
      price: product?.price || "",
    },

    enableReinitialize: true,

    onSubmit: (values) => {
      dispatch(updateProduct(values));

      navigate("/admin/products");
    },
  });

  if (!product) {
    return <h2 className="p-6">Product not found</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Edit Product</h1>

          <p className="text-gray-500 mt-1">Update your product information.</p>
        </div>

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
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Image */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Image URL
              </label>

              <input
                type="text"
                name="imageUrl"
                value={formik.values.imageUrl}
                onChange={formik.handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>

              <textarea
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Price
              </label>

              <input
                type="number"
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Update Product
              </button>

              <button
                type="button"
                onClick={() => navigate("/admin/products")}
                className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition"
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

export default EditProduct;
