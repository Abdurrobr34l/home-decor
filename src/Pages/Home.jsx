import React from "react";
import { Link, useLoaderData } from "react-router";

const Home = () => {
  const productsData = useLoaderData();
  const featuredProducts = productsData.slice(0, 6)

  return (
    <div>
      <div className="flex items-center justify-between pb-6">
        <h2 className="pl-1 text-4xl font-semibold border-l-4 border-blue-600">Featured Products</h2>
        <Link to={"/products"} className="btn px-0 font-bold bg-transparent text-blue-600 border-none shadow-none hover:text-blue-700">See All Products</Link>
      </div>
      
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {/*  category    material  dimensions stock   */}
        {featuredProducts.map(
          ({ id, name, image, alt, description, price, stock }) => (
            <div key={id} className="card bg-base-100 shadow-sm">
              {/* Product Image */}
              <figure>
                <img src={image} alt={alt} className="h-[350px] w-full" />
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
                <p className={`font-semibold ${stock ? "text-green-600" : "text-red-600"}`}>
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

export default Home;
