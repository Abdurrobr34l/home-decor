import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true) //* It is added for backup. Incase if its value in above state becomes false then this line will correct it.
    axios("./furnitureData.json")
    .then(data => setProducts(data.data))
    .catch(err => setError(err))
    .finally(() => setLoading(false))
  }, [])

  return { products, loading, error }
}

export default useProducts;