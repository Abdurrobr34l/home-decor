import React from "react";
import { Link, useParams } from "react-router";
import useProducts from "../Hooks/useProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const {products} = useProducts();
  // console.log(id, products);
  const findProductById = products.filter(product => product.id === parseInt(id))

  return (
      <div className="flex justify-center">
        {/*  material  dimensions stock   */}
        {findProductById.map(
          ({ id, name, image, alt, description, price, stock, category }) => (
            <div key={id} className="card bg-base-100 shadow-sm transition-transform duration-300 ease-linear hover:scale-[102%]">
              {/* Categorie */}
              <div className="badge absolute right-0 top-2 mr-2 py-5 px-3 font-bold bg-blue-100 text-blue-600 border-none rounded-full">
                {category}
              </div>

              {/* Product Image */}
              <figure>
                <img
                  src={image}
                  alt={alt}
                  className="h-[350px] w-full rounded-t-lg"
                />
              </figure>

              {/* Product Body */}
              <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>

                {/* Button */}
                <div className="card-actions items-center justify-end">
                  <p className="text-xl font-bold">${price}</p>
                  <Link to={`/product/${id}`} className="btn btn-style">View More</Link>
                </div>

                {/* Stock Details */}
                <p
                  className={`font-semibold ${
                    stock ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stock ? "In Stock" : "Not in Stock"}
                </p>
              </div>
            </div>
          )
        )}
      </div>
  )
};

export default ProductDetails;
