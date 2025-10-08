import React from "react";
import { useParams } from "react-router";
import useProducts from "../Hooks/useProducts";
import { useWishlist } from "../Hooks/useWishlist";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useProducts();

  const product = products.find((p) => p.id === parseInt(id));
  
  const { isWishlisted, toggleWishlist } = useWishlist(product);
  
  // Guard: show loading if product not found
  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-[80vh] px-4">
        <p className="text-gray-500 text-lg">Loading product details...</p>
      </div>
    );
  }
  
  const { name, image, alt, moreDescription, price, stock, category, material, dimensions } = product;

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4">
      <div className="card lg:card-side bg-base-100 shadow-lg border border-gray-200 transition-transform duration-300 ease-linear hover:scale-[102%] max-w-4xl">
        <figure className="lg:w-1/2">
          <img src={image} alt={alt} className="h-[400px] w-full rounded-l-lg object-cover" />
        </figure>

        <div className="card-body lg:w-1/2 space-y-3">
          <div className="flex items-center justify-between">
            <div className="badge w-fit bg-blue-100 text-blue-600 border-none py-4 px-3 font-bold rounded-full">
              {category}
            </div>

            <svg
              onClick={toggleWishlist} // use hook function
              className={`m-2 cursor-pointer transition-colors duration-300 ${isWishlisted ? "fill-blue-600" : "fill-transparent"}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="#155dfc"
              strokeWidth="2"
              width="24"
              height="24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
          </div>

          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <p className="text-gray-700 leading-relaxed">{moreDescription}</p>

          <div className="space-y-1 text-sm">
            <p className="text-gray-600"><span className="font-semibold text-gray-800">Material:</span> {material}</p>
            <p className="text-gray-600"><span className="font-semibold text-gray-800">Dimensions:</span> {dimensions}</p>
          </div>

          <div className="card-actions items-center justify-between mt-2">
            <p className="text-4xl font-bold text-gray-900">${price}</p>
            <span className={`font-semibold ${stock ? "text-green-600" : "text-red-600"}`}>{stock ? "In Stock" : "Out of Stock"}</span>
          </div>

          <button disabled={!stock} className={`btn w-full mt-4 ${stock ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}>
            {stock ? "Buy Now" : "Unavailable"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
