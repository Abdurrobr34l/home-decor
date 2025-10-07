import React, { useState } from "react";
import useProducts from "../Hooks/useProducts";

const Products = () => {
  //* Getting data from hook
  const { products, loading, error } = useProducts();
  console.log(loading, error);

  // * Searchbox
  const [search, setSearch] = useState("");
  const strSearch = search.trim().toLowerCase();

  const findSearchedProduct = strSearch
    ? products.filter((product) =>
        product.name.toLowerCase().includes(strSearch)
      )
    : products;
  console.log(findSearchedProduct);

  return (
    <div>
      {/* Search Box */}
      <div className="flex items-center justify-between pb-6">
        <h2 className="pl-1 text-4xl font-semibold border-l-4 border-blue-600">
          All Products <span className="text-sm font-bold text-[#131313]/60">({findSearchedProduct.length}) Products Found</span>
        </h2>

        <form>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            name="search"
            placeholder="Search Product"
            className="px-6 py-3 rounded-lg shadow-sm focus:outline-blue-600"
          />
        </form>
      </div>

      {/* All Products */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {/*  material  dimensions stock   */}
        {findSearchedProduct.map(
          ({ id, name, image, alt, description, price, stock, category }) => (
            <div key={id} className="card bg-base-100 shadow-sm">
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
