import { useEffect } from "react";
import styles from "./ProductCard.module.css";
import { Button } from "reactstrap";

const ProductCard = ({ product, dataCek }) => {
  console.log("PRODUCT CARD PROPS: ", { product, dataCek });
  const { img, name, description, price } = product;

  // componentDidMount
  useEffect(() => {
    console.log("ComponentDidMount: ProductCard");
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log("ComponentDidUpdate: ProductCard");
  });

  return (
    <div className={styles.card} title={product.id}>
      <img src={img} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <Button
        color="primary"
        onClick={() => dataCek(name + " ürünü satın alındı!")}
      >
        Satın Al
      </Button>
    </div>
  );
};

export default ProductCard;
