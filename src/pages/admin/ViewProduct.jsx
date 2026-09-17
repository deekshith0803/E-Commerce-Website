import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../redux/products/produceSlice";
import { useNavigate } from "react-router-dom";

const ViewProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Products</h2>

          <p className="text-gray-500 mt-1">
            Manage all your products from here.
          </p>
        </div>

        {/* Product Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">
              All Products
            </h3>

            <span className="bg-gray-100 text-gray-600 text-sm font-medium px-3 py-1 rounded-full">
              {products.length} Products
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                    #
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                    Product
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                    Description
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                    Price
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {products.map((product, index) => (
                  <tr
                    key={product.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition"
                  >
                    {/* Number */}
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {index + 1}
                    </td>

                    {/* Product */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                          {product.imageUrl ? (
                            <img
                              src={product.imageUrl}
                              alt={product.productName}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-xs text-gray-400">
                              No Image
                            </span>
                          )}
                        </div>

                        <div>
                          <p className="font-semibold text-gray-800">
                            {product.productName}
                          </p>

                          <p className="text-xs text-gray-400">
                            ID: {product.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Description */}
                    <td className="px-6 py-4 max-w-sm">
                      <p className="text-sm text-gray-500 line-clamp-2">
                        {product.description}
                      </p>
                    </td>

                    {/* Price */}
                    <td className="px-6 py-4">
                      <span className="font-semibold text-gray-800">
                        ₹{product.price}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            navigate(`/admin/edit-product/${product.id}`);
                          }}
                          className="px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => {
                            dispatch(removeProduct(product.id));
                          }}
                          className="px-3 py-1.5 text-sm font-medium text-red-600 bg-red-50 rounded-md hover:bg-red-100 transition"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {products.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-gray-500">No products available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
