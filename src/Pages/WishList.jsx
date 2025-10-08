import React, { useState, useMemo } from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis,   Rectangle } from "recharts";
import { loadWishlist } from "../utilities/localStorage";

const WishList = () => {
  const [wishlist, setWishlist] = useState(() => loadWishlist());
  const [sortOrder, setSortOrder] = useState("none");

  // Load wishlist from localStorage on mount
  // useEffect(() => {
  //   const savedlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  //   // Remove null entries
  //   setWishlist(savedlist.filter(Boolean));
  // }, []);

  // Memoized sorted wishlist
  const sortedItems = useMemo(() => {
    if (!wishlist.length) return [];

    if (sortOrder === "price-asc") {
      return [...wishlist].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-desc") {
      return [...wishlist].sort((a, b) => b.price - a.price);
    } else {
      return [...wishlist];
    }
  }, [wishlist, sortOrder]);

  // Remove an item from wishlist
  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // Cart
  const totalOfCategory = {}
  wishlist.forEach(product => {
    const category = product.category;
    totalOfCategory[category] = (totalOfCategory[category] || 0) + product.price
  })

  const chartData = Object.keys(totalOfCategory).map(category => ({
    category,
    total: totalOfCategory[category],
  }))

  return (
    <section>
      {/* Title & Sort select */}
      <div className="flex items-center justify-between">
        <h2 className="pl-2 text-3xl font-semibold border-l-4 border-blue-600 md:text-4xl">
          Wish List{" "}
          <span className="text-sm font-bold text-[#131313]/60">
            ({wishlist.length}) Wishlist Found
          </span>
        </h2>

        {/* Sort select */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="select select-style"
        >
          <option value="none" className="focus:border-blue-600">
            Sort By
          </option>
          <option value="price-asc">Price Low to High</option>
          <option value="price-desc">Price High to Low</option>
        </select>
      </div>

      {/* Wishlist Products */}
      <ul className="list gap-5 my-10 rounded-box md:gap-10">
        {sortedItems.map(
          ({ id, name, price, category, moreDescription, image, alt }) => (
            <li
              key={id}
              className="list-row relative flex flex-col shadow-sm transition-transform duration-300 ease-linear hover:scale-[102%] md:grid"
            >
              {/* Delete Button */}
              <button
                onClick={() => removeFromWishlist(id)}
                className="absolute right-0 -mt-4.5 mr-2 font-black text-blue-600 text-end hover:cursor-pointer md:-mt-0 md:mr-4"
              >
                ✕
              </button>

              {/* Image */}
              <div>
                <img
                  className="size-full rounded-box md:size-32"
                  src={image}
                  alt={alt}
                />
              </div>

              {/* Contents */}
              <div className="grid-row-start-0">
                <div>{name}</div>
                <div className="mt-2 mb-3 text-xs uppercase font-semibold opacity-60">
                  {category}
                </div>
                <p className="list-col-wrap text-xs">{moreDescription}</p>
              </div>

              {/* Price */}
              <p className="place-content-end text-2xl font-bold">${price}</p>
            </li>
          )
        )}
      </ul>

      {/* Chart */}
      <div className="space-y-6">
        <h3 className="pl-2 text-3xl font-semibold border-l-4 border-blue-600 md:text-4xl">
          Wishlist Summary
        </h3>

        <div className="p-4 pl-0 h-80 bg-base-100 border rounded-xl">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={chartData}
              >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              {/* <Bar
                dataKey="pv"
                fill="#8884d8"
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              /> */}
              <Bar
                dataKey="total"
                fill="#155dfc"
                activeBar={<Rectangle fill="#131313a1" />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default WishList;
