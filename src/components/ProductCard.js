const ProductCard = ({ product, dataCek }) => {
  console.log("PRODUCT CARD PROPS: ", { product, dataCek });
  const { imgURL, baslik, aciklama, fiyat } = product;

  return (
    <div className="card">
      <img src={imgURL} />
      <h3>{baslik}</h3>
      <p>{aciklama}</p>
      <p>{fiyat}</p>
      <button onClick={() => dataCek(baslik + " ürünü satın alındı!")}>
        Satın Al
      </button>
    </div>
  );
};

export default ProductCard;
