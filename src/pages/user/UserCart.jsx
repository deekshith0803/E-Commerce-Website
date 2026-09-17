import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeAllFromCart,
  removeFromCart,
} from "../../redux/products/cartSlice";

const UserCart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (total, item) => (total = total + item.price * item.quantity),
    0,
  );

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-xl p-10 text-center">
            <h2 className="text-xl font-semibold text-gray-900">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mt-2">
              Add some products to your cart.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {/* Remove All */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    dispatch(removeAllFromCart());
                  }}
                  className="px-4 py-2 bg-white text-red-600 border border-red-500 rounded-lg text-sm font-medium hover:bg-red-50 transition"
                >
                  Remove All Items
                </button>
              </div>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-xl p-5 flex items-center justify-between"
                >
                  {/* Product Details */}
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt={item.productName}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-xs text-gray-400">
                          Product Image
                        </span>
                      )}
                    </div>

                    <div>
                      <h2 className="font-semibold text-gray-900">
                        {item.productName}
                      </h2>

                      <p className="text-gray-500 text-sm mt-1">
                        ₹{item.price}
                      </p>

                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => {
                            dispatch(decreaseQuantity(item.id));
                          }}
                          className="w-8 h-8 border border-gray-300 rounded-md hover:bg-gray-100"
                        >
                          -
                        </button>

                        <span className="text-sm font-medium">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => {
                            dispatch(increaseQuantity(item.id));
                          }}
                          className="w-8 h-8 border border-gray-300 rounded-md hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Price & Remove */}
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">
                      ₹{item.price * item.quantity}
                    </p>

                    <button
                      onClick={() => {
                        dispatch(removeFromCart(item.id));
                      }}
                      className="text-sm text-red-500 hover:text-red-600 mt-3"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 h-fit">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between text-gray-600 mb-3">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>

              <div className="flex justify-between text-gray-600 mb-4">
                <span>Delivery</span>
                <span className="text-green-600">Free</span>
              </div>

              <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-bold text-gray-900">
                <span>Total</span>
                <span>₹{total}</span>
              </div>

              <button
                onClick={() => {
                  alert("ordered successfully");
                  dispatch(removeAllFromCart());
                }}
                className="w-full bg-gray-900 text-white py-3 rounded-md mt-6 hover:bg-gray-700 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCart;
