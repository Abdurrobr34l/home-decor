import React from "react";
import useProducts from "../Hooks/useProducts";

const Products = () => {
  const { products, loading, error } = useProducts();
  console.log(loading, error);

  return (
    <div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {/*  material  dimensions stock   */}
        {products.map(
          ({ id, name, image, alt, description, price, stock, category }) => (
            <div key={id} className="card bg-base-100 shadow-sm">
              {/* Categorie */}
              <div className="badge absolute right-0 top-2 mr-2 py-5 px-3 font-bold bg-blue-100 text-blue-600 border-none rounded-full">{category}</div>

              {/* Product Image */}
              <figure>
                <img src={image} alt={alt} className="h-[350px] w-full rounded-t-lg" />
              </figure>

              {/* Product Body */}
              <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>

                {/* Button */}
                <div className="card-actions items-center justify-end">
                  <p className="text-xl font-bold">${price}</p>
                  <button className="btn btn-style">Buy Now</button>
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
    </div>
  );
};

export default Products;
