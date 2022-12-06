import ExpenseItem from "../components/ExpenseItem";

import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products");
      const json = await response.json();

      if (response.ok) {
        setProducts(json);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home">
      <div className="products">
        {products &&
          products.map((product) => (
            <ExpenseItem
              title={product.title}
              amount={"$" + product.amount}
              imagePath={product.imagePath}
            ></ExpenseItem>
          ))}
      </div>
    </div>
  );
};

export default Home;
