import { useState } from "react";
import Counter from "../components/Counter";
import ProductCard from "../components/ProductCard";

const ProductPage = ({ productsData }) => {
  const [filterText, setFilterText] = useState("");

  const inputChangeHandler = (e) => {
    setFilterText(e.target.value);
  };

  return (
    <>
      <h2>Products Page | filtered by {filterText}</h2>
      <div>
        <label>
          Ara
          <input type="text" onChange={inputChangeHandler} />
        </label>
      </div>
      <div className="products-container">
        {productsData
          .filter((product) =>
            product.name.toLowerCase().includes(filterText.toLowerCase())
          )
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
      <div>
        <Counter />
      </div>
    </>
  );
};

export default ProductPage;
