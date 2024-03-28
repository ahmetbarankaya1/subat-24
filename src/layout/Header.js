import { useEffect } from "react";
import Nav from "../components/Nav";

const Header = ({ productsCount, productEkle, fetchProducts }) => {
  // component Did Mount!
  useEffect(() => {
    console.log("Header componenti oluşturuldu ve ekrana eklendi");
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log("ComponentDidUpdate: Header");
  });

  return (
    <header className="app-header">
      <h1>Reactet Şubat</h1>
      <Nav productsCount={productsCount} />
      <button onClick={productEkle}>+ Product Ekle</button>
      <button onClick={fetchProducts}> Ürünleri yükle</button>
    </header>
  );
};

export default Header;
