import React from "react";
import { useParams } from "react-router";
import useProducts from "../Hooks/useProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useProducts();

  // find the selected product by id
  const product = products.find((p) => p.id === parseInt(id));

  // Guard: show loading or message if product not found
  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-[80vh] px-4">
        <p className="text-gray-500 text-lg">Loading product details...</p>
      </div>
    );
  }

  const {
    name,
    image,
    alt,
    moreDescription,
    price,
    stock,
    category,
    material,
    dimensions,
  } = product;

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4">
      <div className="card lg:card-side bg-base-100 shadow-lg border border-gray-200 transition-transform duration-300 ease-linear hover:scale-[102%] max-w-4xl">
        {/* Product Image */}
        <figure className="lg:w-1/2">
          <img
            src={image}
            alt={alt}
            className="h-[400px] w-full rounded-l-lg object-cover"
          />
        </figure>

        {/* Product Info */}
        <div className="card-body lg:w-1/2 space-y-3">
          {/* Category */}
          <div className="badge w-fit bg-blue-100 text-blue-600 border-none py-4 px-3 font-bold rounded-full">
            {category}
          </div>

          {/* Title & Description */}
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <p className="text-gray-700 leading-relaxed">{moreDescription}</p>

          {/* Material & Dimensions */}
          <div className="space-y-1 text-sm">
            <p className="text-gray-600">
              <span className="font-semibold text-gray-800">Material:</span>{" "}
              {material}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold text-gray-800">Dimensions:</span>{" "}
              {dimensions}
            </p>
          </div>

          {/* Price, Stock & Buy Button */}
          <div className="card-actions items-center justify-between mt-2">
            <p className="text-4xl font-bold text-gray-900">${price}</p>
            <span
              className={`font-semibold ${
                stock ? "text-green-600" : "text-red-600"
              }`}
            >
              {stock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          {/* Buy Button */}
          <button
            disabled={!stock}
            className={`btn w-full mt-4 ${
              stock
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {stock ? "Buy Now" : "Unavailable"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
