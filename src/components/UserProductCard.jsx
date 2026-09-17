import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/products/cartSlice";

const UserProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition">
      {/* Product Image */}
      <div className="h-56 bg-gray-100 rounded-md flex items-center justify-center mb-4 overflow-hidden">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.productName}
            className="w-full h-full object-contain"
          />
        ) : (
          <span className="text-gray-400">Product Image</span>
        )}
      </div>

      {/* Product Details */}
      <h2 className="text-lg font-semibold text-gray-900">
        {product.productName}
      </h2>

      <p className="text-sm text-gray-500 mt-2 line-clamp-2">
        {product.description}
      </p>

      {/* Price & Button */}
      <div className="flex items-center justify-between mt-4">
        <span className="text-lg font-bold text-gray-900">
          ₹{product.price}
        </span>

        <button
          type="button"
          onClick={() => {
            dispatch(addToCart(product));
            navigate("/cart");
          }}
          className="bg-gray-900 text-white text-sm px-4 py-2 rounded-md hover:bg-gray-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default UserProductCard;
