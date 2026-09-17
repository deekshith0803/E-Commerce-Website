import React from "react";
import UserProductCard from "../../components/UserProductCard";
import { useSelector } from "react-redux";

const UserProduct = () => {
  const products = useSelector((state) => state.product.products);

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <UserProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default UserProduct;
