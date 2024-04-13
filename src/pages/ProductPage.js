import ProductCard from "../components/ProductCard";

const ProductPage = ({ productsData }) => {
  return (
    <>
      <h2>Products Page</h2>
      <div className="products-container">
        {productsData.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductPage;
