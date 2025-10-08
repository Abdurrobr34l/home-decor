import { useState, useEffect } from "react";

export const useWishlist = (product) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    if (!product) return; // ← Add this guard

    const existingWishList = JSON.parse(localStorage.getItem("wishlist")) || [];
    const alreadyExists = existingWishList.some((item) => item?.id === product.id);
    setIsWishlisted(alreadyExists);
  }, [product]);

  const toggleWishlist = () => {
    if (!product) return; // ← Guard

    const existingWishList = JSON.parse(localStorage.getItem("wishlist")) || [];
    let updatedWishList;

    if (isWishlisted) {
      updatedWishList = existingWishList.filter((item) => item?.id !== product.id);
      setIsWishlisted(false);
    } else {
      updatedWishList = [...existingWishList, product];
      setIsWishlisted(true);
    }

    localStorage.setItem("wishlist", JSON.stringify(updatedWishList));
  };

  return { isWishlisted, toggleWishlist };
};