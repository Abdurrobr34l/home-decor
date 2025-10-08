
export const loadWishlist = () => {
  try {
    const data = localStorage.getItem("wishlist");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

// export const updateList = () => {
// const wishlist = loadWishlist()

// try {
//   const isExists = wishlist.some(p => p.id === product.id);
  
//   if (isExists) return alert("Already added in wishlist")
//     const updatedWishlist = [...wishlist, product];
//   localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
// } catch (err) {
//     console.log(err);
//     return [];
//   }
// };