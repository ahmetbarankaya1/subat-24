import Nav from "../components/Nav";

const Header = ({ productsData, productEkle }) => {
  return (
    <header className="app-header">
      <h1>Reactet Şubat</h1>
      <Nav productsData={productsData} />
      <button onClick={productEkle}>+ Product Ekle</button>
    </header>
  );
};

export default Header;
